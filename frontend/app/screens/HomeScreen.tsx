import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Linking,
  TouchableOpacity,
} from "react-native";
import * as tf from "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
const isWeb = typeof document !== "undefined";

type Pred = { label: string; confidences: Record<string, number> } | null;

type TrainFile = { file: File; label: string; uri: string };

type TrainingAlgorithm = "dense_head" | "kmeans_centroid";

type KMeansClassifier = {
  labels: string[];
  centroids: number[][];
  featureDim: number;
  examplesPerLabel: Record<string, number>;
};

type ValidationResult = {
  total: number;
  correct: number;
  accuracy: number;
  byLabel: Record<string, { total: number; correct: number; accuracy: number }>;
};

type BundledDataManifestItem = {
  path: string;
  label: string;
  url?: string;
};

type BundledDataManifest = {
  generatedAt?: string;
  sourceRoot?: string;
  publicBasePath?: string;
  total?: number;
  items: BundledDataManifestItem[];
};

const BUNDLED_DATA_LIMIT = 100;
const AUTO_LOAD_BUNDLED_DATA = true;

const TRAINING_ALGORITHMS: Array<{ id: TrainingAlgorithm; title: string; note: string }> = [
  {
    id: "dense_head",
    title: "Dense head",
    note: "Train a small neural classifier on MobileNet embeddings.",
  },
  {
    id: "kmeans_centroid",
    title: "K-means / centroid",
    note: "Fast lightweight classifier based on class centroids.",
  },
];

function logTime() {
  const d = new Date();
  return [
    d.getHours().toString().padStart(2, "0"),
    d.getMinutes().toString().padStart(2, "0"),
    d.getSeconds().toString().padStart(2, "0"),
  ].join(":");
}

async function fileToImage(file: File): Promise<HTMLImageElement> {
  const url = URL.createObjectURL(file);
  const img = new Image();
  img.src = url;
  await new Promise<void>((res, rej) => {
    img.onload = () => res();
    img.onerror = (err) => rej(err);
  });
  return img;
}

function l2Normalize(values: number[]) {
  const norm = Math.sqrt(values.reduce((sum, v) => sum + v * v, 0));
  if (!Number.isFinite(norm) || norm === 0) return values;
  return values.map((v) => v / norm);
}

function squaredDistance(a: number[], b: number[]) {
  const n = Math.min(a.length, b.length);
  let sum = 0;
  for (let i = 0; i < n; i++) {
    const d = a[i] - b[i];
    sum += d * d;
  }
  return sum;
}

function confidencesFromDistances(labels: string[], distances: number[]) {
  const minDistance = Math.min(...distances);
  const temperature = 0.15;
  const scores = distances.map((d) => Math.exp(-(d - minDistance) / temperature));
  const total = scores.reduce((sum, v) => sum + v, 0) || 1;
  const confidences: Record<string, number> = {};
  labels.forEach((label, i) => {
    confidences[label] = scores[i] / total;
  });
  return confidences;
}

function countByLabel(files: Array<{ label: string }>) {
  return files.reduce<Record<string, number>>((acc, item) => {
    acc[item.label] = (acc[item.label] ?? 0) + 1;
    return acc;
  }, {});
}

function pickBalancedManifestItems(
  items: BundledDataManifestItem[],
  maxItems: number
) {
  const grouped = new Map<string, BundledDataManifestItem[]>();

  for (const item of items) {
    const label = item.label.trim();
    if (!label) continue;
    const arr = grouped.get(label) ?? [];
    arr.push(item);
    grouped.set(label, arr);
  }

  const labels = Array.from(grouped.keys()).sort();
  if (labels.length === 0) return [] as BundledDataManifestItem[];

  const perLabel = Math.max(1, Math.floor(maxItems / labels.length));
  return labels.flatMap((label) =>
    (grouped.get(label) ?? [])
      .sort((a, b) => a.path.localeCompare(b.path))
      .slice(0, perLabel)
  );
}

function splitValidationHoldout(files: TrainFile[]) {
  const grouped = new Map<string, TrainFile[]>();
  for (const file of files) {
    const arr = grouped.get(file.label) ?? [];
    arr.push(file);
    grouped.set(file.label, arr);
  }

  const train: TrainFile[] = [];
  const validation: TrainFile[] = [];

  for (const label of Array.from(grouped.keys()).sort()) {
    const group = (grouped.get(label) ?? []).sort((a, b) =>
      a.file.name.localeCompare(b.file.name)
    );
    group.forEach((item, index) => {
      if (index % 4 === 0) validation.push(item);
      else train.push(item);
    });
  }

  return { train, validation };
}

async function extractNormalizedEmbedding(net: mobilenet.MobileNet, file: File) {
  const img = await fileToImage(file);
  const feat = tf.tidy(() => {
    const emb = net.infer(img, true) as tf.Tensor;
    return emb.reshape([emb.shape[emb.shape.length - 1]]) as tf.Tensor1D;
  });
  try {
    return l2Normalize(Array.from(await feat.data()));
  } finally {
    feat.dispose();
  }
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <Text
      style={{
        fontWeight: "700",
        fontSize: 18,
        marginBottom: 8,
      }}
    >
      {children}
    </Text>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <View
      style={{
        backgroundColor: "#eef2ff",
        borderColor: "#c7d2fe",
        borderWidth: 1,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 999,
      }}
    >
      <Text style={{ fontSize: 12, fontWeight: "600" }}>{children}</Text>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------
export default function HomeScreen() {
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState<string | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [net, setNet] = useState<mobilenet.MobileNet | null>(null);

  // Train set (files + labels)
  const [trainFiles, setTrainFiles] = useState<TrainFile[]>([]);
  const [labelCounts, setLabelCounts] = useState<Record<string, number>>({});

  // Training algorithm and trained classifiers
  const [trainingAlgorithm, setTrainingAlgorithm] =
    useState<TrainingAlgorithm>("dense_head");

  // Head model
  const [headModel, setHeadModel] = useState<tf.LayersModel | null>(null);
  const [kMeansClassifier, setKMeansClassifier] =
    useState<KMeansClassifier | null>(null);

  // Previews
  const [trainPreviews, setTrainPreviews] = useState<
    Array<{ uri: string; label: string }>
  >([]);

  // Test image & prediction
  const [testPreview, setTestPreview] = useState<string | null>(null);
  const [testFile, setTestFile] = useState<File | null>(null);
  const [pred, setPred] = useState<Pred>(null);

  // Built-in fixture validation set
  const [validationFiles, setValidationFiles] = useState<TrainFile[]>([]);
  const [validationResult, setValidationResult] =
    useState<ValidationResult | null>(null);

  const autoLoadBundledDataStartedRef = useRef(false);
  const bundledDataLoadingRef = useRef(false);

  const pushMsg = useCallback((s: string) => {
    setMessages((m) => [`[${logTime()}] ${s}`, ...m].slice(0, 200));
  }, []);

  // -------------------------------------------------------------------------
  // Init TFJS + MobileNet
  // -------------------------------------------------------------------------
  useEffect(() => {
    (async () => {
      try {
        setLoading("Preparing TensorFlow.js backend...");
        if (
          tf.getBackend() !== "webgl" &&
          (tf as any).engine?.registryFactory?.["webgl"]
        ) {
          await tf.setBackend("webgl");
        }
        await tf.ready();
        pushMsg(`TFJS backend: ${tf.getBackend()}`);

        setLoading("Loading MobileNet (pretrained base)...");
        const model = await mobilenet.load({ version: 2, alpha: 1.0 });
        setNet(model);

        setReady(true);
        setLoading(null);
        pushMsg(
          "Ready. Import a folder as /<label>/<image>. Then train the head model and run predictions."
        );
      } catch (e: any) {
        setLoading(null);
        pushMsg(`[ERROR] ${e?.message || String(e)}`);
      }
    })();
  }, [pushMsg]);

  // -------------------------------------------------------------------------
  // Folder Import: root/.../<label>/<image>
  // -------------------------------------------------------------------------
  const onAddFolder = useCallback(
    async (files: FileList | null) => {
      if (!files) return;
      if (!isWeb) {
        pushMsg("Folder import is only supported on web.");
        return;
      }

      setLoading("Scanning folder...");
      const newTrain: TrainFile[] = [];
      const previews: Array<{ uri: string; label: string }> = [];
      const counts: Record<string, number> = { ...labelCounts };
      let added = 0;

      try {
        for (let i = 0; i < files.length; i++) {
          const f = files[i];
          if (!(f.type && f.type.startsWith("image/"))) continue;

          const rel = (f as any).webkitRelativePath || f.name;
          const parts = rel.split("/").filter(Boolean);
          const label =
            parts.length >= 2 ? parts[parts.length - 2] : "root";

          const uri = URL.createObjectURL(f);
          newTrain.push({ file: f, label, uri });
          previews.push({ uri, label });
          counts[label] = (counts[label] ?? 0) + 1;
          added++;
        }

        if (added === 0) {
          pushMsg("No images found in the selected folder.");
        } else {
          setTrainFiles((prev) => [...prev, ...newTrain]);
          setTrainPreviews((prev) => [...previews, ...prev].slice(0, 200));
          setLabelCounts(counts);
          setValidationFiles([]);
          setValidationResult(null);
          pushMsg(`Imported ${added} training image(s).`);
        }
      } catch (e: any) {
        pushMsg(`[ERROR] folder import: ${e?.message || String(e)}`);
      } finally {
        setLoading(null);
      }
    },
    [labelCounts, pushMsg]
  );

  // -------------------------------------------------------------------------
  // Load bundled fixture data from the generated static manifest.
  // The manifest and images are served from frontend/app/public on both
  // GitHub Pages and local Expo web builds.
  // -------------------------------------------------------------------------
  const onLoadBundledData = useCallback(async () => {
    if (!isWeb) {
      pushMsg("Bundled data loading is only supported on web.");
      return;
    }

    if (bundledDataLoadingRef.current) {
      pushMsg("Bundled demo data is already loading.");
      return;
    }

    if (trainFiles.length > 0 || validationFiles.length > 0) {
      pushMsg("Bundled demo data is already loaded. Click Clear first to reload it.");
      return;
    }

    bundledDataLoadingRef.current = true;
    setLoading("Loading bundled fixture data...");
    setPred(null);
    setValidationResult(null);

      try {
        const currentLocation =
          typeof window !== "undefined" ? window.location : null;
        const manifestCandidates = [
          "./data_manifest.json",
          "data_manifest.json",
        ];

        let manifest:
          | BundledDataManifest
          | BundledDataManifestItem[]
          | null = null;
        let manifestBaseUrl = "";
        const errors: string[] = [];

        for (const manifestUrl of manifestCandidates) {
          try {
            const manifestResponse = await fetch(manifestUrl, {
              cache: "no-store",
            });
            const body = await manifestResponse.text();
            const firstChar = body.trimStart()[0];

            if (!manifestResponse.ok) {
              errors.push(`${manifestUrl}: status=${manifestResponse.status}`);
              continue;
            }
            if (firstChar !== "{" && firstChar !== "[") {
              errors.push(`${manifestUrl}: response was not JSON`);
              continue;
            }

            manifest = JSON.parse(body) as
              | BundledDataManifest
              | BundledDataManifestItem[];
            const resolvedManifestUrl = new URL(
              manifestUrl,
              currentLocation?.href || "http://localhost/"
            );
            manifestBaseUrl = new URL(".", resolvedManifestUrl)
              .toString()
              .replace(/\/$/, "");
            break;
          } catch (err: any) {
            errors.push(`${manifestUrl}: ${err?.message || String(err)}`);
          }
        }

        if (!manifest) {
          throw new Error(
            `Could not load data_manifest.json from the web public assets. Confirm frontend/app/public/data_manifest.json is available. Tried: ${errors.join(" | ")}`
          );
        }

        const rawItems = Array.isArray(manifest) ? manifest : manifest.items;
        const selected = pickBalancedManifestItems(rawItems ?? [], BUNDLED_DATA_LIMIT);

        if (selected.length === 0) {
          throw new Error("data_manifest.json does not contain any image entries.");
        }

        const loaded: TrainFile[] = [];
        for (let i = 0; i < selected.length; i++) {
          const item = selected[i];
          const rawUrl = item.url ?? item.path;
          const url = /^https?:\/\//.test(rawUrl)
            ? rawUrl
            : new URL(rawUrl.replace(/^\/+/, ""), `${manifestBaseUrl}/`).toString();
          const imageResponse = await fetch(url, { cache: "no-store" });
          if (!imageResponse.ok) {
            throw new Error(`Failed to load ${url}: status=${imageResponse.status}`);
          }
          const blob = await imageResponse.blob();
          const name = item.path.split("/").pop() || `image-${i}.jpg`;
          const file = new File([blob], name, {
            type: blob.type || "image/jpeg",
          });
          loaded.push({ file, label: item.label, uri: URL.createObjectURL(file) });

          if ((i + 1) % 25 === 0) {
            pushMsg(`Loaded ${i + 1}/${selected.length} bundled image(s).`);
            await tf.nextFrame();
          } else if (i % 12 === 0) {
            await tf.nextFrame();
          }
        }

        const { train, validation } = splitValidationHoldout(loaded);
        if (train.length === 0 || validation.length === 0) {
          throw new Error("Bundled data must contain both train and validation images.");
        }

        if (headModel) {
          headModel.dispose();
        }
        setHeadModel(null);
        setKMeansClassifier(null);
        setTestFile(null);
        setTestPreview(null);
        setTrainFiles(train);
        setValidationFiles(validation);
        setTrainPreviews(train.map(({ uri, label }) => ({ uri, label })).slice(0, 200));
        setLabelCounts(countByLabel(train));

        pushMsg(
          `Loaded bundled fixture data: total=${loaded.length}, train=${train.length}, validation=${validation.length}, labels=${Object.keys(countByLabel(loaded)).join(", ")}`
        );
      } catch (e: any) {
        pushMsg(`[ERROR] load bundled data: ${e?.message || String(e)}`);
      } finally {
        bundledDataLoadingRef.current = false;
        setLoading(null);
      }
    }, [headModel, pushMsg, trainFiles.length, validationFiles.length]
  );

  // -------------------------------------------------------------------------
  // Auto-load the bundled fixture data once after TensorFlow.js and MobileNet
  // are ready. This keeps the app usable immediately after page load while
  // avoiding repeated reloads during re-renders.
  // -------------------------------------------------------------------------
  useEffect(() => {
    if (!AUTO_LOAD_BUNDLED_DATA) return;
    if (!ready || !net) return;
    if (!isWeb) return;
    if (autoLoadBundledDataStartedRef.current) return;
    if (trainFiles.length > 0 || validationFiles.length > 0) return;

    autoLoadBundledDataStartedRef.current = true;
    void onLoadBundledData();
  }, [net, onLoadBundledData, ready, trainFiles.length, validationFiles.length]);

  // -------------------------------------------------------------------------
  // Train selected classifier on top of MobileNet features
  // -------------------------------------------------------------------------
  const onTrainHead = useCallback(async () => {
    if (!net) {
      pushMsg("Base model (MobileNet) is not ready yet.");
      return;
    }
    if (trainFiles.length === 0) {
      pushMsg("No training images. Please import a folder first.");
      return;
    }

    setPred(null);
    setValidationResult(null);

    if (trainingAlgorithm === "kmeans_centroid") {
      setLoading("Extracting features & building k-means classifier...");
      if (headModel) {
        headModel.dispose();
      }
      setHeadModel(null);
      setKMeansClassifier(null);

      try {
        const labels = Array.from(new Set(trainFiles.map((t) => t.label))).sort();
        const sums: Record<string, number[]> = {};
        const counts: Record<string, number> = {};
        let featureDim: number | null = null;

        pushMsg(
          `Training k-means classifier on ${trainFiles.length} example(s), ${labels.length} class(es)...`
        );

        for (let i = 0; i < trainFiles.length; i++) {
          const { file, label } = trainFiles[i];
          const vec = await extractNormalizedEmbedding(net, file);

          if (featureDim == null) {
            featureDim = vec.length;
          }
          if (featureDim !== vec.length) {
            throw new Error("Feature dimension changed while extracting embeddings.");
          }

          if (!sums[label]) {
            sums[label] = new Array(vec.length).fill(0);
            counts[label] = 0;
          }
          for (let j = 0; j < vec.length; j++) {
            sums[label][j] += vec[j];
          }
          counts[label] += 1;

          if (i % 16 === 0) {
            await tf.nextFrame();
          }
        }

        if (featureDim == null) {
          throw new Error("Could not infer feature dimension.");
        }

        const centroids = labels.map((label) => {
          const count = counts[label] || 1;
          const mean = sums[label].map((v) => v / count);
          return l2Normalize(mean);
        });

        setKMeansClassifier({
          labels,
          centroids,
          featureDim,
          examplesPerLabel: counts,
        });
        pushMsg("K-means classifier is ready. You can now run predictions.");
      } catch (e: any) {
        pushMsg(`[ERROR] train k-means: ${e?.message || String(e)}`);
      } finally {
        setLoading(null);
      }
      return;
    }

    setLoading("Extracting features & training head model...");
    if (headModel) {
      headModel.dispose();
    }
    setHeadModel(null);
    setKMeansClassifier(null);

    try {
      // Build label index mapping
      const labelSet = Array.from(
        new Set(trainFiles.map((t) => t.label))
      ).sort();
      const label2idx: Record<string, number> = {};
      labelSet.forEach((lab, idx) => {
        label2idx[lab] = idx;
      });
      const numClasses = labelSet.length;

      pushMsg(
        `Training head model on ${trainFiles.length} example(s), ${numClasses} class(es)...`
      );

      const xs: tf.Tensor1D[] = [];
      const ys: tf.Tensor1D[] = [];
      let featureDim: number | null = null;

      for (let i = 0; i < trainFiles.length; i++) {
        const { file, label } = trainFiles[i];
        const img = await fileToImage(file);

        const feat = tf.tidy(() => {
          // MobileNet infer with "embedding" = true -> feature vector
          const emb = net.infer(img, true) as tf.Tensor;
          const flat = emb.reshape([emb.shape[emb.shape.length - 1]]);
          return flat as tf.Tensor1D;
        });

        if (featureDim == null) {
          featureDim = feat.shape[0];
        }

        xs.push(feat);

        const idx = label2idx[label];
        const y = tf.oneHot(
          tf.tensor1d([idx], "int32"),
          numClasses
        ).squeeze() as tf.Tensor1D;
        ys.push(y);

        if (i % 16 === 0) {
          await tf.nextFrame(); // keep UI responsive
        }
      }

      if (featureDim == null) {
        throw new Error("Could not infer feature dimension.");
      }

      const xTrain = tf.stack(xs) as tf.Tensor2D; // [N, D]
      const yTrain = tf.stack(ys) as tf.Tensor2D; // [N, C]

      xs.forEach((t) => t.dispose());
      ys.forEach((t) => t.dispose());

      const model = tf.sequential();
      model.add(
        tf.layers.dense({
          inputShape: [featureDim],
          units: 128,
          activation: "relu",
        })
      );
      model.add(tf.layers.dropout({ rate: 0.3 }));
      model.add(
        tf.layers.dense({
          units: numClasses,
          activation: "softmax",
        })
      );

      model.compile({
        optimizer: tf.train.adam(0.001),
        loss: "categoricalCrossentropy",
        metrics: ["accuracy"],
      });

      const batchSize = Math.min(16, trainFiles.length);
      const epochs = 20;

      await model.fit(xTrain, yTrain, {
        epochs,
        batchSize,
        shuffle: true,
        callbacks: {
          onEpochEnd: async (epoch, logs) => {
            const acc =
              (logs?.acc as number | undefined) ??
              (logs?.accuracy as number | undefined);
            pushMsg(
              `Epoch ${epoch + 1}/${epochs} - loss=${
                logs?.loss?.toFixed(4) ?? "n/a"
              } acc=${acc != null ? acc.toFixed(4) : "n/a"}`
            );
            await tf.nextFrame();
          },
        },
      });

      xTrain.dispose();
      yTrain.dispose();

      // Attach label mapping to the model instance
      (model as any).__label2idx = label2idx;
      (model as any).__idx2label = labelSet;

      setHeadModel(model);
      pushMsg("Training finished. You can now run predictions.");
    } catch (e: any) {
      pushMsg(`[ERROR] train: ${e?.message || String(e)}`);
    } finally {
      setLoading(null);
    }
  }, [headModel, net, trainFiles, trainingAlgorithm, pushMsg]);

  // -------------------------------------------------------------------------
  // Test image selection & Predict button
  // -------------------------------------------------------------------------
  const onSelectTest = useCallback((file: File | null) => {
    setPred(null);
    setTestFile(file);
    if (file) {
      setTestPreview(URL.createObjectURL(file));
    } else {
      setTestPreview(null);
    }
  }, []);

  const predictFile = useCallback(
    async (file: File) => {
      if (!net) {
        throw new Error("Base model is not ready yet.");
      }

      if (trainingAlgorithm === "kmeans_centroid") {
        if (!kMeansClassifier) {
          throw new Error("K-means classifier is not trained yet. Click 'Train' first.");
        }

        const vec = await extractNormalizedEmbedding(net, file);
        if (vec.length !== kMeansClassifier.featureDim) {
          throw new Error("Feature dimension is inconsistent with the trained classifier.");
        }

        const distances = kMeansClassifier.centroids.map((centroid) =>
          squaredDistance(vec, centroid)
        );
        let bestIdx = 0;
        for (let i = 1; i < distances.length; i++) {
          if (distances[i] < distances[bestIdx]) bestIdx = i;
        }

        const confidences = confidencesFromDistances(
          kMeansClassifier.labels,
          distances
        );
        const topLabel = kMeansClassifier.labels[bestIdx];
        return { label: topLabel, confidences };
      }

      if (!headModel) {
        throw new Error("Head model is not trained yet. Click 'Train' first.");
      }

      const img = await fileToImage(file);
      const feat = tf.tidy(() => {
        const emb = net.infer(img, true) as tf.Tensor;
        const flat = emb
          .reshape([1, emb.shape[emb.shape.length - 1]])
          .as2D(1, emb.shape[emb.shape.length - 1]);
        return flat as tf.Tensor2D;
      });

      const probsTensor = headModel.predict(feat) as tf.Tensor2D;
      const probs = Array.from(await probsTensor.data());
      const labelSet: string[] = (headModel as any).__idx2label || [];

      feat.dispose();
      probsTensor.dispose();

      if (!labelSet.length || probs.length !== labelSet.length) {
        throw new Error("Label mapping is inconsistent with predictions.");
      }

      const confidences: Record<string, number> = {};
      labelSet.forEach((lab, idx) => {
        confidences[lab] = probs[idx];
      });

      let bestIdx = 0;
      for (let i = 1; i < probs.length; i++) {
        if (probs[i] > probs[bestIdx]) bestIdx = i;
      }
      const topLabel = labelSet[bestIdx];
      return { label: topLabel, confidences };
    },
    [net, headModel, kMeansClassifier, trainingAlgorithm]
  );

  const onPredictBtn = useCallback(async () => {
    if (!testFile) {
      pushMsg("Pick a test image first.");
      return;
    }

    setLoading(
      trainingAlgorithm === "kmeans_centroid"
        ? "Running k-means inference..."
        : "Running inference..."
    );
    setPred(null);

    try {
      const result = await predictFile(testFile);
      setPred(result);
      pushMsg(`Prediction: ${result.label}`);
    } catch (e: any) {
      pushMsg(`[ERROR] predict: ${e?.message || String(e)}`);
    } finally {
      setLoading(null);
    }
  }, [predictFile, pushMsg, testFile, trainingAlgorithm]);

  const onValidateModel = useCallback(async () => {
    if (validationFiles.length === 0) {
      pushMsg("No validation images. Click 'Load bundled data (100)' first.");
      return;
    }

    setLoading("Running model validation...");
    setValidationResult(null);

    try {
      const byLabel: ValidationResult["byLabel"] = {};
      let correct = 0;

      for (let i = 0; i < validationFiles.length; i++) {
        const item = validationFiles[i];
        const result = await predictFile(item.file);
        const ok = result.label === item.label;

        if (!byLabel[item.label]) {
          byLabel[item.label] = { total: 0, correct: 0, accuracy: 0 };
        }
        byLabel[item.label].total += 1;
        if (ok) {
          correct += 1;
          byLabel[item.label].correct += 1;
        }

        if (i % 8 === 0) {
          await tf.nextFrame();
        }
      }

      Object.values(byLabel).forEach((item) => {
        item.accuracy = item.total === 0 ? 0 : item.correct / item.total;
      });

      const total = validationFiles.length;
      const accuracy = total === 0 ? 0 : correct / total;
      const nextResult = { total, correct, accuracy, byLabel };
      setValidationResult(nextResult);
      pushMsg(
        `Validation accuracy: ${(accuracy * 100).toFixed(1)}% (${correct}/${total})`
      );
    } catch (e: any) {
      pushMsg(`[ERROR] validation: ${e?.message || String(e)}`);
    } finally {
      setLoading(null);
    }
  }, [predictFile, pushMsg, validationFiles]);

  // Clear all
  const onClearAll = useCallback(() => {
    setTrainFiles([]);
    setTrainPreviews([]);
    setLabelCounts({});
    setTestFile(null);
    setTestPreview(null);
    setPred(null);
    setValidationFiles([]);
    setValidationResult(null);
    if (headModel) {
      headModel.dispose();
    }
    setHeadModel(null);
    setKMeansClassifier(null);
    pushMsg("Cleared training data, validation data, test image, and trained classifiers.");
  }, [headModel, pushMsg]);

  const REPO_URL = "https://github.com/europanite/client_side_ai_training";

  // -------------------------------------------------------------------------
  // UI helpers
  // -------------------------------------------------------------------------
  const FilePickFolder = () => {
    if (!isWeb) return null as any;

    const ref = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
      if (!ref.current) return;
      ref.current.setAttribute("webkitdirectory", "");
      ref.current.setAttribute("directory", "");
      ref.current.setAttribute("mozdirectory", "");
    }, []);

    return (
      <input
        ref={ref}
        type="file"
        multiple
        style={{ marginRight: 8, marginTop: 4, marginBottom: 4 }}
        onChange={(e: any) =>
          onAddFolder(e.target.files as FileList)
        }
      />
    );
  };

  const FilePickTest = () => {
    if (!isWeb) return null as any;
    return (
      // @ts-ignore web-only
      <input
        type="file"
        accept="image/*"
        style={{ marginRight: 8, marginTop: 4, marginBottom: 4 }}
        onChange={(e: any) =>
          onSelectTest(
            (e.target.files as FileList)?.[0] || null
          )
        }
      />
    );
  };

  const LabelBadges = useMemo(() => {
    const entries = Object.entries(labelCounts);
    if (entries.length === 0) {
      return (
        <Text style={{ color: "#666" }}>
          (No training images yet)
        </Text>
      );
    }
    return (
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6 }}>
        {entries.map(([label, n]) => (
          <Pill key={label}>
            {label}: {n}
          </Pill>
        ))}
      </View>
    );
  }, [labelCounts]);

  const groupedPreviews = useMemo(() => {
    const m = new Map<string, string[]>();
    for (const p of trainPreviews) {
      const arr = m.get(p.label) ?? [];
      arr.push(p.uri);
      m.set(p.label, arr);
    }
    return Array.from(m.entries());
  }, [trainPreviews]);

  // -------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#f8fafc" }}
      contentContainerStyle={{ padding: 16 }}
    >
      <TouchableOpacity onPress={() => Linking.openURL(REPO_URL)}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "800",
            marginBottom: 12,
            color: "#1d4ed8",
            textDecorationLine: "underline",
          }}
        >
          Client Side AI Training Environment
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 14,
          color: "#334155",
          marginBottom: 16,
        }}
      >
        A browser-based Image AI training playground. You can train a model using transfer learning on your browser, with your own labeled images.
      </Text>
      {/* Status */}
      <View
        style={{
          marginBottom: 16,
          padding: 12,
          borderRadius: 12,
          borderWidth: 1,
          backgroundColor: "#fff",
        }}
      >
        <SectionTitle>Status</SectionTitle>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}
        >
          {ready ? <Pill>Ready</Pill> : <Pill>Loading</Pill>}
          {loading && (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
              }}
            >
              <ActivityIndicator />
              <Text>{loading}</Text>
            </View>
          )}
        </View>
      </View>

      {/* Step 1: Import train data */}
      <View
        style={{
          marginBottom: 16,
          padding: 12,
          borderRadius: 12,
          borderWidth: 1,
          backgroundColor: "#fff",
        }}
      >
        <SectionTitle>1. Import training data</SectionTitle>
        <Text style={{ marginBottom: 8 }}>
          Select the top folder. The directory name above each image
          will be used as the class name (e.g. /cats/img1.jpg =&gt; "cats").
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            marginBottom: 8,
            flexWrap: "wrap",
          }}
        >
          <FilePickFolder />
          <TouchableOpacity
            disabled={loading !== null || trainFiles.length > 0 || validationFiles.length > 0}
            onPress={onLoadBundledData}
            style={{
              backgroundColor: "#ede9fe",
              borderWidth: 1,
              borderColor: "#ddd6fe",
              paddingHorizontal: 10,
              paddingVertical: 8,
              borderRadius: 8,
              opacity:
                loading !== null || trainFiles.length > 0 || validationFiles.length > 0
                  ? 0.55
                  : 1,
            }}
          >
            <Text
              style={{
                fontWeight: "700",
                color: "#5b21b6",
              }}
            >
              Load bundled data (100)
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onClearAll}
            style={{
              backgroundColor: "#fee2e2",
              borderWidth: 1,
              borderColor: "#fecaca",
              paddingHorizontal: 10,
              paddingVertical: 8,
              borderRadius: 8,
            }}
          >
            <Text
              style={{
                fontWeight: "700",
                color: "#991b1b",
              }}
            >
              Clear all
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{ color: "#475569", marginBottom: 6 }}>
          Training images: {trainFiles.length}
        </Text>
        <Text style={{ color: "#475569", marginBottom: 6 }}>
          Validation holdout images: {validationFiles.length}
        </Text>
        <View style={{ marginTop: 6 }}>{LabelBadges}</View>
      </View>

      {/* Step 2: Train head model */}
      <View
        style={{
          marginBottom: 16,
          padding: 12,
          borderRadius: 12,
          borderWidth: 1,
          backgroundColor: "#fff",
        }}
      >
        <SectionTitle>2. Training algorithm</SectionTitle>
        <Text style={{ marginBottom: 8 }}>
          Select the classifier used on top of MobileNet embeddings.
          Dense head is the original trainable neural classifier. K-means
          is a fast centroid-based lightweight classifier.
        </Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: 10,
          }}
        >
          {TRAINING_ALGORITHMS.map((opt) => {
            const selected = trainingAlgorithm === opt.id;
            return (
              <TouchableOpacity
                key={opt.id}
                onPress={() => setTrainingAlgorithm(opt.id)}
                style={{
                  backgroundColor: selected ? "#dbeafe" : "#f8fafc",
                  borderWidth: 1,
                  borderColor: selected ? "#60a5fa" : "#cbd5e1",
                  paddingHorizontal: 10,
                  paddingVertical: 8,
                  borderRadius: 8,
                  maxWidth: 260,
                }}
              >
                <Text
                  style={{
                    fontWeight: "800",
                    color: selected ? "#1d4ed8" : "#334155",
                  }}
                >
                  {opt.title}
                </Text>
                <Text style={{ color: "#64748b", fontSize: 12 }}>
                  {opt.note}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 8,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={onTrainHead}
            style={{
              backgroundColor: "#dcfce7",
              borderWidth: 1,
              borderColor: "#bbf7d0",
              paddingHorizontal: 12,
              paddingVertical: 8,
              borderRadius: 8,
              alignSelf: "flex-start",
            }}
          >
            <Text
              style={{
                fontWeight: "800",
                color: "#166534",
              }}
            >
              {trainingAlgorithm === "dense_head" ? "Train head model" : "Train k-means"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onValidateModel}
            style={{
              backgroundColor: "#fef3c7",
              borderWidth: 1,
              borderColor: "#fde68a",
              paddingHorizontal: 12,
              paddingVertical: 8,
              borderRadius: 8,
              alignSelf: "flex-start",
            }}
          >
            <Text
              style={{
                fontWeight: "800",
                color: "#92400e",
              }}
            >
              Validate model
            </Text>
          </TouchableOpacity>
        </View>
        {validationResult && (
          <View
            style={{
              marginTop: 10,
              padding: 10,
              borderRadius: 8,
              backgroundColor: "#fffbeb",
              borderWidth: 1,
              borderColor: "#fde68a",
              gap: 6,
            }}
          >
            <Text style={{ fontWeight: "800", color: "#92400e" }}>
              Validation accuracy: {(validationResult.accuracy * 100).toFixed(1)}%
              ({validationResult.correct}/{validationResult.total})
            </Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6 }}>
              {Object.entries(validationResult.byLabel).map(([label, item]) => (
                <Pill key={label}>
                  {label}: {(item.accuracy * 100).toFixed(1)}%
                  ({item.correct}/{item.total})
                </Pill>
              ))}
            </View>
          </View>
        )}
        <Text
          style={{
            color: "#64748b",
            fontSize: 12,
            marginTop: 8,
          }}
        >
          Tip: use K-means for quick checks with very small datasets. Use
          Dense head when you want the original trainable classifier.
        </Text>
      </View>

      {/* Step 3: Test & Predict */}
      <View
        style={{
          marginBottom: 16,
          padding: 12,
          borderRadius: 12,
          borderWidth: 1,
          backgroundColor: "#fff",
        }}
      >
        <SectionTitle>3. Test &amp; Predict</SectionTitle>
        <Text style={{ marginBottom: 8 }}>
          Select a test image and then press "Predict" to use the selected trained classifier.
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            marginBottom: 8,
            flexWrap: "wrap",
          }}
        >
          <FilePickTest />
          <TouchableOpacity
            onPress={onPredictBtn}
            style={{
              backgroundColor: "#e0f2fe",
              borderWidth: 1,
              borderColor: "#bae6fd",
              paddingHorizontal: 12,
              paddingVertical: 8,
              borderRadius: 8,
            }}
          >
            <Text
              style={{
                fontWeight: "800",
                color: "#075985",
              }}
            >
              Predict
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ gap: 8, marginTop: 8 }}>
          {testPreview && (
            <View>
              <Text
                style={{
                  fontWeight: "700",
                  marginBottom: 6,
                }}
              >
                Test Image
              </Text>
              {/* @ts-ignore web-only */}
              <img
                src={testPreview}
                alt="test"
                style={{
                  maxWidth: 320,
                  borderRadius: 8,
                  border: "1px solid #ddd",
                }}
              />
            </View>
          )}
          {pred && (
            <View>
              <Text
                style={{
                  fontWeight: "700",
                  marginBottom: 6,
                }}
              >
                Prediction
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: 6,
                }}
              >
                <Pill>Top: {pred.label}</Pill>
                {Object.entries(pred.confidences)
                  .sort((a, b) => b[1] - a[1])
                  .slice(0, 5)
                  .map(([k, v]) => (
                    <Pill key={k}>
                      {k}: {(v * 100).toFixed(1)}%
                    </Pill>
                  ))}
              </View>
            </View>
          )}
        </View>
      </View>

      {/* Training Data Previews */}
      <View
        style={{
          marginBottom: 16,
          padding: 12,
          borderRadius: 12,
          borderWidth: 1,
          backgroundColor: "#fff",
        }}
      >
        <SectionTitle>Training Data Previews</SectionTitle>
        {groupedPreviews.length === 0 ? (
          <Text style={{ color: "#666" }}>(Nothing yet)</Text>
        ) : (
          <View style={{ gap: 12 }}>
            {groupedPreviews.map(([label, uris]) => (
              <View key={label}>
                <Text
                  style={{
                    fontWeight: "700",
                    marginBottom: 6,
                  }}
                >
                  {label}
                </Text>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  {uris.map((uri, i) => (
                    <View key={i} style={{ alignItems: "center" }}>
                      {/* @ts-ignore web-only */}
                      <img
                        src={uri}
                        alt={label}
                        style={{
                          width: 96,
                          height: 96,
                          objectFit: "cover",
                          borderRadius: 8,
                          border: "1px solid #e5e7eb",
                        }}
                      />
                    </View>
                  ))}
                </ScrollView>
              </View>
            ))}
          </View>
        )}
      </View>

      {/* Console */}
      <View
        style={{
          marginBottom: 32,
          padding: 12,
          borderRadius: 12,
          borderWidth: 1,
          backgroundColor: "#fff",
        }}
      >
        <SectionTitle>Console</SectionTitle>
        <View
          style={{
            backgroundColor: "#0b1220",
            borderRadius: 8,
            padding: 10,
          }}
        >
          {messages.length === 0 ? (
            <Text
              style={{
                color: "#9ca3af",
                fontFamily: "monospace",
              }}
            >
              (No output yet.)
            </Text>
          ) : (
            messages.map((m, i) => (
              <Text
                key={i}
                style={{
                  color: "#e5e7eb",
                  fontFamily: "monospace",
                  marginBottom: 4,
                }}
              >
                {m}
              </Text>
            ))
          )}
        </View>
      </View>

      <Text
        style={{
          color: "#64748b",
          fontSize: 12,
          marginBottom: 24,
        }}
      >
        Notes: Folder format is <code>.../&lt;label&gt;/&lt;image
        files&gt;</code>. Select a folder, or click <b>Load bundled data (100)</b>
        after preparing <code>data_manifest.json</code>. Choose an algorithm,
        click <b>Train</b>, then click <b>Validate model</b> or choose a test image and
        click <b>Predict</b>. Images never leave your device.
      </Text>
    </ScrollView>
  );
}

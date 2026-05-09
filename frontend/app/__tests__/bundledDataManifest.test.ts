import fs from 'fs';
import path from 'path';

const IMAGE_RE = /\.(jpe?g|png|webp|gif)$/i;

type Manifest = {
  total: number;
  items: Array<{ path: string; label: string; url?: string }>;
};

function publicDataDir() {
  return path.resolve(__dirname, '../public/data');
}

function repoRootDataDir() {
  return path.resolve(__dirname, '../../../data');
}

function resolveDataDir() {
  const candidates = [
    process.env.AI_TRAINING_DATA_DIR,
    publicDataDir(),
    repoRootDataDir(),
  ].filter((candidate): candidate is string => Boolean(candidate));

  return candidates.find((candidate) => fs.existsSync(candidate)) || candidates[0];
}

describe('bundled validation fixture data', () => {
  const dataDir = resolveDataDir();
  const manifestPath =
    process.env.AI_TRAINING_DATA_MANIFEST ||
    path.resolve(__dirname, '../public/data_manifest.json');

  test('data directory has at least two image labels', () => {
    expect(fs.existsSync(dataDir)).toBe(true);

    const labelCounts = fs
      .readdirSync(dataDir, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => {
        const imageCount = fs
          .readdirSync(path.join(dataDir, entry.name), { withFileTypes: true })
          .filter((file) => file.isFile() && IMAGE_RE.test(file.name)).length;
        return [entry.name, imageCount] as const;
      })
      .filter(([, imageCount]) => imageCount > 0);

    expect(labelCounts.length).toBeGreaterThanOrEqual(2);
    for (const [, imageCount] of labelCounts) {
      expect(imageCount).toBeGreaterThanOrEqual(10);
    }
  });

  test('generated data_manifest.json is loadable by the browser UI', () => {
    expect(fs.existsSync(manifestPath)).toBe(true);

    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8')) as Manifest;
    expect(manifest.items.length).toBeGreaterThanOrEqual(20);
    expect(manifest.total).toBe(manifest.items.length);

    const labels = new Set(manifest.items.map((item) => item.label));
    expect(labels.size).toBeGreaterThanOrEqual(2);

    for (const item of manifest.items) {
      expect(item.path).toMatch(/^data\//);
      expect(item.url || item.path).toMatch(/^data\//);
      expect(item.label.length).toBeGreaterThan(0);
    }
  });
});

// Make matchers optional so missing packages or environment differences don't crash CI.
try {
  require('@testing-library/jest-native/extend-expect');
} catch {}
try {
  require('@testing-library/jest-dom');
} catch {}

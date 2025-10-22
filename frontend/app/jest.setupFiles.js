// Provide the global flag Metro normally defines.
if (typeof globalThis.__DEV__ === 'undefined') {
  Object.defineProperty(globalThis, '__DEV__', { value: true, configurable: true });
}

// Expo import-meta shim used by some Expo modules
if (!Object.getOwnPropertyDescriptor(globalThis, '__ExpoImportMetaRegistry')) {
  Object.defineProperty(globalThis, '__ExpoImportMetaRegistry', {
    configurable: true,
    value: { get: () => null, has: () => false },
  });
}

// Silence RN Animated warnings in tests
jest.mock('@react-native/animated', () => ({}), { virtual: true });
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper', () => ({}), { virtual: true });

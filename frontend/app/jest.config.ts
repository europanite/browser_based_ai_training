module.exports = {
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/jest.setupFiles.js'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(png|jpe?g|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '^expo(-.*)?$': '<rootDir>/__mocks__/expoMock.js',
    '^expo-constants$': '<rootDir>/__mocks__/expoConstantsMock.js',
    '^expo-router$': '<rootDir>/__mocks__/expoRouterMock.js',
    '^react-native-reanimated$': 'react-native-reanimated/mock',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native'
      + '|@react-native'
      + '|react-clone-referenced-element'
      + '|@react-navigation'
      + '|react-navigation'
      + '|expo(nent)?'
      + '|@expo(nent)?/.*'
      + '|expo-modules-core'
      + '|expo-.*'
      + '|@expo/.*'
      + '|@react-native/polyfills'
    + ')/)',
  ],
  testMatch: ['**/__tests__/**/*.test.(ts|tsx)'],
};

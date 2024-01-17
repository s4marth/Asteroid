// jest.config.js
module.exports = {
    preset: 'ts-jest',
    // testEnvironment: 'jsdom',
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
      "\\.(jpg|jpeg|png|gif|webp|svg|ico|ttf|woff|woff2|eot)$": "identity-obj-proxy",
      "^.+\\.tsx?$": "ts-jest",
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  };
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '\\.(js|jsx|ts|tsx)$': '@sucrase/jest-plugin',
  },
  testMatch: ['**/?(*.)+(spec|test).ts?(x)', '**/__tests__/**/*.ts?(x)'],
  setupFilesAfterEnv: ['./configuration/jest/jsdom.mocks.js'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    '@2jsdev/(.*)': '<rootDir>/src/2jsdev-$1/src',
  },
};

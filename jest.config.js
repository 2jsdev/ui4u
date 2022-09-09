module.exports = {
  testEnvironment: "jest-environment-jsdom",
  collectCoverage: true,
  coverageDirectory: "coverage",
  transform: {
    "^.+\\.tsx?$": "@sucrase/jest-plugin",
  },
  testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(spec|test).ts?(x)"],
  setupFilesAfterEnv: ["./configuration/jest/jsdom.mocks.js"],
  coveragePathIgnorePatterns: ["jest.config.js", "/node_modules/", "/dist/"],
  moduleNameMapper: {
    "^@2jsdev/(.*)$": "<rootDir>/packages/$1/",
  },
};

const {resolve} = require('path')

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: './src',
  testPathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '^@src/(.*)$': resolve(__dirname, './src/$1'),
    '^@deps/(.*)$': resolve(__dirname, './deps/$1'),
    '^@blueprints/(.*)$': resolve(__dirname, './blueprints/$1'),
  }
};

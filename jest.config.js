module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/tests'],
  testMatch: ['**/*_tests.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};

const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const config = {
  transform: { '^.+\\.(js|jsx)?$': ['babel-jest', { presets: ['next/babel'] }] },
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src/'],
  modulePaths: ['<rootDir>/src/'],
  moduleDirectories: ['node_modules'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    'tailwind.config': '<rootDir>/tailwind.config',
  },
};

module.exports = createJestConfig(config);

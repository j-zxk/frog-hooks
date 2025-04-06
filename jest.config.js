module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'jsdom',
  clearMocks: true,
  testPathIgnorePatterns: ['/.history/'],
  modulePathIgnorePatterns: ['<rootDir>/package.json'],
  resetMocks: false,
  setupFiles: ['./jest.setup.js', 'jest-localstorage-mock'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
    // 新增 JS 文件的 Babel 转换
    // '^.+\\.(js|jsx)$': 'babel-jest',
  },
  collectCoverageFrom: [
    '<rootDir>/**/src/**/*.{js,jsx,ts,tsx}',
    '!**/demo/**',
    '!**/example/**',
    '!**/es/**',
    '!**/lib/**',
    '!**/dist/**',
  ],
  transformIgnorePatterns: [
    '^.+\\.js$',
    // 排除 node_modules 但允许转换 @testing-library/react 等模块
    // '/node_modules/(?!(axios|@testing-library|your-esm-module)/)',
  ],
};

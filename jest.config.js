module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{vue,jsx}',
    '!**/node_modules/**',
    '!<rootDir>/dist/**',
    '!<rootDir>/src/plugins/**',
    '!<rootDir>/tests/unit/**'
  ],
  coverageReporters: ['lcov', 'text-summary']
}

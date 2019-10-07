module.exports = {
  // The test environment that will be used for testing
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: ['js', 'vue', 'json'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  }
  // collectCoverage: true,
  // collectCoverageFrom: [
  //   '<rootDir>/components/**/*.vue',
  //   '<rootDir>/pages/**/*.vue',
  // ]
}

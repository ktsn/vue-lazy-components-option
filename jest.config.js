module.exports = {
  transform: {
    '^.+\\.[jt]sx?$': 'ts-jest',
    '^.+\\.vue$': 'vue-jest'
  },

  testRegex: '/test/.+\\.spec\\.(js|ts)x?$',

  moduleNameMapper: {
    '^vue$': 'vue/dist/vue.runtime.common.js'
  },

  moduleFileExtensions: ['ts', 'js', 'json', 'vue', 'jsx', 'tsx'],

  collectCoverageFrom: ['src/**/*.{ts,tsx,vue}'],

  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json'
    }
  },

  snapshotSerializers: ['jest-serializer-vue'],

  testURL: 'http://localhost/'
}

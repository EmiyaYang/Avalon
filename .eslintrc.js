module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    // parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    // 使用 (@typescript-eslint/parser) 作为语法分析器
    // 需要移除 parserOptions.parser: babel-eslint
    '@nuxtjs/eslint-config-typescript'
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    // TODO: webpack 去除 console
    'no-console': 0,
    'space-before-function-paren': 0,
    // 重复定义了 @typescript-eslint/no-unused-vars
    'no-unused-vars': 0
  }
}

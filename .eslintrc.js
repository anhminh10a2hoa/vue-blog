module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    // Add under other rules
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint'
  ],
  parserOptions: {
    ecmaVersion: 2021
  },
  plugins: [],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ],
    'no-console': import.meta.env.MODE === 'production' ? 'warn' : 'off',
    'no-debugger': import.meta.env.MODE === 'production' ? 'warn' : 'off',
    'vue/no-unused-vars': 'off',
    'vue/no-parsing-error': 'off'
  },
  ignorePatterns: ['node_modules', 'build', 'dist']
};

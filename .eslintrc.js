module.exports = {
  env: {
    es6: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'react-app'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/no-parameter-properties': 0,
    'no-useless-constructor': 0
  }
};

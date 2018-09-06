module.exports = {
  root: true, // make to not take in any user specified rules in parent folders
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'react-native', 'prettier'],
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
    'react-native/react-native': true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  rules: {
  //  'prettier/prettier': 'error',
    'linebreak-style': ['error', 'windows'],
    // 'no-unused-vars': ['error', { args: 'none' }],
    'react/prop-types': 0,
    'react/jsx-filename-extension': 0,
  },
};
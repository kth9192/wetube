module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'airbnb-base', 'plugin:prettier/recommended'],
  plugins: ['import', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    // 'react/jsx-filename-extension': [0],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'no-console': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};

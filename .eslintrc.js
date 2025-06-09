module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,

  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // ativar apenas após a instalação do Prettier.
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  paserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  }, plugins: ['@typescript-eslint'],
  rules: {}, // Adicionar regras quando for necessário.
};

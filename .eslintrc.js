module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'prettier', // Prettier na końcu, aby nadpisać zasady ESLint, które kolidują z Prettier
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
  plugins: ['vue'],
  rules: {
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }], // Usuwa wielokrotne puste linie
    'indent': ['error', 1], // Wymusza wcięcia na 2 spacje
    'vue/html-indent': ['error', 1], // Wcięcia dla HTML/Vue
    'vue/script-indent': ['error', 1, { baseIndent: 0 }], // Wcięcia dla skryptów w Vue
  },
};

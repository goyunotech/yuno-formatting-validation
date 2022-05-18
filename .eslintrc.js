module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  plugins: ['no-only-tests', '@typescript-eslint'],
  rules: {
    'no-only-tests/no-only-tests': 2,
    'max-classes-per-file': ['error', 20],
    'import/extensions': 0,
  },
};

module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  plugins: ['no-only-tests'],
  rules: {
    'no-only-tests/no-only-tests': 2,
    'max-classes-per-file': ['error', 20],
    'import/extensions': 0
  },
};

module.exports = {
  extends: '@antfu',
  rules: {
    'no-console': import.meta.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': import.meta.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-restricted-syntax': 0,
    "comma-dangle": ["error", "always"],
  },
}

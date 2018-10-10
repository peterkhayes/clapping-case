module.exports = {
  parserOptions: {
    ecmaVersion: 6,
  },
  env: {
    node: true,
  },
  plugins: [
    'prettier',
  ],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
}
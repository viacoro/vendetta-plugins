module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: "./plugins",
    rules: {
        // Note: you must disable the base rule as it can report incorrect errors
        "semi": "off",
        "@typescript-eslint/semi": "error",
        "eqeqeq": "error",
      },
    env: {
        "es6": true
    },
    parserOptions: {
        "ecmaVersion": "latest"
    }
  };
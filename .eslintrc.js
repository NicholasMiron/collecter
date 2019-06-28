module.exports = {
  extends: [
    './node_modules/eslint-config-airbnb-base/index.js',
    'plugin:react/recommended'
  ],
  env: {
    "browser": true,
    "jest": true,
    },
  rules: {
    "no-param-reassign": 0,
  },
  "parser": "babel-eslint",
};
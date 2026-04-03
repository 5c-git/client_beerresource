module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["airbnb-base"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  ignorePatterns: ["fsd/", "react/", "providers/", "api/"],
  rules: {
    "no-use-before-define": ["error", { functions: false, classes: true }],
    "no-unused-vars": ["error", { varsIgnorePattern: "[N]olint" }],
    "linebreak-style": "off",
    "no-control-regex": "off",
    "no-param-reassign": ["error", { props: false }],
  },
};

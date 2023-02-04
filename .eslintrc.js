module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["@typescript-eslint"],
  root: true,
  rules: {
    "no-unused-vars": "off",
    "no-console": "warn",
    "quotes": ["error", "double"],
  },
  globals: {
    React: true,
    JSX: true,
  },
};
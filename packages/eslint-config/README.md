# @builderhub/eslint-config

[![Publish Package to npmjs](https://github.com/builderhub-platform/eslint-config/actions/workflows/publish.yml/badge.svg)](https://github.com/builderhub-platform/eslint-config/actions/workflows/publish.yml) ![npm](https://img.shields.io/npm/dw/@builderhub%2Feslint-config) ![npm](https://img.shields.io/npm/v/@builderhub/eslint-config?color=%2357C754&label=npm%20version) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Standard ESLint configuration for Builderhub Platform Dev team projects.

Code lint with TypeScript and Prettier

## Installation

```
npm install -D @builderhub/eslint-config
```

## Usage

add `.eslintrc` and add more your rules in `rules` field.

```json
{
  "extends": ["@builderhub/eslint-config"],
  "rules": {}
}
```

## Configuration

```js
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    createDefaultProgram: true,
  },
  rules: {
    "prettier/prettier": ["error"],
    "no-console": ["off"],
    "import/no-extraneous-dependencies": ["off"],
    "no-return-await": ["off"],
    "import/extensions": ["off"],
    "import/no-unresolved": ["off"],
    "class-methods-use-this": ["off"],
    "no-unused-vars": ["off"],
    "no-useless-escape": ["off"],
    "import/prefer-default-export": ["off"],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": ["warn"],
  },
};
```

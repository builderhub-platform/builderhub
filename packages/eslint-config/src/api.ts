import { Linter } from "eslint";
import { resolve } from "node:path";

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * typescript API.
 *
 * This config extends the Builderhub Platform developers guide
 * For more information, see https://github.com/builderhub-platform/eslint-config/blob/main/src/index.ts
 *
 */
const config: Linter.Config = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    project,
    ecmaVersion: 2018,
    createDefaultProgram: true,
  },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ["node_modules/", "dist/"],
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

module.exports = config;

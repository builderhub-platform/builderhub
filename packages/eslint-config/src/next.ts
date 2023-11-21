import { Linter } from "eslint";
import { resolve } from "node:path";

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * Next.js apps.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

const config: Linter.Config = {
  extends: [
    "@vercel/style-guide/eslint/node",
    "@vercel/style-guide/eslint/browser",
    "@vercel/style-guide/eslint/typescript",
    "@vercel/style-guide/eslint/react",
    "@vercel/style-guide/eslint/next",
    "eslint-config-turbo",
  ].map((item) => require.resolve(item)),
  parserOptions: {
    project,
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
  // add rules configurations here
  rules: {
    "import/no-default-export": "off",
    "prefer-named-capture-group": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "import/no-named-as-default-member": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/consistent-type-imports": "off",
    "unicorn/filename-case": "off",
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/non-nullable-type-assertion-style": "off",
    "@typescript-eslint/require-await": "off",
    "no-nested-ternary": "off",
    "@typescript-eslint/no-unnecessary-condition": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/unbound-method": "off",
    "import/no-cycle": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "eslint-comments/require-description": "off",
    "no-console": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "no-unneeded-ternary": "off",
    "react/display-name": "off",
    "@typescript-eslint/prefer-ts-expect-error": "off",
    camelcase: "off",
    "@typescript-eslint/no-misused-promises": "off",
    "tsdoc/syntax": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "react/jsx-sort-props": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "react/jsx-no-leaked-render": "off",
    "import/order": "off",
    "@typescript-eslint/naming-convention": "off",
    "react/jsx-curly-brace-presence": "off",
    "react/function-component-definition": "off",
    "@typescript-eslint/no-shadow": "off",
    "react/button-has-type": "off",
    "no-else-return": "off",
    "react-hooks/exhaustive-deps": "off",
    "react/jsx-no-useless-fragment": "off",
    "import/newline-after-import": "off",
    "prefer-template": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "no-lonely-if": "off",
    "no-implicit-coercion": "off",
    "react/jsx-boolean-value": "off",
    "import/no-named-as-default": "off",
    "@typescript-eslint/no-unnecessary-type-assertion": "off",
    "@typescript-eslint/no-unsafe-enum-comparison": "off",
    "react/no-array-index-key": "off",
    "@typescript-eslint/method-signature-style": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-unnecessary-qualifier": "off",
    "@typescript-eslint/no-base-to-string": "off",
    "@next/next/no-sync-scripts": "off",
    "@typescript-eslint/prefer-optional-chain": "off",
    "turbo/no-undeclared-env-vars": "off",
  },
};

module.exports = config;

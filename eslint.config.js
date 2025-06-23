import js from "@eslint/js";
import pluginQuery from "@tanstack/eslint-plugin-query";
import reactPlugin from "eslint-plugin-react";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores([
    "**/.tanstack/**",
    "**/.output/**",
    "**/node_modules/**",
    "**/.nitro/**",
  ]),
  ...pluginQuery.configs["flat/recommended"],
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ["**/*.{tsx,tsx}"],
    ...reactPlugin.configs.flat.recommended,
    rules: {
      "react-in-jsx-scope": "off",
    },
  },
  tseslint.configs.recommended,
]);

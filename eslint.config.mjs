// @ts-check
import eslintPluginAstro from 'eslint-plugin-astro';
import pluginVue from 'eslint-plugin-vue';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import prettierConfig from 'eslint-config-prettier';

export default [
  // TypeScript files
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.mjs'],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },

  // Vue SFC files (flat config variant)
  ...pluginVue.configs['flat/recommended'],

  // Astro files
  ...eslintPluginAstro.configs.recommended,

  // Disable formatting rules (handled by Prettier)
  prettierConfig,

  // Global ignores
  {
    ignores: ['dist/', '.astro/', 'node_modules/'],
  },
];

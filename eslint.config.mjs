// @ts-check
import prettierConfig from 'eslint-config-prettier';
import eslintPluginAstro from 'eslint-plugin-astro';
import pluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';
import vueParser from 'vue-eslint-parser';

export default [
  // TypeScript ファイル（.mjs は Plain JS なので除外）
  ...tseslint.configs.recommended.map((config) => ({
    ...config,
    files: ['**/*.ts', '**/*.tsx', '**/*.mts'],
  })),
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.mts'],
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },

  // Vue SFC — vue-eslint-parser をルートパーサー、TypeScript パーサーを <script> 内に設定
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },

  // Astro ファイル
  ...eslintPluginAstro.configs.recommended,

  // フォーマット系ルールは Prettier に委ねる
  prettierConfig,

  // グローバル除外
  {
    ignores: ['dist/', '.astro/', 'node_modules/'],
  },
];

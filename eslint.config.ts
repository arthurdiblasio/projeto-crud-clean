import eslintPluginTs from '@typescript-eslint/eslint-plugin'
import parserTs from '@typescript-eslint/parser'
import pluginImport from 'eslint-plugin-import'
import pluginPrettier from 'eslint-plugin-prettier'

export default [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
    },
    plugins: {
      '@typescript-eslint': eslintPluginTs,
      import: pluginImport,
      prettier: pluginPrettier,
    },
    rules: {
      'no-console': 'warn',
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
        },
      ],
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      'prettier/prettier': 'warn',
    },
  },
]

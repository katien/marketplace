module.exports = {
  extends: ['react-app', 'react-app/jest', 'eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
  },
  overrides: [
    // typescript specific eslint settings
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended'],
    },
  ],
};

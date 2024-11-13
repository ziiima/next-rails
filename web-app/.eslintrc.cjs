module.exports = {
  extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
  plugins: ['unused-imports'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    projectService: true,
    tsconfigRootDir: __dirname,
  },
  rules: {
    'unused-imports/no-unused-imports': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/consistent-type-exports': 'error',
    'no-console': 'error',
    '@typescript-eslint/await-thenable': 'warn',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/require-await': 'warn',
    'no-return-await': 'warn',
  },
}

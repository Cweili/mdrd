module.exports = {
  extends: [
    'airbnb-base',
    'plugin:storybook/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  env: {
    browser: false,
    amd: false,
    es6: true,
    node: true,
    mocha: true,
    jest: true,
  },
  rules: {
    semi: ['error', 'never'],
    'default-param-last': ['off'],
    'no-restricted-syntax': ['off'],
    'import/no-extraneous-dependencies': ['off'],
    'import/extensions': [
      'error',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': [
        'tsx',
        'ts',
      ],
    },
    'import/resolver': {
      typescript: {
      },
    },
  },
}

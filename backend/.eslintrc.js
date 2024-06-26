module.exports = {
  rules: {
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'space-before-function-paren': [
      2,
      {
        anonymous: 'always',
        named: 'never',
      },
    ],
    'no-use-before-define': [
      2,
      'nofunc',
    ],
    'comma-dangle': [
      2,
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'no-underscore-dangle': [
      0,
    ],
  },
  env: {
    node: true,
    mocha: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
  ],
};

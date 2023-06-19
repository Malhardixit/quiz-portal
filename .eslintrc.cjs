module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'airbnb/hooks'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  plugins: ['react', 'react-hooks'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'array-bracket-spacing': ['error', 'never'],
    'comma-spacing': 'error',
    'default-case': 'error',
    'eol-last': 'error',
    eqeqeq: 'error',
    'func-call-spacing': 'error',
    indent: ['error', 2, { SwitchCase: 1 }],
    'jsx-quotes': 'error',
    'key-spacing': 'error',
    'keyword-spacing': 1,
    'max-len': ['error', { code: 80 }],
    'no-console': 1,
    'no-multi-spaces': 'error',
    'no-sequences': 'error',
    'no-use-before-define': 'error',
    quotes: ['error', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true,
    }],
    radix: 'error',
    semi: 'error',

    // AIRBNB OVERRIDEN RULES
    'linebreak-style': 0,
    'no-restricted-exports': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'react/jsx-filename-extension': 0,
    'no-else-return': 0,
    'react/no-array-index-key': 0,
    'arrow-parens': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'react/default-props-match-prop-types': 0,
    'no-underscore-dangle': 0,
    'import/order': 0,
    'import/no-cycle': 0,
    'no-continue': 0,
    'func-names': 0,
    'no-new': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/no-unescaped-entities': 0,
    'react/sort-comp': 0,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/media-has-caption': 0,
    'import/prefer-default-export': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
        ],
      },
    },
  },
};

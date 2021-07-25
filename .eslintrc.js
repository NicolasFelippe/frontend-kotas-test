module.exports = {
  root: true,
  env: {
    browser: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },

  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
   // required to lint *.vue files
   plugins: [
    'vue'
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    camelcase: 'off',
    'max-len': [
      'error',
      {
        code: 130,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignorePattern: '</?pre.*?>'
      }
    ],
    // allow async-await
    'generator-star-spacing': 'off',
    // allow paren-less arrow functions
    'arrow-parens': 'off',
    'one-var': 'off',
    'vue/no-v-html': 'off',
    'no-param-reassign': 'off',
    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prefer-promise-reject-errors': 'off',
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    // allow console.log during development only
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
};
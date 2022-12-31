module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
    es6: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:tailwind/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    quotes: ['error', 'single'],
    indent: 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-unsafe-optional-chaining': 'off',
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': ['error'],
  },
};

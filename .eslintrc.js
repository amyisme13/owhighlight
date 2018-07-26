module.exports = {
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    node: true,
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'prettier/prettier': 'warn',

    'no-await-in-loop': 'off',

    // Rules below are all added to remove conflicts with prettier. DO NOT REMOVE
    'arrow-parens': 'off',
  },
};

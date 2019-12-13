const merge = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const common = require('./webpack.config.js');
console.log('Loading dev config for webpack');

module.exports = merge(common, {
  output: {
    path: '/Users/jonandersson/dev/hearsay.se/static',
    filename: '[hash].app.bundle.js',
    publicPath: '/',
  },
  plugins: [
    new Dotenv({
      path: './.env',
    }),
  ],
  mode: 'development',
  watch: true,
});

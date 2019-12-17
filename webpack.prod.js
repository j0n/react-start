const merge = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const common = require('./webpack.config.js');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(common, {
  output: {
    path: '/Users/jonandersson/dev/hearsay.se/static',
    filename: 'app.bundle.js',
    publicPath: '/',
  },
  plugins: [
    new Dotenv({
      path: './.env.prod',
    }),
  ],
  mode: 'production',
});

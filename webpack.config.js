const path = require('path');
const loaders = require('./webpack/loaders');
const plugins = require('./webpack/plugins');

module.exports = {
  context: path.resolve(__dirname, 'app'), //path.resolve(__dirname, 'gh-src'),
  entry: ['./app.jsx'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".json", ".jsx"],
    modules: [path.resolve(__dirname, 'app'), 'node_modules']
  },
  plugins,
  module: loaders
};
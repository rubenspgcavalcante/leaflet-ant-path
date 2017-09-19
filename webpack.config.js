const path = require('path');
const {dev, prod} = require('./webpack/envs');
const loaders = require('./webpack/loaders');
const plugins = require('./webpack/plugins');

module.exports = {
  context: path.resolve(__dirname, 'app'),
  entry: ['./app.jsx'],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: prod('/leaflet-ant-path/dist/') || dev('/dist/')
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    modules: [path.resolve(__dirname, 'app'), 'node_modules']
  },
  plugins,
  module: loaders
};
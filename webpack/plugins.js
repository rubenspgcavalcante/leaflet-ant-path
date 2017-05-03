const {ProvidePlugin} = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = [
    new ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
    }),
    new ExtractTextPlugin('styles.css'),
    new OptimizeCssAssetsPlugin(),
    new UglifyJSPlugin({
        compress: {
            warnings: false
        }
    })
];

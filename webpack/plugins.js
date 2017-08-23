const {ProvidePlugin} = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CopyWPPlugin = require('copy-webpack-plugin');

const {dev, test, prod} = require('./envs');

module.exports = [
    new ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery',
        React: 'react'
    }),
    new ExtractTextPlugin('styles.css'),
    new CopyWPPlugin([{
        from: '../app/routes/*.json',
        to: '../dist',
        flatten: true
    }]),
    prod(new OptimizeCssAssetsPlugin()),
    prod(new UglifyJSPlugin({
        sourceMap: true,
        compress: {
            warnings: false
        }
    }))
].filter(plugin => plugin !== null);

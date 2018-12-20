const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const {dev, test, prod} = require('./envs');

module.exports = {
    rules: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {loader: 'babel-loader'}
        },
        {
            test: /\.template\.html$/,
            exclude: /node_modules/,
            use: {
                loader: 'raw-loader',
                options: {root: 'gh-src'}
            }
        },
        {
            test: /\.s?css$/,
            use: [
                dev("style-loader") || prod(MiniCssExtractPlugin.loader),
                "css-loader",
                "sass-loader"
            ]
        },
        {
            test: /\.(jpe?g|png|gif)$/i,
            use: 'url-loader?limit=10000',

        },
        {
            test: /\.ico$/,
            use: {loader: 'file-loader'}
        },
        {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        mimetype: 'application/font-woff'
                    }
                }
            ]
        },
        {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: [
                {loader: 'file-loader'}
            ]
        }
    ]
};
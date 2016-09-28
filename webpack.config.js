var webpack = require("webpack");
var path = require("path");
var utils = require("./tasks/utils");

var plugins = [];

if (utils.hasArgument("--minimize", "-m")) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}));
}

module.exports = {
    entry: "./src/plugin/main",
    devtool: "source-map",
    output: {
        path: "./dist",
        filename: "leaflet-ant-path.js",
        library: "leaflet-ant-path",
        libraryTarget: "umd"
    },
    externals: {
        "leaflet": {
            root: "L",
            commonjs: "leaflet",
            commonjs2: "leaflet",
            amd: "leaflet"
        }
    },
    plugins: plugins,
    module: {
        preLoaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
        ],
        loaders: [
            {
                test: /\.js?$/,
                loader: require.resolve("babel-loader"),
                query: {
                    plugins: [
                        require.resolve("babel-plugin-add-module-exports"),
                        require.resolve("babel-plugin-transform-class-properties"),
                        require.resolve("babel-plugin-transform-object-rest-spread")
                    ],
                    presets: [require.resolve("babel-preset-es2015")]
                },
            },
            {
                test: /\.(scss|sass)$/,
                loaders: [
                    require.resolve("style-loader"),
                    require.resolve("css-loader"),
                    require.resolve("sass-loader")
                ]
            }
        ]
    }
};
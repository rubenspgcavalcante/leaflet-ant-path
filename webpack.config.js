var webpack = require('webpack');
var path = require('path');
var is = require('is_js');
var plugins = [];

if (hasArgument('--minimize', '-m')) {
    plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
    entry: './src/plugin/main',
    devtool: 'source-map',
    output: {
        path: './dist',
        filename: 'leaflet-ant-path.js',
        library: 'leaflet-ant-path',
        libraryTarget: 'umd'
    },
    externals: {
        "leaflet": {
            root: 'L',
            commonjs: 'leaflet',
            commonjs2: 'leaflet',
            amd: 'leaflet'
        }
    },
    plugins: plugins,
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: require.resolve('babel-loader'),
                query: {
                    plugins: [require.resolve("babel-plugin-add-module-exports")],
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

// Utilities
function parseArgument(argument) {
    var argumentIndex = process.argv.indexOf(argument);
    return argumentIndex != -1 ? process.argv[argumentIndex] : null;
}

function hasArgument() {
    for (var i = 0; i < arguments.length; i++) {
        if (is.not.null(parseArgument(arguments[i]))) {
            return true;
        }
    }
    return false;
}
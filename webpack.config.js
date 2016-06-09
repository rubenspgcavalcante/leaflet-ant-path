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
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js']
    },
    plugins: plugins,
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|vendor)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {test: /\.(scss|sass)$/, loaders: ["style", "css", "sass"]}
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
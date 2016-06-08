var path = require('path');

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
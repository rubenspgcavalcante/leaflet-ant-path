var webpack = require("webpack");

module.exports = {
    entry: {
        "leaflet-ant-path": "./src/plugin/main"
    },
    devtool: "source-map",
    externals: {
        "leaflet": {
            root: "L",
            commonjs: "leaflet",
            commonjs2: "leaflet",
            amd: "leaflet"
        }
    },
    plugins: [new webpack.optimize.UglifyJsPlugin({minimize: true, sourceMap: true})]
};
const {UglifyJsPlugin} = require("webpack").optimize;

module.exports = {
    entry: {
        "leaflet-ant-path.es6": "./src/plugin/main",

        "leaflet-ant-path": [
            require.resolve("regenerator-runtime"),
            require.resolve("core-js/es6/symbol"),
            require.resolve("core-js/es6/reflect"),
            "./src/plugin/main"
        ]
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
    plugins: [new UglifyJsPlugin({minimize: true, sourceMap: true})]
};
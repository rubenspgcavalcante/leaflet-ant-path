const {UglifyJsPlugin} = require("webpack").optimize;

module.exports = {
    entry: {
        "leaflet-ant-path": [require.resolve("regenerator-runtime"), "./src/plugin/main"]
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
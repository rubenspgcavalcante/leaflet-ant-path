module.exports = {
    entry: {
        "leaflet-ant-path.es6": "./src/plugin/main",

        "leaflet-ant-path": [
            require.resolve("core-js/es/symbol"),
            require.resolve("core-js/es/reflect"),
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
    }
};
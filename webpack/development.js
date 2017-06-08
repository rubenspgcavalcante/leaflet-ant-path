const webpack = require("webpack");

module.exports = {
    entry: {
        "dev-env": [
            require.resolve("regenerator-runtime"),
            require.resolve("core-js/es6/symbol"),
            require.resolve("core-js/es6/reflect"),
            "./dev-env/index.js"]
    },
    devtool: "source-map",
    plugins: [new webpack.NoEmitOnErrorsPlugin(), new webpack.HotModuleReplacementPlugin()]
};

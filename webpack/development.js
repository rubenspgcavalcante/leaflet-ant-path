const webpack = require("webpack");

module.exports = {
    entry: {
        "dev-env": [
            require.resolve("core-js/es/symbol"),
            require.resolve("core-js/es/reflect"),
            "./dev-env/index.js"]
    },
    devtool: "source-map",
    plugins: [new webpack.NoEmitOnErrorsPlugin(), new webpack.HotModuleReplacementPlugin()]
};

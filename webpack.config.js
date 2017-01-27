var path = require("path");
var webpack = require("webpack");
var merge = require("merge");
var loaders = require("./webpack/loaders");
var development = require("./webpack/development");
var production = require("./webpack/production");


var configuration = {
    output: {
        path: path.resolve("./dist"),
        filename: "[name].js",
        library: "leaflet-ant-path",
        libraryTarget: "umd"
    },
    devServer: {
        contentBase: "dev-env",
        inline: true,
        hot: true
    },
    module: {
        loaders: loaders
    }
};

switch (process.env.NODE_ENV) {
    case "production":
        console.info("Using production configurations");
        configuration = merge(configuration, production);
        break;

    case "development":
        console.info("Using development configurations");
        configuration = merge(configuration, development);
        break;

    default:
        throw new Error("Please define your NODE_ENV to development or production!");
}

module.exports = configuration;
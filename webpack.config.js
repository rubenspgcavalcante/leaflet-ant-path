import path from "path";
import merge from "merge";
import loaders from "./webpack/loaders";
import development from "./webpack/development";
import production from "./webpack/production";
const {NODE_ENV} = process.env;

let configuration = {
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
        loaders
    }
};

switch (NODE_ENV) {
    case "production":
        configuration = merge(configuration, production);
        break;

    case "development":
        configuration = merge(configuration, development);
        break;

    default:
        throw new Error("Please define your NODE_ENV to development or production!");
}

console.info(`Using ${NODE_ENV} configurations`);

export default configuration;
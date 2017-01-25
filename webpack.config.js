var webpack = require("webpack");

var plugins = [];
var entries = {};
var externals = {};
var devtool = "source-map";

if (process.env.NODE_ENV === "production") {
    plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true, sourceMap: true}));
    entries["leaflet-ant-path"] = "./src/plugin/main";
    externals = {
        "leaflet": {
            root: "L",
            commonjs: "leaflet",
            commonjs2: "leaflet",
            amd: "leaflet"
        }
    };
}
else if (process.env.NODE_ENV === "development") {
    devtool = "eval-source-map";
    entries["dev-env"] = "./dev-env/index.js";
    plugins.push(new webpack.NoErrorsPlugin());
    plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = {
    entry: entries,
    externals: externals,
    devtool: devtool,

    output: {
        path: "./dist",
        filename: "[name].js",
        library: "leaflet-ant-path",
        libraryTarget: "umd"
    },
    devServer: {
        contentBase: "dev-env",
        inline: true,
        hot: true
    },
    plugins: plugins,
    module: {
        loaders: [
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules|~/,
                loader: require.resolve("eslint-loader")
            },
            {
                test: /\.js$/,
                exclude: /node_modules|~/,
                loader: require.resolve("babel-loader")
            },
            {
                test: /\.css$/,
                exclude: "/node_modules/",
                loaders: [
                    require.resolve("style-loader"),
                    require.resolve("css-loader"),
                ]
            },
            {
                test: /\.(scss|sass)$/,
                exclude: "/node_modules/",
                loaders: [
                    require.resolve("style-loader"),
                    require.resolve("css-loader"),
                    require.resolve("sass-loader")
                ]
            },
            {
                test: /\.(woff2?|svg)$/, loader: "url?limit=10000"
            },
            {
                test: /\.(ttf|eot|png|jpge?g)$/, loader: "file"
            },
            {
                test: /\.json$/,
                exclude: "/node_modules/",
                loader: "json"
            }
        ]
    }
};
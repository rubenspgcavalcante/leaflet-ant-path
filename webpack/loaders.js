module.exports = [
    {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules|~/,
        loader: "eslint-loader"
    },
    {
        test: /\.js$/,
        exclude: /node_modules|~/,
        loader: "babel-loader"
    },
    {
        test: /\.css$/,
        exclude: "/node_modules/",
        loaders: ["style-loader", "css-loader"]
    },
    {
        test: /\.(scss|sass)$/,
        exclude: "/node_modules/",
        loaders: [
            "style-loader",
            "css-loader",
            "sass-loader"
        ]
    },
    {
        test: require.resolve("regenerator-runtime"),
        loader: "expose-loader?regeneratorRuntime"
    },
    {test: /\.(woff2?|svg)$/, loader: "url-loader"},
    {test: /\.(ttf|eot|png|jpge?g)$/, loader: "file-loader"},
    {test: /\.json$/, exclude: "/node_modules/", loader: "json-loader"}
];
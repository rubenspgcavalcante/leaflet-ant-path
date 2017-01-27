module.exports = [
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
    {test: /\.(woff2?|svg)$/, loader: require.resolve("url-loader")},
    {test: /\.(ttf|eot|png|jpge?g)$/, loader: require.resolve("file-loader")},
    {test: /\.json$/, exclude: "/node_modules/", loader: require.resolve("json-loader")}
]
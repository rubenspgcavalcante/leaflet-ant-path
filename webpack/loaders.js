module.exports = [
    {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules|~/,
        loader: "eslint-loader",
        options: {
            emitWarning: true
        }
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
    {test: /\.(woff2?|svg)$/, loader: "url-loader"},
    {test: /\.(ttf|eot|png|jpge?g)$/, loader: "file-loader"}
];
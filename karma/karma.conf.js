const webpackLoaders = require("./../webpack/loaders.js");

module.exports = function (config) {
    config.set({
        basePath: "../",
        frameworks: ["jasmine"],
        browsers: ["PhantomJS"],
        plugins: [
            "karma-webpack",
            "karma-babel-preprocessor",
            "karma-phantomjs-launcher",
            "karma-jasmine",
            "karma-sourcemap-loader",
            "karma-sourcemap-writer",
            "karma-coverage",
            "karma-remap-istanbul"
        ],

        reporters: ["progress", "coverage", "karma-remap-istanbul"],

        preprocessors: {
            "./webpack.tests.js": ["webpack", "sourcemap", "sourcemap-writer", "coverage"]
        },

        webpack: {
            entry: ["./webpack.tests.js"],
            devtool: "inline-source-map",
            output: {
                path: "dist/",
                filename: "tests.js"
            },
            module: {
                loaders: webpackLoaders.concat([
                    {
                        enforce: "pre",
                        test: /\.js$/,
                        include: "./src/",
                        loader: "istanbul-instrumenter"
                    }
                ])
            }
        },

        coverageReporter: {
            type: "json",
            dir: "coverage/",
            subdir: ".",
            file: "coverage.json"
        },

        remapIstanbulReporter: {
            reports: {
                html: "coverage",
                json: "coverage/remapped.json"
            }
        },

        files: [
            "node_modules/babel-polyfill/dist/polyfill.min.js",
            "./webpack.tests.js",
        ],

        singleRun: false,

        stats: {
            colors: true,
            reasons: true
        },

        progress: true
    });
};
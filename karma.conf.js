var webpackLoaders = require("./webpack/loaders.js");

module.exports = function (config) {
    config.set({
        basePath: ".",
        frameworks: ["jasmine"],
        browsers: ["PhantomJS"],
        plugins: [
            "karma-webpack",
            "karma-phantomjs-launcher",
            "karma-jasmine",
            "karma-coverage",
            "karma-remap-istanbul",
            "karma-sourcemap-loader",
            "karma-remap-istanbul",
            "karma-babel-preprocessor"
        ],

        reporters: ["progress", "coverage", "karma-remap-istanbul"],

        preprocessors: {
            "src/**/*.js": ["webpack", "sourcemap", "coverage"]
        },

        webpack: {
            entry: ["./src/specs/bootstrap-tests.js"],
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
                        include: './src/',
                        loader: 'istanbul-instrumenter'
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
            src: 'coverage/lcov/coverage.json',
            reports: {
                lcovonly: 'coverage/lcov.info',
                //html: 'coverage/html/report'
            },
            timeoutNotCreated: 5000, // default value
            timeoutNoMoreFiles: 1000 // default value
        },

        files: [
            "node_modules/babel-polyfill/dist/polyfill.min.js",
            {pattern: "src/**/*.js", watched: true},
        ],

        singleRun: false,

        stats: {
            colors: true,
            reasons: true
        },

        progress: true
    });
};
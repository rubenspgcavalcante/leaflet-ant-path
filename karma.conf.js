module.exports = function (config) {
    config.set({
        basePath: ".",
        frameworks: ["jasmine"],
        browsers: ["PhantomJS"],
        plugins: [
            "karma-phantomjs-launcher",
            "karma-jasmine",
            "karma-coverage",
            "karma-sourcemap-loader",
            "karma-remap-istanbul",
            "karma-babel-preprocessor"
        ],

        reporters: ["progress", "coverage"],

        preprocessors: {
            "src/**/*.js": ["babel", "sourcemap"],
            "dist/leaflet-ant-path.js": ["coverage"]
        },

        coverageReporter: {
            type: "lcov",
            dir: "coverage/",
            subdir: "lcov",
            file: "coverage.lcov"
        },

        files: [
            "node_modules/babel-polyfill/dist/polyfill.min.js",
            {pattern: "node_modules/leaflet/dist/leaflet.js", watched: false},
            {pattern: "dist/leaflet-ant-path.js", watched: true},
            "src/specs/**/*.unit.js"
        ],

        singleRun: false
    });
};
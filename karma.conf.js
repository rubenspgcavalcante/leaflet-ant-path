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

        reporters: ["progress", "coverage", "karma-remap-istanbul"],

        preprocessors: {
            "src/**/*.js": ["babel", "sourcemap"],
            "dist/leaflet-ant-path.js": ["coverage"]
        },

        coverageReporter: {
            type: "json",
            dir: "coverage/",
            subdir: "lcov",
            file: "coverage.json"
        },

        remapIstanbulReporter: {
            src: "coverage/lcov/coverage.json",
            reports: {
                lcovonly: "coverage/lcov/lcov.info",
                html: "coverage/lcov/html"
            },
            timeoutNotCreated: 5000, // default value
            timeoutNoMoreFiles: 1000 // default value
        },

        files: [
            'node_modules/babel-polyfill/dist/polyfill.js',
            {pattern: "node_modules/leaflet/dist/leaflet.js", watched: false},
            {pattern: "dist/leaflet-ant-path.js", watched: true},
            "src/specs/**/*.unit.js"
        ],

        singleRun: false
    });
};
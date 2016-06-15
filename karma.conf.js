module.exports = function (config) {
    config.set({
        basePath: '.',
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        plugins: [
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-coverage',
            'karma-sourcemap-loader',
            'karma-remap-istanbul'
        ],

        reporters: ['progress', 'coverage', 'karma-remap-istanbul'],

        preprocessors: {
            '**/*.js': ['sourcemap'],
            'dist/leaflet-ant-path.js': ['coverage']
        },

        coverageReporter: {
            type: 'json',
            dir: 'coverage/',
            subdir: 'lcov',
            file: 'coverage.json'
        },

        remapIstanbulReporter: {
            src: 'coverage/lcov/coverage.json',
            reports: {
                lcovonly: 'lcov/coverage/lcov.info',
                html: 'coverage/lcov/html/report'
            },
            timeoutNotCreated: 5000, // default value
            timeoutNoMoreFiles: 1000 // default value
        },

        files: [
            {pattern: 'node_modules/leaflet/dist/leaflet.js', watched: false},
            {pattern: 'src/specs/config/bind.polyfill.js', watched: true},
            {pattern: 'dist/leaflet-ant-path.js', watched: true},
            'src/specs/**/*.unit.js'
        ],

        singleRun: false
    });
};
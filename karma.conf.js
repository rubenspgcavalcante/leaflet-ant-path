module.exports = function (config) {
    config.set({
        basePath: '.',
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        plugins: ['karma-phantomjs-launcher', 'karma-jasmine', 'karma-coverage'],

        reporters: ['progress', 'coverage'],

        preprocessors: {
            'dist/leaflet-ant-path.js': ['coverage']
        },

        coverageReporter: {
            type: 'lcov',
            dir: 'coverage-report/',
            subdir: 'lcov'
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
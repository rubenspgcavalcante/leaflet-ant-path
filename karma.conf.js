module.exports = function (config) {
    config.set({
        basePath: 'src/',
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        plugins: ['karma-phantomjs-launcher', 'karma-jasmine', 'karma-coverage'],

        reporters: ['progress', 'coverage'],

        preprocessors: {
            'plugin/leaflet-ant-path.js': ['coverage']
        },

        coverageReporter: {
            type : 'lcov',
            dir : '../coverage-report/',
            subdir: 'lcov'
        },

        files: [
            {pattern: 'vendor/leaflet/dist/leaflet-src.js', watched: false},
            {pattern: 'plugin/leaflet-ant-path.js', watched: true},
            'specs/**/*.unit.js'
        ],

        singleRun: false
    });
};
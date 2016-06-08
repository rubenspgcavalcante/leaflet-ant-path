var gulp = require('gulp');
var karma = require('karma');

gulp.task('test', function (done) {
    return new karma.Server({
        configFile: __dirname + '/../karma.conf.js',
        singleRun: true
    }, done).start();
});
var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');

gulp.task('pack', function (done) {
    var config = require('../webpack.config');
    config.plugins = [new webpack.optimize.UglifyJsPlugin()];
    webpack(config).run(onBuild(done));
});

function onBuild(done) {
    return function (err, stats) {
        if (err) {
            gutil.log('Error', err);
            if (done) {
                done();
            }
        } else {
            Object.keys(stats.compilation.assets).forEach(function (key) {
                gutil.log('Webpack: output ', gutil.colors.green(key));
            });

            var elapsed = (stats.endTime - stats.startTime) / 1000;
            gutil.log('Webpack: ', gutil.colors.blue('Packing finished in', elapsed, 'seconds'));
            if (done) {
                done();
            }
        }
    }
}
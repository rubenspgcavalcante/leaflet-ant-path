var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var karma = require('karma');

gulp.task('default', ['compress', 'style']);

gulp.task('style', function () {
    gulp.src('./src/style/*.sass')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('compress', function () {
    gulp.src('./src/plugin/leaflet-ant-path.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('test', function (done) {
    new karma.Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/style/*.sass', ['style']);
});

gulp.task('js:watch', function () {
    gulp.watch('./src/plugin/*.js', ['compress']);
});

gulp.task('start-watchers', ['js:watch', 'sass:watch']);
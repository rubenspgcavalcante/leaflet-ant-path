var gulp = require("gulp");
var gutil = require("gulp-util");

gulp.task("test", function () {
    //Loads lazily, because it's only needed in dev env.
    var karma = require("karma");
    return new karma.Server({
        configFile: __dirname + "/../karma.conf.js",
        singleRun: true
    }, function () {
        process.exit();
    }).start();
});

gulp.task('codacy-coverage', function () {
    //Loads lazily, because it's only needed in dev env.
    var codacy = require("gulp-codacy");
    var token = process.env.CODACY_PROJECT_TOKEN;
    gutil.log(gutil.colors.blue("Using codacy token " + token));
    return gulp.src(['./coverage/lcov/lcov.info'], {read: false})
        .pipe(codacy({
            token: token
        }));
});
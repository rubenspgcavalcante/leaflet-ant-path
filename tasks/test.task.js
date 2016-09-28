var gulp = require("gulp");

gulp.task("test", function () {
    //Loads lazily, because it's only needed in dev env.
    var karma = require("karma");
    return new karma.Server({
        configFile: __dirname + "/../karma.conf.js",
        singleRun: true
    }, function(){
        process.exit();
    }).start();
});
var gulp = require("gulp");

gulp.task("sass:watch", function () {
    return gulp.watch("./src/style/*.sass", ["pack"]);
});

gulp.task("js:watch", function () {
    return gulp.watch("./src/plugin/*.js", ["pack"]);
});

gulp.task("start-watchers", ["js:watch", "sass:watch"]);
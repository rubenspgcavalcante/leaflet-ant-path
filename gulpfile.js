var gulp = require("gulp");

require("./tasks/pack.task");
require("./tasks/test.task");
require("./tasks/watchers.task");
require("./tasks/server.task");

gulp.task("default", ["dist", "test"]);
gulp.task("dist", ["pack"]);
var gulp = require("gulp");
var webpackDevServer = require("webpack-dev-server");
var utils = require("./utils");
var config = require("../webpack.config");

gulp.task("dev-server", function () {
    webpackDevServer(config).run(utils.afterBuild);
});
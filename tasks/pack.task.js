var gulp = require("gulp");
var webpack = require("webpack");
var utils = require("./utils");

gulp.task("pack", function (done) {
    var config = require("./../webpack.config.js");
    config.plugins = [new webpack.optimize.UglifyJsPlugin()];
    webpack(config).run(utils.afterBuild(done));
});
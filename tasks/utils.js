var gutil = require("gulp-util");
var is = require("is_js");

function afterBuild(done) {
    return function (err, stats) {
        if (err) {
            gutil.log("Error", err);
            done && done();
        } else {
            Object.keys(stats.compilation.assets).forEach(function (key) {
                gutil.log("Webpack: output ", gutil.colors.green(key));
            });

            var elapsed = (stats.endTime - stats.startTime) / 1000;
            gutil.log("Webpack: ", gutil.colors.blue("Packing finished in", elapsed, "seconds"));
            done && done();
        }
    }
}

function parseArgument(argument) {
    var argumentIndex = process.argv.indexOf(argument);
    return argumentIndex !== -1 ? process.argv[argumentIndex] : null;
}

function hasArgument() {
    for (var i = 0; i < arguments.length; i++) {
        if (is.not.null(parseArgument(arguments[i]))) {
            return true;
        }
    }
    return false;
}

module.exports = {
    afterBuild: afterBuild,
    hasArgument: hasArgument,
    parseArgument: parseArgument
};
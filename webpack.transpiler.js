/**
 * This code transpiles the webpack config from ES6 to ES5
 * While Node not supports 100% ES6 keep using this file as config file for webpack!
 */

var babel = require("babel-core");
var path = require("path");
var transpiled = babel.transformFileSync(path.resolve("./webpack.config.js"));

module.exports = eval(transpiled.code);
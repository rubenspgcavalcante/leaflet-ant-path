const { resolve } = require("path");
const webpackLoaders = require("./../webpack/loaders.js");
process.env.CHROME_BIN = require("puppeteer").executablePath();

module.exports = function(config) {
  config.set({
    basePath: "../",
    frameworks: ["jasmine"],
    browsers: ["ChromeHeadless"],
    plugins: [
      "karma-webpack",
      "karma-babel-preprocessor",
      "karma-chrome-launcher",
      "karma-jasmine",
      "karma-sourcemap-loader",
      "karma-sourcemap-writer",
    ],
    reporters: ["progress"],
    preprocessors: {
      "./webpack.tests.js": ["webpack", "sourcemap", "sourcemap-writer"]
    },
    webpack: {
      mode: "development",
      entry: ["./webpack.tests.js"],
      devtool: "inline-source-map",
      output: {
        path: "dist/",
        filename: "tests.js"
      },
      module: {
        rules: webpackLoaders.concat([
          {
            enforce: "post",
            test: /\.js$/,
            include: resolve(__dirname, "../src/"),
            use: {
              loader: "istanbul-instrumenter-loader",
              options: {
                esModules: true
              }
            }
          }
        ])
      }
    },
    files: ["node_modules/@babel/polyfill/dist/polyfill.js", "./webpack.tests.js"],
    stats: {
      colors: true,
      reasons: true
    },
    progress: true
  });
};

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
      "karma-coverage",
      "karma-remap-istanbul"
    ],

    /**
     * FIXME: Removed karma-remap-istanbul because of istanbul error
     * @see https://github.com/gotwarlost/istanbul/issues/602
     */
    reporters: ["progress", "coverage"],

    preprocessors: {
      "./webpack.tests.js": ["webpack", "sourcemap", "sourcemap-writer", "coverage"]
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

    coverageReporter: {
      type: "json",
      dir: "coverage/",
      subdir: ".",
      file: "coverage.json"
    },

    remapIstanbulReporter: {
      reports: {
        html: "coverage",
        json: "coverage/remapped.json"
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

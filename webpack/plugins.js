const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { ProvidePlugin, DefinePlugin } = require("webpack");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

const { dev, test, prod, CURRENT } = require("./envs");

module.exports = [
  new ProvidePlugin({
    jQuery: "jquery",
    $: "jquery",
    jquery: "jquery",
    React: "react"
  }),
  prod(
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ),
  new DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify(CURRENT)
    },
    app: {
      path: JSON.stringify(dev("/") || prod("/leaflet-ant-path/"))
    }
  }),
  prod(new OptimizeCssAssetsPlugin()),
  prod(
    new UglifyJSPlugin({
      sourceMap: true
    })
  )
].filter(plugin => plugin !== null);

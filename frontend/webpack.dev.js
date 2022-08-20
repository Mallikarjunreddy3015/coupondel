const path = require("path");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ],
  devServer : {
    historyApiFallback : true
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", 
          "css-loader",
        ]
      }
    ]
  }
});
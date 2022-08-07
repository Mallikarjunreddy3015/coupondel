const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js"
  },
  module: {

    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      },
      {
        test: /\.js|\.jsx$/,
        enforce:"pre",
        exclude: /(node_modules)/,
        loader :"babel-loader",
        options: {
           presets: ['@babel/preset-env','@babel/preset-react'] 
          },

      }
    ]
  }
};
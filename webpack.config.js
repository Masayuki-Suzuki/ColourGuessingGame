'use strict'

const path = require('path');
const webpack = require("webpack");

let config = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js"
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    loaders:[
      {
        test:/\.css/,
        loaders:['style-loader','css-loader']
      },
      {
        test:/\.js/,
        exclude: /node_modules/,
        loaders:['babel-loader']
      }
    ]
  }
}

module.exports = config;

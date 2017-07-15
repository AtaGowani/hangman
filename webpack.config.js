const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    app: ['./src/js/app.js'],
    vendor: ['./src/js/vendor.js'],
    controller: ['./src/js/game.controller.js']
  },

  output: {
    filename: '[name].js',
    path: `${__dirname}/dist/js`
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },

  watch: true,

  plugins: [
    new UglifyJSPlugin()
  ]
}
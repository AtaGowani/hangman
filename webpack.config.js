const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    app: ['./src/js/app.js', './src/js/game.controller.js'],
    vendor: ['./src/js/vendor.js']
  },

  output: {
    filename: '[name].js',
    path: `${__dirname}/dist/js`
  },

  module: {
    rules: [
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },

  watch: true,

  plugins: [
    new UglifyJSPlugin({
      mangle: {
        // Skip mangling these 
        except: ['game']
      },
      beautify: true
    })
  ]
}
const path = require('path');

var DIST_DIR   = path.join(__dirname, "dist"),
    CLIENT_DIR = path.join(__dirname, "src");

module.exports = {
  context: CLIENT_DIR,
  entry: './main',
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules : [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['react', 'env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'sass-loader'}
        ]
      },
      { test: /\.scss$/,
        use: {
              loader: "sass-loader"
             }
      },
      {
        test: /\.(jpg|png|svg|pdf)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]',
        }
      }
    ]
  },
  resolve : {
    extensions: [' ','.js']
  },
  devtool: 'inline-source-map'
}

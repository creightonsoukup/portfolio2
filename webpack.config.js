const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules : [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: {
          loader: 'css-loader'
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
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  devtool: 'inline-source-map',
}

module.exports = config

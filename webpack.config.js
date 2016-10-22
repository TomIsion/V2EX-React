var webpack = require('webpack')
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: __dirname + '/bin',
    publicPath: '/assets/',
    filename: 'app.bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass?sourceMap']
    }, {
      test: /\.(jpe?g|png|gif)$/,
      loader: 'file'
    }]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.sass']
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'src/images',
        to: 'images'
      }
    ])
  ]
}

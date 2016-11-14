var webpack = require('webpack')

module.exports = {
  // 打包的入口配置
  entry: './src/app.jsx',
  // 打包的产物配置
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
    }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.sass']
  }
}

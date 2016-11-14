var copyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  // 打包的入口配置
  entry: './src/app.jsx',
  // 打包的产物配置
  output: {
    // 源文件路径
    path: __dirname + '/bin',
    // 打包产物 server 路径
    publicPath: '/assets/',
    // 打包产物 静态路径
    filename: 'app.bundle.js'
  },
  // 开启 map 映射
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel'
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass?sourceMap']
    }, {
      test: /\.(jpe?g|png|gif)$/,
      loader: 'file'
    }
    ]
  },
  // 打包的文件类型
  resolve: {
    extensions: ['*', '.js', '.jsx', '.sass']
  },
  // 增加静态文件的映射
  plugins: [
    new copyWebpackPlugin([
      {
        from: 'src/images',
        to: 'images'
      }
    ])
  ]
}

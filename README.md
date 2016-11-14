# V2EX-React

基于 `React.js` 相关技术栈重写 V2EX

# 参考资料

## API

1. [V2EX的官方API接口](https://www.v2ex.com/p/7v9TEc53)
2. [fanzeyi整理的API接口](https://gist.github.com/fanzeyi/6951803)
3. [djyde整理的API接口](https://github.com/djyde/V2EX-API)
4. [我自己整理所使用的API接口]()

## 学习资料

### React.js 相关

1. [React.js官方文档](https://facebook.github.io/react/)

### Webpack 相关

1. [Webpack官方文档](http://webpack.github.io/docs/)
2. [ES6编写Webpack配置](https://cnodejs.org/topic/56346ee43ef9ce60493b0c96)

### 用 ES6+ 来编写 React.js

1. [React on ES6+](https://babeljs.io/blog/2015/06/07/react-on-es6-plus)

# 基于React.js的简单首页

## 使用的技术栈

1. ES6 
2. React.js

## 使用的工具

1. babel
2. webpack
3. 顺手的码代码工具

## 构建开发环境

### 参考资料

1. [知乎专栏 - Webpack傻瓜指南](https://zhuanlan.zhihu.com/p/20522487?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)
2. [Webpack 官方文档](http://webpack.github.io/docs/)

### 开发依赖包

- webpack
- babel-core
- babel-preset-es2015
- babel-preset-babel
- babel-loader
- react
- react-dom

### 构建过程

着手学习React.js的时候，主流的编写环境还是使用webpack打包 + npm script来实现。webpack的使用写几篇博客来介绍都不为过（主要因为我也只是简单使用嘿嘿嘿），这里只是简单介绍在首页开发过程中所需要的配置

```
// 进入工作路径，然后初始化
npm init

// 全局安装 Webpack
npm i -g webpack
```

根据Webpack官方的推荐，项目路径下应该有以下的内容：

1. `src` 源文件夹
2. `bin` 打包之后文件夹
3. `webpack.config.js` Webpack的项目配置文件

接下来就是进入Webpack的配置，先理清楚需要打包什么文件：

#### .jsx

把 .jsx 文件转化成可以打包的 js 语言，同时需要支持ES6中的语法

其中需要的 loader 是 `babel-loader`

以及其他的依赖包

- babel-core
- babel-preset-es2015
- babel-preset-react
- babel-loader

**注意**

随着`babel`的升级（6.18.0），原本的`.babelrc`的编写方式更新成了如下的格式：

```
// incorrect, and current gives a unexpected error message
{
  "presets": [
    "preset",
    { "presetOptions": 'hi' } // gets parsed as another preset instead of being part of the "preset"
  ]
}
// correct
{
  "presets": [
    ["preset",
      {
        "presetOptions": 'hi'
      }
    ]
  ]
}
```
参考资料：[babel官方更新记录](https://babeljs.io/blog/2016/10/24/6.18.0)

#### .sass

样式准备使用 `Sass`

其中使用的 loader 是 `sass-loader` 

以及其他的依赖包

- node-sass
- style-loader
- css-loader

通过这些依赖，可以将`.jsx`中的引入的样式文件也成功打包

踩的坑：

- Windows 开发环境下 `sass-loader` 编译需要使用的 gyp 在 Node.js 长期维护的版本下总是报错，这里使用最新测试版安装成功（使用 6.8.1 成功）
- 除去官网网上需要安装的依赖之外，还需要安装 `style-loader` 以及 `css-loader`

#### 目前的配置内容

根目录下新建Webpack读取的配置文件 `webpack.config.js`

```
var webpack = require('webpack')

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
  }
}
```

#### 使用 webpack-dev-server

参考资料：[webpack-dev-server](http://webpack.github.io/docs/webpack-dev-server.html)

在 `package.json` 中 `scripts` 添加：

```
"dev": "webpack-dev-server --watch --hot --no-info"
```

以后就可以使用 `npm run dev` 来启动项目

#### 增加静态资源映射

在上面的配置中，处理的都是引入的 `.js[x]` 或者 `sass` 文件的打包

因为是单页面的存在，所以整个项目只有一个 `.html` 文件，这个文件没有在打包的内容中

所以在这个文件中的 `img[src=xxx]` 标签中的引用地址不会经过打包映射到 `/assets` 这个路径下

在这里借助插件实现将所有的静态图片文件都映射到 `/assets` 路径下

使用 [copy-webpack-plugin](https://github.com/kevlened/copy-webpack-plugin)

贴代码：

```
plugins: [
  new copyWebpackPlugin([
    {
      from: 'src/images',
      to: 'images'
    }
  ])
]
```

### 编码规范

不知道是不是掌握的不够，上了构建工具之后报错定位变得异常困难，习惯了刀耕火种的我还是决定使用编码规范来约束代码质量，从代码编写的过程中就减少犯错

使广泛为大众接受的 `Airbnb React` 编码规范加上 `ESLint` 代码检查工具

#### 参考资料

1. [ESLint](http://eslint.org/)
2. [Airbnb React](https://github.com/JasonBoy/javascript/tree/master/react)

#### 优势

1. 提升代码可读性
2. 方便编辑器/IDE检查语法错误

#### 集成

##### 1. 目前使用的主要编辑器是 `VSCode`

1. 需要安装 `eslint` —— 当前目录使用 `npm install eslint` 或者全局 `npm install -g eslint`
2. 在 `VSCode` 中安装 `ESLint` 插件
3. 编写 `.eslintrc` 配置文件

##### 2. 配置 .eslintrc

所需要安装的依赖：

1. `eslint`
2. `eslint-config-airbnb`
3. `eslint-plugin-jsx-a11y`
4. `eslint-plugin-react`

其中注意的是，需要按顺序安装，不会自动安装依赖，后面两个包需要手动指定最低版本

然后就可以配置 `.eslintrc` 文件了：

```
{
  "extends": "airbnb",
  // 额外的属性，不喜欢写分号哈
  "rules": {
    "semi": 0
  }
}
```

这时候重启 `VSCode` 就可以发现语法不规范的地方有了标注~

### Debug

### 笔记

#### 首页

##### 1. 搜索框输入回车搜索 

keyBoard Events 相关







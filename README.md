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

### Webpack相关

1. [Webpack官方文档](http://webpack.github.io/docs/)
2. [ES6编写Webpack配置](https://cnodejs.org/topic/56346ee43ef9ce60493b0c96)

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

#### .sass

样式准备使用Sass

其中使用的 loader 是 `sass-loader` 

以及其他的依赖包

- node-sass
- style-loader
- css-loader

踩的坑：

- Windows 开发环境下 `sass-loader` 编译需要使用的 gyp 在 Node.js 长期维护的版本下总是报错，这里使用最新测试版安装成功（使用 6.8.1 成功）
- 除去官网网上需要安装的依赖之外，还需要安装 `style-loader` 以及 `css-loader`

#### 目前的配置内容

根目录下新建Webpack读取的配置文件 `webpack.config.js`

### 编码规范

不知道是不是掌握的不够，上了构建工具之后报错定位变得异常困难，习惯了刀耕火种的我还是决定使用编码规范来约束代码质量，从代码编写的过程中就减少犯错

使广泛为大众接受的 `Airbnb React` 编码规范

#### 优势

1. 提升代码可读性
2. 方便编辑器/IDE检查语法错误

#### 集成

目前使用的主要编辑器是 `VSCode`

### 笔记

#### 首页

1. 搜索框输入回车搜索 

##### keyBoard Events Note







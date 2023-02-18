## react 学习笔记

### 项目初始化操作
+ 暴露配置文件 命令：
```
  npm run eject
```
+ 配置路径别名： webpack.config.js
```js
 alias: {
        "@": paths.appSrc
}
```
### 配置代理路径
+ 在src 目录新建setupProxy.js 文件
+ 安装配置依赖
```
npm install http-proxy-middleware
```
+ 在setupProxy.js写入
```js
const { createProxyMiddleware } = require("http-proxy-middleware")
module.exports = function (app) {
  app.use(
      createProxyMiddleware("/api", {
        target: "http://localhost:8089",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      })
  )
}
```
### jsx 基本语法
+ react 中只会渲染 string、number、数组类型。渲染数组类型时会把数组每一项都进行渲染
+ 渲染其他类型时控制台会报错，null，undefined，Boolean类型不会报错，但页面不会显示

### 函数式组件传递props
+ 可以对传递的prop赋值默认值
```js
Dome01.defaultProps = {
  childName: "default val"
}
```
+ 安装 prop-types 插件可实现对传递值的限制
```js
Dome01.propTypes = {
  childName: PropTypes.string,
  childTitle: PropTypes.string.isRequired,
  childAge: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
```
+ props 值不可修改和扩展 是使用Object.freeze()方法冻结传递给组件的 props 对象
```js
// 冻结对象 不可劫持、修改、删除、新增
Object.freeze()

// 密封对象 可修改，不可删除、新增、不可劫持
Object.seal()

// 不可扩展对象
Object.preventExtensions()
```
+ 如果想要修改props中的值可以使用如下方法
```js
import React, { useState } from 'react';

function MyComponent(props) {
  const [name, setName] = useState(props.name);

  const handleClick = () => {
    setName('new name');
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
}

export default MyComponent;
```

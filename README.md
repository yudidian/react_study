## react 学习笔记

### 项目初始化操作

+ 暴露配置文件 命令：

```
  npm run eject
```

+ 配置路径别名： webpack.config.js

```js
 alias: {
  "@"
:
  paths.appSrc
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
const {createProxyMiddleware} = require("http-proxy-middleware")
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
import React, {useState} from 'react';

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

### 插槽

+ react中没有vue中slot 需要自己实现插槽
+ react中Children提供了如下方法
    + React.Children.map <font color="red">遍历children返回一个新的数组</font>
    + React.Children.forEach <font color="red">遍历children</font>
    + React.Children.count <font color="red">返回children个数</font>
    + React.Children.only <font color="red">是否仅包含单个子元素，并返回该子元素</font>
    + React.Children.toArray <font color="red">将children 转换为一个数组，并返回该数组</font>
+ 例子如下：

```jsx
<div>插槽部分</div>
<div style={{display: "flex", flexDirection: "column"}}>
  {this.children.filter(item => item.props.name === "slot-01")}
  {this.children.findIndex(item => item.props.name === "slot-02") !== -1
      ?
      this.children.filter(item => item.props.name === "slot-02")
      :
      <div>默认插槽内容</div>
  }
  {this.children.filter(item => item.props.name === "slot-03")}
</div>
```

### 函数式组件、类组件

#### 1、区别

+ 静态组件、动态组件
+ 函数式组件没有内部状态state，无法使用setState改变内部状态
+ 函数式组件不可使用forceUpdate强制刷新组件
+ 函数式组件无上下文context
+ 函数式组件在性能方面通常比类组件好
+ 函数式组件没有生命周期

#### 类组件实现动态修改state

```jsx
import react from 'react'
import PropTypes from "prop-types";

class Dome02 extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 0
    }
  }

  render() {
    let {title} = this.props
    let {age} = this.state
    const add = (flag) => {
      this.setState({
        age: this.state.age + 1
      })
    }
    const less = () => {
      this.setState({
        age: this.state.age - 1
      })
    }
    return (
        <>
          <div>{title}</div>
          <p>{age}</p>
          <div>
            <button onClick={() => add("test")}>增加</button>
            <button onClick={() => less()}>减少</button>
          </div>
        </>
    )
  }
}

Dome02.defaultProps = {
  title: "类组件"
}

Dome02.propTypes = {
  title: PropTypes.string.isRequired
}
export default Dome02
```

+ 插槽实现和改变内部状态的效果图
  ![img.png](effectPicture/img.png)

### react生命周期

+ 在react严格模式中生命周期会调用两次
+ 生命周期图
  ![img.png](effectPicture/react生命周期.png)
+ **constructor**
    + 生命周期中执行的第一个函数
+ **getDerivedStateFromProps**
    + componentWillReceiveProps 的替代品
    + 用于接受新的 props 改变state

```jsx
import React, {Component} from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.count !== prevState.count) {
      return {count: nextProps.count};
    }
    return null;
  }

  render() {
    return (
        <div>
          <p>Count: {this.state.count}</p>
          <button onClick={() => {
            this.setState({
              count: this.state.count++
            })
          }}>增加</button>
        </div>
    );
  }
}

export default MyComponent;
```
### React.Component 与 React.PureComponent 区别
+ React.PureComponent 通过实现 shouldComponentUpdate() 方法来自动对比前后两次渲染的props和state是否有变化，从而自动决定是否需要重新渲染组件，而 React.Component 不会自动做出这个决定。
+ 若在React.PureComponent重写shouldComponentUpdate()方法会报错
+ React.PureComponent 是通过浅比较来判断是否需要重新渲染，当地址没有改变，数据改变时组件不会重新渲染
+ 下列中是数据改变地址没变，导致组件没有重新渲染
  ```jsx
  <button onClick={() => {
     arr.push(4)
     this.setState({
        arr: arr
     })
  }}>增加</button>
  ```
+ 可以通过下列方式实现组件更新
  ```jsx
  <button onClick={() => {
     arr.push(4)
     this.setState({
        arr: [...arr]
     })
  }}>增加</button>
  ```
+ 或者使用this.forceUpdate()强制刷新

### react 获取Dom对象
+ 类组件中获取Dom对象
+ 不推荐使用this.refs获取实例对象
```jsx
class ClassGetRef extends react.PureComponent {
  constructor(props) {
    super(props);
    this.three = react.createRef()
  }
  componentDidMount() {
    console.log(this.refs.first)
    console.log(this.tow)
    console.log(this.three.current)
  }

  render() {
    return(
        <>
          <div title="方式一" ref="first">通过this.refs获取</div>
          <div title="方式二" ref={x => this.tow = x}>通过回调函数</div>
          <div title="方式三" ref={this.three}>通过createRef获取</div>
        </>
    )
  }
}
```
+ 

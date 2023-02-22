import react from 'react'
import PropTypes from "prop-types";

class Dome02 extends react.Component {
  constructor(props) {
    console.log("constructor")
    super(props);
    this.children = react.Children.toArray(props.children)
    this.state = {
      age: 90,
      name: "test"
    }
  }
  static getDerivedStateFromProps(nextProps, preState) {
    console.log("getDerivedStateFromProps", nextProps, preState)
    if (preState.age >nextProps.maxAge) {
      return {
        age: nextProps.maxAge,
        name: "超出最大限制"
      }
    } else {
      return preState.age
    }
  }
  // componentWillReceiveProps(nextProps, nextContext) {
  // }

  componentDidMount() {
    console.log("componentDidMount")
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log("shouldComponentUpdate",nextProps, nextState, nextContext)
    return true
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate",prevProps, prevState, snapshot)
  }
  componentDidCatch(error, errorInfo) {
    console.log("componentDidCatch", error, errorInfo)
  }
  componentWillUnmount() {
    console.log("componentWillUnmount")
  }

  render() {
    console.log("render")
    let {title} = this.props
    let {age, name} = this.state
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
          <div>插槽部分</div>
          <div style={{display: "flex",flexDirection:"column"}}>
            {this.children.filter(item => item.props.name === "slot-01")}
            {this.children.findIndex(item => item.props.name === "slot-02") !== -1
                ?
                this.children.filter(item => item.props.name === "slot-02")
                :
                <div>默认插槽内容</div>
            }
            {this.children.filter(item => item.props.name === "slot-03")}
          </div>
          <div>{title}</div>
          <p>{name}</p>
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

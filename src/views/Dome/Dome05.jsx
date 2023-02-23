import react from "react";

class Dome05 extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 0
    }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate更新完成")
  }
  componentDidMount() {
    console.log("componentDidMount挂载完成")
  }

  render() {
    console.log("render")
    const {val} = this.state
    return (
        <>
          <div>setState第二个参数使用举例</div>
          <input value={val} ref={x=>this.inputElement = x} onChange={() => {}}/>
          <button onClick={() => {
            this.setState({
              val: val+1
            }, () =>{
              console.log("callback")
              this.inputElement.focus()
            })
          }}>改变值后获取焦点</button>
        </>
    )
  }
}

export default Dome05

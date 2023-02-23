import react from "react";

class Dome06 extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 10,
      z: 20
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", this.state)
  }

  render() {
    console.log("render")
    const {x, y, z} = this.state
    const change = () => {
      for (let i = 0; i < 5; i++) {
        this.setState((pre, props) => {
          console.log(pre, props)
          return {
            x: pre.x + 1
          }
        })
      }
    }
    return (
        <>
          <div>setState更新机制</div>
          <p>x:{x}，y:{y}，z:{z}</p>
          <button onClick={() => change()}>改变值后获取焦点</button>
        </>
    )
  }
}

export default Dome06

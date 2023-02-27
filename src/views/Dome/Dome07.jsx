import react from "react";

class Dome07 extends react.Component {
  change1(x, event) {
    console.log(this)
    console.log(event, x)
  }
  render() {
    const change2 = function (event) {
      console.log(this)
      console.log(event)
    }
    const change3 = (event) => {
      console.log(this)
      console.log(event)
    }
    return (
        <>
          <button onClick={this.change1.bind(this, 10)}>按钮一</button>
          <br/>
          <button onClick={change2}>按钮二</button>
          <br/>
          <button onClick={change3}>按钮三</button>
          <br/>
        </>
    )
  }
}

export default Dome07

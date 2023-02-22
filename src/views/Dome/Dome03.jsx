import react from "react";
class Dome03 extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [1,2,3]
    }
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log(nextState)
    return true
  }

  render() {
    let {arr} = this.state
    const add = () => {
      arr.push(4)
      this.setState({
        arr
      })
    }
    return(
        <>
          <div>Dome03</div>
          <ul>
            {arr.map(item => {
              return (
                  <li key={item}>{item}</li>
              )
            })}
          </ul>
          <button onClick={() => add()}>增加</button>
        </>
    )
  }
}
export default Dome03

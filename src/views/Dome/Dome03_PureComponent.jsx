import react from "react";
class Dome03 extends react.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      arr: [1,2,3]
    }
  }

  render() {
    let {arr} = this.state
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
          <button onClick={() => {
            arr.push(4)
            this.setState({
              arr: arr
            })
            this.forceUpdate()
          }}>增加</button>
        </>
    )
  }
}
export default Dome03

import react from "react";

class Dome08 extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [0,1,2,3,4,5,6,7,8,9]
    }
  }
  render() {
    const {data} = this.state
    const change = (event) => {
      console.dir(event.target.dataset.value)
    }
    return(
        <ul onClick={change}>
          {data.map(item => {
            return(
                <li data-value={item} key={item}>第{item}元素</li>
            )
          })}
        </ul>
    )
  }
}

export default Dome08

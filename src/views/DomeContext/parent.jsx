import Son from "@/views/DomeContext/son"
import ThemeContext from "@/utils/context";
import react from "react";

class Parent extends react.Component{
  static contextType = ThemeContext
  constructor(props) {
    super(props);
    console.log(this)
  }
  render() {
    const {parentAge} = this.context
    return(
        <>
          <p>parentAge: {parentAge}</p>
          <div>
            <Son></Son>
          </div>
        </>
    )
  }
}

export default Parent

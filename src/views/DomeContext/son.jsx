import react from "react";
import ThemeContext from "@/utils/context";

class Son extends react.Component{

  static contextType = ThemeContext
  render() {
    const {sonAge} = this.context
    return(
        <div>
          <p>sonAge: {sonAge}</p>
        </div>
    )
  }
}

export default Son

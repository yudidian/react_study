import Parent from "@/views/DomeContext/parent";
import react from "react";
import ThemeContext from "@/utils/context";

class Grand extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      grandAge: 80,
      parentAge: 30,
      sonAge: 10,
    }
  }

  render() {
    const {grandAge, parentAge, sonAge} = this.state
    return (
        <ThemeContext.Provider value={
          {
            grandAge,
            parentAge,
            sonAge
          }
        }>
          <p>grandAge: {grandAge}</p>
          <p>parentAge: {parentAge}</p>
          <p>sonAge: {sonAge}</p>
          <Parent parentAge={parentAge}/>
        </ThemeContext.Provider>
    )
  }
}

export default Grand

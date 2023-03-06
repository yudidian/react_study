import Son from "@/views/DomeContext/son"
import ThemeContext from "@/utils/context";
import {useContext} from "react";
const Parent = function (props) {
  const contextType = useContext(ThemeContext)

  const {parentAge} = contextType
  return(
      <>
        <p>parentAge: {parentAge}</p>
        <div>
          <Son></Son>
        </div>
      </>
  )
}

export default Parent

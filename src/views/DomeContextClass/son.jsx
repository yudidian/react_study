import {useContext} from "react";
import ThemeContext from "@/utils/context";

const Son = function (props) {
  const contextType = useContext(ThemeContext)

  const {sonAge} = contextType
 return(
     <div>
       <p>sonAge: {sonAge}</p>
     </div>
 )
}
export default Son

import Parent from "@/views/DomeContext/parent";
import {useState} from "react";
import ThemeContext from "@/utils/context";
const Grand = function () {
  const [grandAge, setGrandAge] = useState(80)
  const [parentAge, setParentAge] = useState(30)
  const [sonAge, setSonAge] = useState(10)
  return(
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
        <Parent />
      </ThemeContext.Provider>
  )
}

export default Grand

import {VoteBox, SonColor} from "@/views/styleDome/styledComponentsDome/style";
import {useState} from "react";


const StyledComponentsDome = function (props) {
  const [num, setNum] = useState(0)
  return(
      <>
        <VoteBox>
          <div className="parent">
            <div className="son">
              <SonColor num={num}>StyledComponent传递样式</SonColor>
            </div>
          </div>
          <button onClick={() => {
            setNum(num + 1)
          }}>修改</button>
        </VoteBox>
      </>
  )
}
export default StyledComponentsDome

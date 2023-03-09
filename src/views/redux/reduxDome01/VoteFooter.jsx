import React, {useContext} from 'react';
import ThemeContext from "@/utils/context";

const VoteFooter = function (props) {
  const {store} = useContext(ThemeContext)
  const {supNum, oppNum} = store.getState()
  return(
      <div className="footer">
        <button onClick={() =>{
          store.dispatch({
            type: "SUP_NUM",
            payload: supNum + 1
          })
        }}>支持</button>
        <button onClick={() =>{
          store.dispatch({
            type: "OPP_NUM",
            payload: oppNum + 1
          })
        }}>反对</button>
      </div>
  )
}

export default VoteFooter;

import React, {useContext} from 'react';
import ThemeContext from "@/utils/context";
import actions from "@/views/store/actions";
const VoteFooter = function (props) {
  const {store} = useContext(ThemeContext)
  const {supNum, oppNum} = store.getState()
  return(
      <div className="footer">
        <button onClick={() =>{
          store.dispatch(actions.vote.support(supNum + 1))
        }}>支持</button>
        <button onClick={() =>{
          store.dispatch(actions.vote.oppose(oppNum + 1))
        }}>反对</button>
      </div>
  )
}

export default VoteFooter;

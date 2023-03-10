import React, {useContext} from 'react';
import ThemeContext from "@/utils/context";

const VoteMain = function (props) {
  const {store} = useContext(ThemeContext)
  const {supNum, oppNum} = store.getState().vote
  let total = supNum + oppNum,
      ratio = '--';
  if (total > 0){
    ratio = (supNum / total * 100).toFixed(2) + '%';
  }
  return(
      <div className="main">
        <p>支持人数：{supNum}人</p>
        <p>反对人数：{oppNum}人</p>
        <p>支持比率：{ratio}</p>
      </div>
  )
}
export default VoteMain;

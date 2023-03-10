import React from 'react';
import {connect} from "react-redux";

const VoteMain = function (props) {
  const {supNum, oppNum} = props
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
export default connect(store => {
  return {
    supNum: store.vote.supNum,
    oppNum: store.vote.oppNum
  }
})(VoteMain);

import React from 'react';
import PropTypes from 'prop-types';
const VoteMain = function (props) {
  console.log("render")
  const { supNum, oppNum } = props;
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
VoteMain.propTypes = {
  supNum: PropTypes.number,
  oppNum: PropTypes.number
}
VoteMain.defaultProps = {
  supNum: 0,
  oppNum: 0
}
export default VoteMain;

import React from 'react';
import {connect} from "react-redux";
import actions from "@/views/store/actions"

const VoteFooter = function (props) {
  const {supNum, oppNum, support, oppose} = props
  return (
      <div className="footer">
        <button onClick={() => support(supNum + 1)}>支持
        </button>
        <button onClick={() => oppose(oppNum + 1)}>反对
        </button>
      </div>
  )
}

export default connect(store => {
  return {
    supNum: store.vote.supNum,
    oppNum: store.vote.oppNum
  }
}, actions.vote)(VoteFooter);

// export default connect(store => {
//   return {
//     supNum: store.vote.supNum,
//     oppNum: store.vote.oppNum
//   }
// }, dispatch => {
//   return {
//     support(val) {
//       dispatch(actions.vote.support(val))
//     },
//     oppose(val) {
//       dispatch(actions.vote.oppose(val))
//     }
//   }
// })(VoteFooter);

import React from 'react'
import VoteMain from "@/views/redux/react-redux-dome/VoteMain";
import VoteFooter from "@/views/redux/react-redux-dome/VoteFooter";
import {connect} from "react-redux";

const Vote = function (props) {

  const {supNum, oppNum} = props
  return (
      <>
        <div className="vote-box">
          <header className="header">
            <h2 className="title">React</h2>
            <span className="num">{supNum + oppNum}人</span>
          </header>
          <VoteMain/>
          <VoteFooter/>
        </div>
      </>
  )
}
export default connect(store => {
  return {
    supNum: store.vote.supNum,
    oppNum: store.vote.oppNum
  }
})(Vote);

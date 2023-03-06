import React, {useState} from 'react'
import VoteMain from "@/views/CompositeComponents/VoteMain";
import VoteFooter from "@/views/CompositeComponents/VoteFooter";

const Vote = function (props) {
  const [supNum, setSupNum] = useState(10)
  const [oppNum, setOppNum] = useState(5)

  const change = type => {
    if (type === 'sup') {
      setSupNum(supNum + 1);
      return;
    }
    setOppNum(oppNum + 1);
  };

  return (
      <>
        <div className="vote-box">
          <header className="header">
            <h2 className="title">React真的很不错!!</h2>
            <span className="num">{supNum + oppNum}人</span>
          </header>
          <VoteMain supNum={supNum} oppNum={oppNum}/>
          <VoteFooter change={change}/>
        </div>
      </>
  )
}
export default Vote;

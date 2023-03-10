import React, {useContext, useEffect, useState} from 'react'
import VoteMain from "@/views/redux/reduxDome01/VoteMain";
import VoteFooter from "@/views/redux/reduxDome01/VoteFooter";
import ThemeContext from "@/utils/context";

const Vote = function (props) {
  const {store} = useContext(ThemeContext)

  const [_, setRandDom] = useState(0)
  const {supNum, oppNum} = store.getState().vote
  useEffect(() => {
    console.log("componentDidMount")
    const unsubscribe = store.subscribe(() => {
      setRandDom(Math.random())
    })
    return () => {
      console.log("组件销毁")
      unsubscribe()
    }
  }, [])
  return (
      <>
        <div className="vote-box">
          <header className="header">
            <h2 className="title">React真的很不错!!</h2>
            <span className="num">{supNum + oppNum}人</span>
          </header>
          <VoteMain/>
          <VoteFooter/>
        </div>
      </>
  )
}
export default Vote;

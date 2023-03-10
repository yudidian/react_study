import React from 'react'
import VoteMain from "@/views/CompositeComponents/VoteMain";
import VoteFooter from "@/views/CompositeComponents/VoteFooter";

class Vote extends React.Component {
  // 设置初始状态
  state = {
    supNum: 10,
    oppNum: 5
  };
  // 修改状态的方法
  change = type => {
    let { supNum, oppNum } = this.state;
    if (type === 'sup') {
      this.setState({ supNum: supNum + 1 });
      return;
    }
    this.setState({ oppNum: oppNum + 1 });
  };
  render() {
    let { supNum, oppNum } = this.state;
    return <div className="vote-box">
      <header className="header">
        <h2 className="title">React真的很不错!!</h2>
        <span className="num">{supNum + oppNum}人</span>
      </header>
      <VoteMain supNum={supNum} oppNum={oppNum} />
      <VoteFooter change={this.change} />
    </div>;
  }
}
export default Vote;

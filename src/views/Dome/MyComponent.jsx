import React, {Component} from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps, prevState)
    if (nextProps.count !== prevState.count) {
      return {count: nextProps.count};
    }
    return null;
  }

  render() {
    return (
        <div>
          <p>Count: {this.state.count}</p>
          <button onClick={() => {
            console.log(this.state)
            this.setState({
              count: this.state.count + 1
            })
          }}>MyComponent增加</button>
        </div>
    );
  }
}

export default MyComponent;

import React, { Component } from "react";

class CounterButton extends Component {
  constructor() {
    super();

    this.state = {
      count: 0
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  updateCount = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return (
      <div>
        <button color={this.props.color} onClick={this.updateCount}>
          Count: {this.state.count}
        </button>
      </div>
    );
  }
}

export default CounterButton;

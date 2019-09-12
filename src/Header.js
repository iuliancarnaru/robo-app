import React, { Component } from "react";
import CounterButton from "./CounterButton";

class Header extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <div>
        <h1>Robo friends App</h1>
        <CounterButton color={"red"} />
      </div>
    );
  }
}

export default Header;

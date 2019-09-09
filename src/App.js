import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";

class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: robots,
      searchFiled: ""
    };
  }

  onSearchChange = event => {
    this.setState({ searchFiled: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchFiled.toLowerCase());
    });

    return (
      <div style={{ padding: "20px" }}>
        <h1>Robo Friends App</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;

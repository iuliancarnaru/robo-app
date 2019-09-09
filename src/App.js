import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
// import { robots } from "./robots";

class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      searchFiled: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }))
      .catch(error => console.log(error));
  }

  onSearchChange = event => {
    this.setState({ searchFiled: event.target.value });
  };

  render() {
    const { robots, searchFiled } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchFiled.toLowerCase());
    });

    return !robots.length ? (
      <h1>Loading ...</h1>
    ) : (
      <div style={{ padding: "20px" }}>
        <h1>Robo Friends App</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;

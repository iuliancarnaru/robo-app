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
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchFiled.toLowerCase());
    });

    if (this.state.robots.length === 0) {
      return <h1>Loading ...</h1>;
    } else {
      return (
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
}

export default App;

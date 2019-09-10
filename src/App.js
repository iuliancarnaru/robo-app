import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import ErrorBoundry from "./ErrorBoundry";
import { setSearchField } from "./redux/actions";
// import { robots } from "./robots";

const mapStateToProps = state => {
  return {
    searchFiled: state.searchFiled
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value))
  };
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }))
      .catch(error => console.log(error));
  }

  render() {
    const { robots } = this.state;
    const { searchFiled, onSearchChange } = this.props;

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchFiled.toLowerCase());
    });

    return !robots.length ? (
      <h1>Loading ...</h1>
    ) : (
      <div style={{ padding: "20px" }}>
        <h1>Robo Friends App</h1>
        <SearchBox onSearchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

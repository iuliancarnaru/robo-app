import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import ErrorBoundaries from "./ErrorBoundry";
import { setSearchField, requestRobots } from "./redux/actions";
// import { robots } from "./robots";

const mapStateToProps = state => {
  return {
    searchFiled: state.searchRobots.searchFiled,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchFiled, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchFiled.toLowerCase());
    });

    return isPending ? (
      <h1>Loading ...</h1>
    ) : (
      <div style={{ padding: "20px" }}>
        <Header />
        <SearchBox onSearchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundaries>
            <CardList robots={filteredRobots} />
          </ErrorBoundaries>
        </Scroll>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

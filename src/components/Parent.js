import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = { status: true };
  }
  handleClick = () => {
    this.setState({ status: !this.state.status });
  };

  render() {
    return (
      <>
        <button onClick={this.handleClick}>Update Parent State</button>
        <Child status={this.state} />
      </>
    );
  }
}

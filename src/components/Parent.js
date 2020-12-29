import React, { Component } from "react";
import Child from "./Child";
import HooksChild from "./HooksChild";

export default class Parent extends Component {
  state = {
    hooks: false,
    status: true,
    arr: ["D", "a", "d", " ", "J", "o", "k", "e", ":"],
  };

  handleClick = () => {
    this.setState((prevState) => ({
      ...prevState,
      status: !this.state.status,
    }));
  };

  handleHooksClick = () => {
    this.setState((prevState) => ({
      ...prevState,
      hooks: !this.state.hooks,
    }));
  };

  render() {
    console.log("rendering parent");
    const { hooks, status, arr } = this.state;
    return (
      <>
        <button onClick={this.handleClick}>
          Update Parent State and Props To Be Passed
        </button>
        <button onClick={this.handleHooksClick}>
          {hooks ? "Hide Hooks Child" : "Show Hooks Child"}
        </button>
        {hooks ? (
          <HooksChild status={status} arr={arr} />
        ) : (
          <Child status={status} arr={arr} />
        )}
      </>
    );
  }
}

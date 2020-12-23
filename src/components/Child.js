import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { show: this.props.status };
  }
  clickHandler = () => {
    this.setState({ show: !this.state.show });
  };
  componentDidMount() {
    console.log("component mounted");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    if (prevProps.status !== this.props.status) {
      console.log("prevProps", prevProps, "currentProps", this.props.status);
      console.log("props updated");
    }
    if (prevState.show !== this.state.show) {
      console.log("prevProps", prevProps, "currentProps", this.props.status);
      // console.log("component updated");
      // console.log("prevProps", prevProps);
    }
  }
  componentWillUnmount() {
    console.log("component unmounted");
  }
  render() {
    console.log("rendered");
    console.log("this.state", this.state);
    return (
      <div className="App">
        <header className="App-header">
          <h1>Learn React Hooks!</h1>
          <button onClick={this.clickHandler}>Update state</button>
          {this.state.show ? <div>Show = True</div> : <></>}
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <h2>
            How to convert class components to functional components with
            Hooks!!
          </h2>

          <h3>Common Life Cycle Methods</h3>
          <h3>1) Mounting: ComponentDidMount</h3>
          <ul>constructor</ul>
          <h3>2) Updating: ComponentDidUpdate</h3>
          <ul>setState</ul>
          <h3>3) Unmounting: ComponentWillUnmount</h3>
        </header>
      </div>
    );
  }
}

// export default App;

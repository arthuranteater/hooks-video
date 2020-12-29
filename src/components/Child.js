import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const getJoke = () => {
  fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => this.setJoke(res.joke));
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: this.props.status,
      str: this.handleProp(this.props.arr),
      joke: "",
    };
  }

  // state = { show: this.props.status, str: this.handleProp(this.props.arr) };

  handleProp = (prop) => {
    console.log("constructor (set initial state)");
    return prop.join("");
  };
  clickHandler = () => {
    this.setState((prevState) => ({ ...prevState, show: !this.state.show }));
  };
  setJoke = (joke) => {
    this.setState((prevState) => ({ ...prevState, joke: joke }));
  };

  getJoke = () => {
    fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => this.setJoke(res.joke));
  };

  componentDidMount() {
    console.log("componentDidMount (make api calls)");
    this.getJoke();
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate (check for updated props)");
    if (prevProps.status !== this.props.status) {
      console.log("status prop updated", this.props.status);
      this.setState((prevState) => ({ ...prevState, show: this.props.status }));
    }
    if (prevState.show !== this.state.show) {
      console.log("show state updated", this.state.show);
    }
  }
  componentWillUnmount() {
    console.log("**CHILD** componentWillUnmount (turn off eventListeners etc)");
  }
  render() {
    console.log("render (render new view)");
    const { show, str, joke } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Learn React Hooks Plus Get A Dad Joke!</h1>
          <p>{str}</p>
          {show ? <p>{joke}</p> : <></>}
          <button onClick={this.getJoke}>Get New Joke</button>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Common Life Cycle Methods</h2>
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

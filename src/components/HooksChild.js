import React, { useState, useEffect, useRef } from "react";
import { getJSON } from "./CustomHook";
import logo from "./logo.svg";
import "./App.css";

const computeProp = (props) => {
  return props.join("");
};

export default function App(props) {
  //api
  const api = "https://icanhazdadjoke.com/";
  //renders
  console.log("rendering hooks child");
  //constructor ?
  const [str, setStr] = useState(() => {
    console.log("useState, setting initial state");
    return computeProp(props.arr);
  });

  //setting intial state without computing
  const [joke, setJoke] = useState("");
  const [show, setShow] = useState(props.status);
  const [newJoke, setNewJoke] = useState(true);

  //componentDidMount
  useEffect(() => {
    console.log("useEffect (mounted)");
    fetch(api, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => setJoke(res.joke));
  }, [newJoke]);

  //custom hook

  const data = getJSON(api, "id", newJoke);

  //componentDidUpdate
  useEffect(() => {
    console.log("useEffect (updated)");
    setShow(props.status);
  }, [props.status]);

  //componentWillUnmount
  useEffect(() => {
    return () => {
      console.log("useEffect (unmounted)");
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Learn React Hooks Plus Get A Dad Joke!</h1>
        <p>{str}</p>
        {show ? <p>{data}</p> : <></>}
        <button
          onClick={(e) => {
            setNewJoke(!newJoke);
          }}
        >
          Get Joke
        </button>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Common Hooks!!</h2>
        <h3>1) useState</h3>
        <h3>2) useEffect</h3>
        <h3>3) custom hooks</h3>
      </header>
    </div>
  );
}

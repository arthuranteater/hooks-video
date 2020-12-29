import React, { useState, useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";

const computeProp = (props) => {
  return props.join("");
};

export default function App(props) {
  console.log("rendering hooks child");
  //constructor ?
  const [hello, setHello] = useState(() => {
    console.log("useState, setting initial state");
    return computeProp(props.arr);
  });

  //setting intial state without computing
  const [joke, setJoke] = useState("");
  const [show, setShow] = useState(props.status);

  //componentDidMount
  useEffect(() => {
    console.log("useEffect (mounted)");
    fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => setJoke(res.joke));
  }, []);

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

  //componentDidMount, componentDidUpdate, componentWillUnmount

  return (
    <div className="App">
      <header className="App-header">
        <p>{hello}</p>
        <p>{joke}</p>
        <h1>Learn React Hooks!</h1>
        <button
          onClick={(e) => {
            // e.preventDefault()
            e.stopPropagation();
            setShow(!show);
          }}
        >
          Update state
        </button>
        {show ? <div>Show = True</div> : <></>}
        {/* <div>{`renders${renders.current}`}</div> */}
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
          How to convert class components to functional components with Hooks!!
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

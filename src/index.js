import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import Child from "./components/Child";
import Parent from "./components/Parent";
import reportWebVitals from "./reportWebVitals";

// const props = {};

const status = true;

ReactDOM.render(
  <React.StrictMode>
    <Parent />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

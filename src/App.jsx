import React from "react";
import logo from "./images/logo512.png";
import "./App.scss";
import init from "./firebase/addData";
import getDataFromFirebase from "./firebase/getData";

function App() {
  init();
  getDataFromFirebase();
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;

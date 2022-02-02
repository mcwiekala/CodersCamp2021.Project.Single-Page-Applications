import React from "react";
import "./App.scss";

import Signup from "./components/Signup/Signup";
import Navbar from "./components/Navbar/Navbar";
import MoviesView from "./components/movie-viewer/MoviesView";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Signup />
      <MoviesView />
    </div>
  );
}

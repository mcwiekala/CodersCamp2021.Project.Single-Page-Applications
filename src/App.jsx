import React from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import MoviesView from "./components/movie-viewer/MoviesView";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <MoviesView />
    </div>
  );
}

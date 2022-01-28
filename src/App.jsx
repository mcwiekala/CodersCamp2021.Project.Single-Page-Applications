import React from "react";
import "./App.scss";
import MoviesView from "./components/movie-browser/MoviesView";

export default function App() {
  return (
    <div className="App">
      <MoviesView />
    </div>
  );
}

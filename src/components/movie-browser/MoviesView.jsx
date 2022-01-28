import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieBrowser from "./MovieBrowser";
import MovieDetails from "./MovieDetails";

export default function MoviesView() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieBrowser />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

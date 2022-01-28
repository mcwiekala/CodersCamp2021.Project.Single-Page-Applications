import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import moviesData from "./movies_data.json";

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setMovie(moviesData.movies.filter((item) => item.imdbID === id));
    console.log(movie);
  }, []);

  return (
    <>
      <h1>My Movie Overview</h1>
      <h3>ID: {id}</h3>
    </>
  );
}

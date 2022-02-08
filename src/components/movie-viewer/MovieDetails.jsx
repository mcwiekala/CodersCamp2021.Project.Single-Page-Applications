import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import moviesData from "./movies_data.json";

export default function MovieDetails() {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const apiKey = "46e8c41c";
  const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`;

  const getData = () => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setMovie(data));
  };

  useEffect(() => {
    getData();
    console.log(movie);
  }, []);

  useEffect(() => null);

  return (
    <>
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt="" />
    </>
  );
}

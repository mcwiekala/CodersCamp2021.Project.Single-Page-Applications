import React, { useEffect, useState } from "react";
import Movie from "./Movie";

function MovieBrowser() {
  const [movies, setMovies] = useState([]);

  const getData = () => {
    fetch("http://localhost:3000/movies", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (fetchData) {
        console.log(fetchData);
        setMovies(fetchData);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Repertuar</h1>
      {movies.map((movie) => (
        <div key={movie.Title}>
          <img src={movie.Poster} alt="" />
          <h1 className="user">{movie.Title}</h1>
        </div>
      ))}
    </div>
  );
}

export default MovieBrowser;

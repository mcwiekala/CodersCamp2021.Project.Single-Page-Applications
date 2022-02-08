import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import "./style/MovieBrowser.scss";
import moviesData from "./movies_data.json";

export default function MovieBrowser() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // console.log(moviesData);
    setMovies(moviesData.movies);
  }, []);

  return (
    <div className="movie-browser-wrapper">
      <div className="movie-browser-container">
        {movies.map((item) => (
          <Movie
            key={item.imdbID}
            id={item.imdbID}
            title={item.Title}
            genre={item.Genre}
            plot={item.Plot}
            poster={item.Poster}
            rated={item.Rated}
            runtime={item.Runtime}
            rating={item.imdbRating}
            votes={item.imdbVotes}
          />
        ))}
      </div>
    </div>
  );
}

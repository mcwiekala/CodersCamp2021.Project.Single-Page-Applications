import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import moviesData from "./movies_data.json";

export default function MovieBrowser() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // console.log(moviesData);
    setMovies(moviesData.movies);
  }, []);

  return (
    <div>
      <div className="movie-browser-wrapper">
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

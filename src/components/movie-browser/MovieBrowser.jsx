import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import moviesData from "./movies_data.json";

function MovieBrowser() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(moviesData.movies);
  }, []);

  return (
    <div>
      <h1>Repertuar</h1>
      {movies.map((movie) => (
        <Movie
          key={movie.imdbID}
          title={movie.Title}
          genre={movie.Genre}
          plot={movie.Plot}
          poster={movie.Poster}
          rated={movie.Rated}
          runtime={movie.Runtime}
          rating={movie.imdbRating}
          votes={movie.imdbVotes}
        />
      ))}
    </div>
  );
}

export default MovieBrowser;

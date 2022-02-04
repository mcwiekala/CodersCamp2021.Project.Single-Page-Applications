import React, { useEffect, useState } from "react";
import Movie from "./Movie";
// import moviesData from "./movies_data.json";

export default function MovieBrowser() {
  const apiUrl =
    "https://mcteamcamp-6416f-default-rtdb.firebaseio.com/movies.json";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div>
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
  );
}

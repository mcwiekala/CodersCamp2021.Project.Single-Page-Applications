import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import firebase from "../../firebase-config";
import Movie from "./MovieCard";
import "./style/MovieBrowser.scss";

export default function MovieBrowser() {
  const [movies, setMovies] = useState([]);

  const db = getFirestore(firebase);

  const getMovies = async () => {
    const querySnapshot = await getDocs(collection(db, "movies"));
    const firebaseMovies = [];
    querySnapshot.forEach((doc) => {
      firebaseMovies.push({ ...doc.data(), id: doc.id });
    });
    setMovies(firebaseMovies);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="movie-browser-wrapper">
      <div className="movie-browser-container">
        {movies.map((item) => (
          <Movie
            key={item.imdbID}
            id={item.id}
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

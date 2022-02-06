import React, { useEffect, useState } from "react";
import { collection, getDoc, getFirestore } from "firebase/firestore";
import firebase from "../../firebase-config";
import Movie from "./Movie";
import "./style/MovieBrowser.scss";

export default function MovieBrowser() {
  const [movies, setMovies] = useState([]);

  const db = getFirestore(firebase);

  const getMovies = async () => {
    console.log("connection to db started");
    const docRef = collection(db, "movies");
    getDoc(docRef).then((snapshot) => {
      console.log(snapshot);
      const moviesData = [];
      snapshot.docs.forEach((doc) => {
        moviesData.push({ ...doc.data() });
      });
      setMovies(moviesData);
    });
  };

  useEffect(() => {
    getMovies();
    console.log(movies);
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

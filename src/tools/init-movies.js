import { doc, setDoc, getFirestore } from "firebase/firestore";
import firebase from "../firebase-config";

const data = require("./movies_data.json");

const db = getFirestore(firebase);

data.movies.forEach((movie, index) => {
  console.log(movie);
  setDoc(doc(db, "movies", index.toString()), {
    movie,
  });
  console.log(`added: ${movie.Title}, id: ${index}`);
});

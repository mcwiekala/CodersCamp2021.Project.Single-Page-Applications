import { doc, setDoc, getFirestore } from "firebase/firestore";
import firebase from "../firebase-config";

const data = require("./movies_data.json");

const db = getFirestore(firebase);

data.movies.forEach((movieElement, index) => {
  console.log(movieElement);
  setDoc(doc(db, "movies", index.toString()), movieElement);
  console.log(`added: ${movieElement.Title}, id: ${index}`);
});

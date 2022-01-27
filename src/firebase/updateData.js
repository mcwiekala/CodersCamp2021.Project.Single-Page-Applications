import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import firebase from "./firebaseConfig";

const db = getFirestore(firebase);

const updateMovie = async () => {
  console.log("Initializing data... ");

  const matrixId = "111";
  const matrixRef = doc(db, "films", matrixId);
  const movieResponse = await getDoc(matrixRef);

  if (movieResponse.exists()) {
    const matrix = movieResponse.data();
    console.log(`Pobrano film: "${matrix.title}" z bazy danych`);
    matrix.description = "To mój nowy opis filmu Matrix";
    await setDoc(doc(db, "films", matrixId), {
      title: matrix.title,
      description: matrix.description,
    });
    console.log(
      `Zapisano film: "${matrix.title}" do bazy danych z nowym opisem: "${matrix.description}"`
    );
  } else {
    console.log("Nie ma tego filmu w bazie!");
  }
};

export default updateMovie;

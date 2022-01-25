import { getFirestore, addDoc, collection } from "firebase/firestore";
import firebase from "./firebaseConfig";

const db = getFirestore(firebase);

const init = async () => {
  console.log("Initializing data... ");

  try {
    const docRef = await addDoc(collection(db, "locations"), {
      city: "Wrocław",
      halls: 3,
      addres: "ul. Prosta 15",
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  try {
    const docRef = await addDoc(collection(db, "locations"), {
      city: "Poznań2",
      halls: 5,
      addres: "ul. Długa 32",
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  try {
    const docRef = await addDoc(collection(db, "locations"), {
      city: "Katowice2",
      halls: 11,
      addres: "ul. Krzywa 15",
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export default init;

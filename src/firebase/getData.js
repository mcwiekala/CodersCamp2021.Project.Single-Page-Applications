import { collection, getDocs, getFirestore } from "firebase/firestore";
import firebase from "./firebaseConfig";

const db = getFirestore(firebase);

const getDataFromFirebase = async () => {
  console.log("Getting data... ");

  const querySnapshot = await getDocs(collection(db, "locations"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
};

export default getDataFromFirebase;

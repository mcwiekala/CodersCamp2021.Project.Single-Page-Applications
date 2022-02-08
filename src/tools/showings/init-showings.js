import { doc, setDoc, getFirestore } from "firebase/firestore";
import firebase from "../../firebase-config";

import filmShowingsData from "./filmShowingsData";

const db = getFirestore(firebase);

filmShowingsData.forEach((showingElement, index) => {
  console.log(showingElement);
  setDoc(doc(db, "showings", index.toString()), showingElement);
  console.log(`added showing, id: ${index}`);
});

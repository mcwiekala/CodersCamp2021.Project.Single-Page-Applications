import { initializeApp } from "firebase/app";
import "firebase/auth";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyC2rVzpmk-I73AiuhFeH5UNfGeSyGKE7Eo",
  authDomain: "mcteamcamp-6416f.firebaseapp.com",
  projectId: "mcteamcamp-6416f",
  storageBucket: "mcteamcamp-6416f.appspot.com",
  messagingSenderId: "1070345375458",
  appId: "1:1070345375458:web:4340029440cc907ad318bb",
});

export const auth = firebaseApp.auth();
export default firebaseApp;

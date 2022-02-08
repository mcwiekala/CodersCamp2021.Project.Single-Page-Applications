import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut, getAuth } from "firebase/auth";
import firebase from "../../firebase-config";
import Button from "./Button";
import "./Signout.scss";

export default function Signup() {
  const auth = getAuth(firebase);
  const [user, setUser] = useState({});

  useEffect(
    () =>
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      }),
    [auth]
  );

  const logout = async () => {
    await signOut(auth);
    // window.location.reload(true);
  };

  return (
    <div className="signout">
      <div className="signout__user">
        <h4> User Logged In:</h4>
        <p>{user?.email}</p>
      </div>
      <Button onClick={logout}>Sign Out</Button>
    </div>
  );
}

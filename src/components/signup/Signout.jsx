import React, { useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../../firebase-config";
import Button from "../navbar/Button";
import "./Signout.scss";

export default function Signup() {
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const logout = async () => {
    await signOut(auth);
    window.location.reload(true);
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

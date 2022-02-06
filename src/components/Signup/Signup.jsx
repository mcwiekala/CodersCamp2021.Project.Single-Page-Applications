import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import firebase from "../../firebase-config";

export default function Signup() {
  const auth = getAuth(firebase);

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const userView = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(userView);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const userView = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(userView);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <div>
        <h3> Register User</h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />

        <button type="button" onClick={register}>
          Create User
        </button>
      </div>

      <div>
        <h3> Login</h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <button type="button" onClick={login}>
          Login
        </button>
      </div>

      <h4> User Logged In:</h4>
      {user?.email}
      <button type="button" onClick={logout}>
        Sign Out
      </button>
    </div>
  );
}

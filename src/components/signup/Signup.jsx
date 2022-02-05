import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Eye, EyeOff } from "react-feather";
import auth from "../../firebase-config";

export default function Signup() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  const [passwordShown, setPasswordShown] = useState(false);

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
      window.location.reload(true);
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
      window.location.reload(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
    window.location.reload(true);
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
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
        <div>
          <input
            placeholder="Password..."
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
            type={passwordShown ? "text" : "password"}
          />
          <button type="button" onClick={togglePassword}>
            {passwordShown ? <Eye size={12} /> : <EyeOff size={12} />}
          </button>
        </div>

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
        <div>
          <input
            placeholder="Password..."
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
            type={passwordShown ? "text" : "password"}
          />
          <button type="button" onClick={togglePassword}>
            {passwordShown ? <Eye size={12} /> : <EyeOff size={12} />}
          </button>
        </div>

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

import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Eye, EyeOff } from "react-feather";
import auth from "../../firebase-config";
import Button from "../navbar/Button";
import "./Login.scss";

export default function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [passwordShown, setPasswordShown] = useState(false);

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

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="login">
      <h3> Login</h3>
      <div className="login__input">
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
          <Button
            type="button"
            buttonStyle="btn--outline"
            buttonSize="btn--small"
            onClick={togglePassword}
          >
            {passwordShown ? <Eye size={12} /> : <EyeOff size={12} />}
          </Button>
        </div>
      </div>
      <Button type="button" onClick={login}>
        Login
      </Button>
    </div>
  );
}

import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Eye, EyeOff } from "react-feather";
import auth from "../../firebase-config";
import Button from "../navbar/Button";
import "./Signup.scss";

export default function Signup() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [passwordShown, setPasswordShown] = useState(false);

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

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="signup">
      <h3> Register User</h3>
      <div className="signup__input">
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
      <Button type="button" onClick={register}>
        Create User
      </Button>
    </div>
  );
}

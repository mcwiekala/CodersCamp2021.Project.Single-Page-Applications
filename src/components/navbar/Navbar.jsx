import React, { useState } from "react";
import { Menu, X } from "react-feather";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../../firebase-config";
import MenuItems from "./MenuItems";
import "./Navbar.scss";
import Button from "./Button";
import Signup from "../signup/Signup";
import Login from "../signup/Login";
import Modal from "../signup/Modal";
import Signout from "../signup/Signout";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };
  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <nav className="nav-bar" data-testid="navbar">
      <h1 className="nav-bar__logo">MCkino </h1>
      <button
        className="nav-bar__menu--icon"
        onClick={() => setClicked(!clicked)}
        type="button"
        onKeyDown={() => setClicked(!clicked)}
      >
        {clicked ? (
          <X className="nav-bar__menu--icons" />
        ) : (
          <Menu className="nav-bar__menu--icons" />
        )}
      </button>
      <ul className={clicked ? "nav-bar__menu active" : "nav-bar__menu"}>
        {MenuItems.map((item) => (
          <li key={item.id}>
            <a className={item.cName} href={item.url}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      {user ? (
        <Signout />
      ) : (
        <div className="nav-bar__auth">
          <Button
            className="nav-bar__button"
            onClick={() => {
              toggleSignup();
              toggleModal();
            }}
          >
            Register
          </Button>
          <Button
            className="nav-bar__button"
            onClick={() => {
              toggleLogin();
              toggleModal();
            }}
          >
            Log in
          </Button>
        </div>
      )}
      {showModal ? (
        <Modal>
          <Button
            buttonStyle="btn--outline"
            buttonSize="btn--small"
            type="button"
            onClick={() => {
              toggleModal();
              setShowSignup(false);
              setShowLogin(false);
            }}
          >
            <X size={12} />
          </Button>
          {showSignup && <Signup />} {showLogin && <Login />}
        </Modal>
      ) : null}
    </nav>
  );
}

export default Navbar;

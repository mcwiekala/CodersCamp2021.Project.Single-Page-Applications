import React, { useEffect, useState } from "react";
import { Menu, X } from "react-feather";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import firebase from "../../firebase-config";
import MenuItems from "./MenuItems";
import "./Navbar.scss";
import Button from "./Button";
import Signup from "../auth/Signup";
import Login from "../auth/Login";
import Modal from "../auth/Modal";
import Signout from "./Signout";

function Navbar() {
  const auth = getAuth(firebase);
  const [clicked, setClicked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  useEffect(() => {
    if (user && Object.keys(user).length !== 0) {
      setShowModal(false);
      setShowLogin(false);
      setShowSignup(false);
    }
  }, [user]);

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
      <div className={clicked ? "nav-bar__menu active" : "nav-bar__menu"}>
        <ul className="nav-bar__href">
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
                setShowSignup(true);
                setShowModal(true);
              }}
            >
              Register
            </Button>
            <Button
              className="nav-bar__button"
              onClick={() => {
                setShowLogin(true);
                setShowModal(true);
              }}
            >
              Log in
            </Button>
          </div>
        )}
      </div>

      {showModal ? (
        <Modal>
          <Button
            buttonStyle="btn--outline"
            buttonSize="btn--small"
            type="button"
            onClick={() => {
              setShowModal(false);
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

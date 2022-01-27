import React, { useState } from "react";
import { Menu, X } from "react-feather";
import MenuItems from "./MenuItems";
import "./Navbar.scss";
import Button from "./Button";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  return (
    <nav className="nav-bar">
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
      <Button>Register</Button>
      <Button>Log in</Button>
    </nav>
  );
}

export default Navbar;

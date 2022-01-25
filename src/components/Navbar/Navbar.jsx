import React, { useState } from "react";
import { Menu, X } from "react-feather";
import MenuItems from "./MenuItems";
import "./Navbar.css";
import Button from "./Button";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  return (
    <nav className="NavbarItem">
      <h1 className="navbar-logo">MCkino </h1>
      <button
        className="menu-icon"
        onClick={() => setClicked(!clicked)}
        type="button"
        onKeyDown={() => setClicked(!clicked)}
      >
        {clicked ? <X className="icons" /> : <Menu className="icons" />}
      </button>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
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

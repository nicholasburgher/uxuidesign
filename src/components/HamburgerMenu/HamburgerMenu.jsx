import React, { useState} from "react";
import { NavLink } from "react-router-dom";
import "./HamburgerMenu.scss";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    if (isOpen === false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }

  return (
    <div className={`HamburgerMenu`}>
      <div onClick={handleClick} className={`icon ${isOpen ? "active" : ""}`}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`Nav ${isOpen ? "active" : ""}`}>
        <NavLink onClick={handleClick} to="/">Landing</NavLink>
        <NavLink onClick={handleClick} to="work">Work</NavLink>
      </div>
    </div>
  );
}

export default HamburgerMenu;
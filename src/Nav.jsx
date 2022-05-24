import React, { useEffect, useState } from "react";
import logo from "./logo.png";
import avatar from "./avatar.png";
import "./Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src={logo} alt="netflix-logo" />
      <img className="nav_avatar" src={avatar} alt="netflix-avatar" />
    </div>
  );
};

export default Nav;

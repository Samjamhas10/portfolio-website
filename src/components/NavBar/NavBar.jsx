import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      {/* <a href="#" className="navbar__logo">SamSam</a> */}
      <div className="navbar__links">
        <a href="#home" className="navbar__link">
          Home
        </a>
        <a href="#about" className="navbar__link">
          About Me
        </a>
        <a href="#projects" className="navbar__link">
          Projects
        </a>
        <a href="#contact" className="navbar__link">
          Contact Me
        </a>
      </div>
    </nav>
  );
}

export default NavBar;

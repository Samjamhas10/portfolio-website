import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      {/* <Link to="/" className="navbar__logo">
        SamSam
      </Link> */}
      <div className="navbar__links">
        <Link to="/" className="navbar__link">
          Home
        </Link>
        <Link to="/aboutme" className="navbar__link">
          About Me
        </Link>
        <Link to="/projects" className="navbar__link">
          Projects
        </Link>
        <Link to="/contactme" className="navbar__link">
          Contact Me
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;

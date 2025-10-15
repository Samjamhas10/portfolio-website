import React, { useState } from "react"; // useState for managing open/close state
import { Link, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./NavBar.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false); // track if mobile menu is open
  const location = useLocation(); // gets current URL path

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <Link to="/" className="navbar__logo">
        <Logo />
      </Link>
      <button
        className="navbar__toggle"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="navbar__hamburger"></span>
      </button>
      <div className={`navbar__links${menuOpen ? " navbar__links--open" : ""}`}>
        <Link
          to="/"
          className={`navbar__link${
            location.pathname === "/" ? " navbar__link--active" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/aboutme"
          className={`navbar__link${
            location.pathname === "/aboutme" ? " navbar__link--active" : ""
          }`}
        >
          About Me
        </Link>
        <Link
          to="/projects"
          className={`navbar__link${
            location.pathname === "/projects" ? " navbar__link--active" : ""
          }`}
        >
          Projects
        </Link>
        <Link
          to="/contactme"
          className={`navbar__link${
            location.pathname === "/contactme" ? " navbar__link--active" : ""
          }`}
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;

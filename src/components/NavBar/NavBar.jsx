import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div></div>
      <section className="nav__links">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#aboutme">About Me</a>
        <a href="#contacts">Contact Me</a>
      </section>
    </nav>
  );
}

export default NavBar;

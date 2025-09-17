import React from "react";

// import components
import NavBar from "../NavBar/NavBar";
import Projects from "../Projects/Projects";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";

// import styles
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Projects />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;

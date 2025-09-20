import React from "react";

// import components
import NavBar from "../NavBar/NavBar";
import Main from "../Main/Main";
import Projects from "../Projects/Projects";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";

// import styles
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Main />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

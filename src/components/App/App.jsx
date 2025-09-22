import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// import components
import NavBar from "../NavBar/NavBar";
import Main from "../Main/Main";
import Projects from "../Projects/Projects";
import AboutMe from "../AboutMe/AboutMe";
import ContactMe from "../ContactMe/ContactMe";
import Footer from "../Footer/Footer";

// import styles
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contactme" element={<ContactMe />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

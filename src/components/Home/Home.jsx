import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
// import homebg from "../../assets/home-bg.png";
import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";
import ContactMe from "../ContactMe/ContactMe";
import "./Home.css";

function Home({ onViewMyWork, onGetInContact }) {
  return (
    <>
      <main
        className="home"
        // style={{
        //   backgroundImage: `url(${homebg})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <header>
          <h1 className="home__name">Hi, I'm Samsam Hashi!</h1>
          <p className="home__description">
            Detail-oriented full-stack developer who enjoys solving complex
            problems and turning ideas into seamless, user-friendly web
            applications.
          </p>

          <div className="home__buttons">
            <button className="home__button" onClick={onViewMyWork}>
              View My Work
            </button>
            <button className="home__button" onClick={onGetInContact}>
              Get In Contact
            </button>
          </div>

          <div className="home__links">
            <a
              href="https://github.com/Samjamhas10"
              target="_blank"
              rel="noopener noreferrer"
              className="home__link-icon"
            >
              <FaGithub size={24} />
              <span className="home__tooltip">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/samsamjamahashi/"
              target="_blank"
              rel="noopener noreferrer"
              className="home__link-icon"
            >
              <FaLinkedin size={24} />
              <span className="home__tooltip">LinkedIn</span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="home__link-icon"
            >
              <FaFilePdf size={24} />
              <span className="home__tooltip">Resume</span>
            </a>
          </div>
        </header>
      </main>
      <AboutMe />
      <Projects />
      <ContactMe />
    </>
  );
}

export default Home;

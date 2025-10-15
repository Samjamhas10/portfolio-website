import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import profilepic from "../../assets/profilepic.jpg";
import "./Home.css";

function Home({ onViewMyWork, onGetInContact }) {
  return (
    <main className="home">
      <header>
        <img
          src={profilepic}
          alt="Portrait of SamSam"
          className="home__profile-image"
        />
        <h1 className="home__name">Hi, I'm Samsam Hashi!</h1>
        <p className="home__description">
          A detail-oriented Full-stack developer driven by building meaningful
          solutions that help others.
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
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/samsamjamahashi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <FaFilePdf size={24} />
          </a>
        </div>
      </header>
    </main>
  );
}

export default Home;

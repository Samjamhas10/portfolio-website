import "./AboutMe.css";
import profilepic from "../../assets/profilepic.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function AboutMe() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "Git",
    "GitHub",
    "Figma",
    "Deployment",
  ];

  return (
    <section className="aboutme" id="aboutme">
      <div className="aboutme__container">
        <h2 className="aboutme__title">About Me</h2>

        <div className="aboutme__content">
          <div className="aboutme__profile-section">
            <div className="aboutme__image-wrapper">
              <img
                src={profilepic}
                alt="Portrait of SamSam"
                className="aboutme__profile-pic"
              />
              <div className="aboutme__image-glow"></div>
            </div>

            <div className="aboutme__social-links">
              <a
                href="https://github.com/Samjamhas10"
                target="_blank"
                rel="noopener noreferrer"
                className="aboutme__social-btn"
              >
                <FaGithub size={20} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/samsamjamahashi/"
                target="_blank"
                rel="noopener noreferrer"
                className="aboutme__social-btn"
              >
                <FaLinkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="aboutme__info">
            <p className="aboutme__text">
              Hi! I'm <strong>Samsam Hashi</strong>, a passionate Full-Stack
              Software Engineer who enjoys building modern, responsive web
              applications. I work primarily with technologies like React,
              Node.js, JavaScript, and modern frontend tools to create clean,
              user-focused experiences.
            </p>
            <p className="aboutme__text">
              I enjoy turning ideas into real, functional products and
              continuously improving my skills through hands-on projects. From
              designing intuitive interfaces to developing scalable backend
              systems, I love every part of the development process.
            </p>
            <p className="aboutme__text">
              I'm currently focused on growing as an engineer, contributing to
              meaningful projects, and collaborating with teams that value
              creativity, learning, and problem-solving.
            </p>
          </div>
        </div>

        <div className="aboutme__skills-section">
          <h3 className="aboutme__skills-title">
            <span className="aboutme__skills-icon">⚡</span>
            Technical Skills
          </h3>
          <ul className="aboutme__skills-list">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="aboutme__skill-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

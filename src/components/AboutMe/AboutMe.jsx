import "./AboutMe.css";
import profilepic from "../../assets/profilepic.jpg";

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
        <img
          src={profilepic}
          alt="Portrait of SamSam"
          className="aboutme__profile-pic"
        />
        <h2 className="aboutme__title">About Me</h2>
        <p className="aboutme__text">
          Hi! I'm Samsam Hashi, a passionate Full-Stack Software Engineer who
          enjoys building modern, responsive web applications. I work primarily
          with technologies like React, Node.js, JavaScript, and modern frontend
          tools to create clean, user-focused experiences. I enjoy turning ideas
          into real, functional products and continuously improving my skills
          through hands-on projects. From designing intuitive interfaces to
          developing scalable backend systems, I love every part of the
          development process. I'm currently focused on growing as an engineer,
          contributing to meaningful projects, and collaborating with teams that
          value creativity, learning, and problem-solving.
        </p>
        <div className="aboutme__skills">Skills</div>
        <ul className="aboutme__skills-list">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <div className="aboutme__links">
          <a
            href="https://github.com/Samjamhas10"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          {" | "}
          <a
            href="https://www.linkedin.com/in/samsamjamahashi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
export default AboutMe;

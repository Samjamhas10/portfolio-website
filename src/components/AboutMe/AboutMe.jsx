import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="aboutme" id="aboutme">
      <div className="aboutme__container">
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
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>Git</li>
          <li>GitHub</li>
          <li>Figma</li>
          <li>Deployment</li>
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

import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="aboutme" id="aboutme">
      <div className="aboutme__container">
        <h2 className="aboutme__title">About Me</h2>
        <p className="aboutme__text">
          Hi! I'm Samsam Hashi, a passionate Full-Stack Software Engineer
          with experience in building web applications using React, Node.js, and
          more. I love learning new technologies and collaborating on exciting
          projects.
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

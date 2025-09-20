import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="aboutme" id="aboutme">
      <h2>About Me</h2>
      <p>
        Hi! I'm SamSam, a passionate Full-Stack Software Engineer with
        experience in building web applications using React, Node.js, and more.
        I love learning new technologies and collaborating on exciting projects.
      </p>
      <p>
        <a
          href="https://github.com/Samjamhas10"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        |{" "}
        <a
          href="https://www.linkedin.com/in/samsamjamahashi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </section>
  );
}

export default AboutMe;

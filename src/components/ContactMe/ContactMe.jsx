import "./ContactMe.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function ContactMe() {
  return (
    <div className="contactme">
      <h2 className="contactme__title">Get in Touch</h2>

      <p className="intro">
        I'm always open to discussing new opportunities, projects, or
        collaborations.
      </p>
      <div className="contactme__links">
        <p>
          <FaEnvelope className="icon" />
          <a href="mailto:sjama9660@gmail.com">sjama9660@gmail.com</a>
        </p>
        <p>
          <FaLinkedin className="icon" />
          <a
            href="https://www.linkedin.com/in/samsamjamahashi/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit my LinkedIn profile"
          >
            linkedin.com/in/samsamjamahashi
          </a>
        </p>
        <p>
          <FaGithub className="icon" />
          <a
            href="https://github.com/Samjamhas10"
            target="_blank"
            rel="noreferrer"
          >
            github.com/Samjamhas10
          </a>
        </p>
      </div>
    </div>
  );
}

export default ContactMe;

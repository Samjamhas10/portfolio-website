import "./ContactMe.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function ContactMe() {
  return (
    <div className="contactme">
      <h2>Contact Me</h2>

      <p className="intro">
        I'm always open to discussing new opportunities, projects, or
        collaborations.
      </p>
      <p>
        <FaEnvelope className="icon" />{" "}
        <a href="mailto:sjama9660@gmail.com">sjama9660@gmail.com</a>
      </p>
      <p>
        <FaLinkedin className="icon" />{" "}
        <a
          href="https://linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noreferrer"
        >
          linkedin.com/in/your-linkedin
        </a>
      </p>
      <p>
        <FaGithub className="icon" />{" "}
        <a
          href="https://github.com/Samjamhas10"
          target="_blank"
          rel="noreferrer"
        >
          github.com/Samjamhas10
        </a>
      </p>
      <p>
        <FaMapMarkerAlt className="icon" /> Saint Paul, MN
      </p>
    </div>
  );
}

export default ContactMe;

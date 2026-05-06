import "./ContactMe.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function ContactMe() {
  return (
    <section className="contactme" id="contact">
      <h2 className="contactme__title">Get In Touch</h2>
      <p className="intro">
        I'm always open to discussing new opportunities, projects, or
        collaborations. Let's connect!
      </p>
      <div className="contactme__content">
        <div className="contactme__info">
          <div className="contactme__card">
            <div className="contactme__card-icon">
              <FaEnvelope size={24} />
            </div>
            <h3 className="contactme__card-title">Email</h3>
            <a href="mailto:sjama9660@gmail.com">sjama9660@gmail.com</a>
          </div>

          <div className="contactme__card">
            <div className="contactme__card-icon contactme__card-icon--linkedin">
              <FaLinkedin size={24} />
            </div>
            <h3 className="contactme__card-title">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/samsamjamahashi/"
              target="_blank"
              rel="noopener noreferrer"
              className="contactme__card-link"
            >
              /samsamjamahashi
            </a>
          </div>

          <div className="contactme__card">
            <div className="contactme__card-icon contactme__card-icon--github">
              <FaGithub size={24} />
            </div>
            <h3 className="contactme__card-title">GitHub</h3>
            <a
              href="https://github.com/Samjamhas10"
              target="_blank"
              rel="noopener noreferrer"
              className="contactme__card-link"
            >
              /Samjamhas10
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;

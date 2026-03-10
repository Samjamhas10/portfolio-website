import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <p className="footer__text">Built with React & Vite</p>
          <div className="footer__links">
            <a
              href="https://github.com/Samjamhas10"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/samsamjamahashi/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:sjama9660@gmail.com" className="footer__link">
              <FaEnvelope />
            </a>
          </div>
          <p className="footer__copyright">
            © {currentYear} Samsam Hashi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

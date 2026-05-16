import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import "./Footer.css";

const socialLinks = [
  {
    id: 1,
    href: "https://github.com/Samjamhas10",
    label: "GitHub Profile",
    icon: <FaGithub aria-hidden="true" />,
  },
  {
    id: 2,
    href: "https://www.linkedin.com/in/samsamjamahashi/",
    label: "LinkedIn Profile",
    icon: <FaLinkedin aria-hidden="true" />,
  },
  {
    id: 3,
    href: "mailto:sjama9660@gmail.com",
    label: "Send Email",
    icon: <FaEnvelope aria-hidden="true" />,
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" aria-labelledby="footer-heading">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <h2 id="footer-heading" className="footer__title">
              Samsam Jama Hashi
            </h2>

            <p className="footer__subtitle">
              Software Engineer focused on building clean, responsive, and
              accessible web experiences.
            </p>
          </div>

          <nav className="footer__socials" aria-label="Social media links">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="footer__social-link"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer__bottom">
          <div className="footer__nav">
            <a href="#aboutme" className="footer__nav-link">
              About Me
            </a>
            <a href="#projects" className="footer__nav-link">
              Projects
            </a>
            <a href="#contact" className="footer__nav-link">
              Contact
            </a>
          </div>
          <p className="footer__built">Built with React & Vite</p>
          <p className="footer__copyright">
            © {currentYear} Samsam Hashi. Made with{" "}
            <FaHeart className="footer__heart" aria-hidden="true" /> in
            Minnesota.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import "./ContactMe.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function ContactMe() {
  return (
    <section className="contactme" id="contact">
      <div className="contactme__container">
        <h2 className="contactme__title">Get In Touch</h2>
        <p className="contactme__subtitle">
          Have a project in mind or just want to chat? I'd love to hear from
          you!
        </p>
        <div className="contactme__content">
          <div className="contactme__info-card">
            <h3 className="contactme__info-title">Contact Information</h3>

            <div className="contactme__info-item">
              <div className="contactme__info-icon">
                <FaEnvelope />
              </div>
              <div className="contactme__info-text">
                <p className="contactme__info-label">Email</p>
                <a
                  href="mailto:sjama9660@gmail.com"
                  className="contactme__info-value"
                >
                  sjama9660@gmail.com
                </a>
              </div>
            </div>
            <div className="contactme__info-item">
              <div className="contactme__info-icon">
                <FaPhone />
              </div>
              <div className="contactme__info-text">
                <p className="contactme__info-label">Phone</p>
                <a href="tel:+1234567890" className="contactme__info-value">
                  +1 (651) 443-8589
                </a>
              </div>
            </div>
            <div className="contactme__info-item">
              <div className="contactme__info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contactme__info-text">
                <p className="contactme__info-label">Location</p>
                <p className="contactme__info-value">
                  Saint Paul, United States
                </p>
              </div>
            </div>
          </div>
          <div className="contactme__form-card">
            <form className="contactme__form">
              <div className="contactme__form-group">
                <label htmlFor="name" className="contactme__label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="contactme__input"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="contactme__form-group">
                <label htmlFor="email" className="contactme__label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="contactme__input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div className="contactme__form-group">
                <label htmlFor="message" className="contactme__label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="contactme__input contactme__textarea"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="contactme__submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;

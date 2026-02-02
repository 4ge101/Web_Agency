import { useNavigate } from "react-router-dom";
import "../styles/contact.css";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="contact-logo-container">
        <div className="contact-logo">
          <h1>AKESHA</h1>
        </div>
        <button className="back-home-btn" onClick={() => navigate("/")}>
          Back To Home
        </button>
      </div>

      <div className="contact-title-container">
        <div className="small-contact-title">
          <span>✨Get in Touch</span>
        </div>
        <div className="contact-title">
          <h1>
            Let's <span>Talk</span>
          </h1>
          <span className="contact-paragraph">
            Have a project in mind? We'd love to hear about it. Get in touch
            with our team and let's create something amazing together.
          </span>
        </div>
      </div>

      <section className="contact-section">
        {/* LEFT INFO */}
        <div className="contact-info">
          <h2>Contact Information</h2>

          <div className="info-item">
            <span className="icon purple">✉</span>
            <div>
              <h4>Email</h4>
              <p>hello@startagency.com</p>
              <small>We'll respond within 24 hours</small>
            </div>
          </div>

          <div className="info-item">
            <span className="icon cyan">📞</span>
            <div>
              <h4>Phone</h4>
              <p>+1 (234) 567-890</p>
              <small>Mon–Fri, 9am–6pm EST</small>
            </div>
          </div>

          <div className="info-item">
            <span className="icon pink">📍</span>
            <div>
              <h4>Office</h4>
              <p>123 Digital Avenue</p>
              <small>San Francisco, CA 94105</small>
            </div>
          </div>

          <div className="follow">
            <h4>Follow Us</h4>
            <div className="socials">
              <span>Twitter</span>
              <span>LinkedIn</span>
              <span>Instagram</span>
              <span>Dribbble</span>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form-box">
          <form>
            <div className="form-row">
              <div className="field">
                <label>Full Name *</label>
                <input placeholder="John Doe" />
              </div>
              <div className="field">
                <label>Email Address *</label>
                <input placeholder="john@example.com" />
              </div>
            </div>

            <div className="form-row">
              <div className="field">
                <label>Phone Number</label>
                <input placeholder="+1 (234) 567-890" />
              </div>
              <div className="field">
                <label>Company Name</label>
                <input placeholder="Your Company" />
              </div>
            </div>

            <div className="field field2">
              <label>Service Interested In *</label>
              <select>
                <option>Web Development</option>
                <option>UI/UX Design</option>
                <option>Brand Identity</option>
                <option>Other</option>
              </select>
            </div>

            <div className="field field2">
              <label>Message *</label>
              <textarea placeholder="Tell us about your project..." />
            </div>

            <button className="send-btn">
              Send Message{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="30"
                height="30"
                color="#ffffff"
                fill="none"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18.5 12L4.99997 12" />
                <path d="M13 18C13 18 19 13.5811 19 12C19 10.4188 13 6 13 6" />
              </svg>
            </button>

            <p className="note">We'll get back to you within 24 hours</p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;

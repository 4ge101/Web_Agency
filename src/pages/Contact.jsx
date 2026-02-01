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

      <div className="contact-form-container">
        <div className="contact-form">
          <form>
            <div className="email-text">
              <label htmlFor="text">Full Name*</label>
              <input type="text" name="text" placeholder="John Doe" />

              <label htmlFor="mail">Email Address*</label>
              <input type="email" name="mail" placeholder="john@examples.com" />
            </div>
            <div className="number-company">
              <label htmlFor="number">Phone Number</label>
              <input type="number" name="number" placeholder="+1 (1234) 567-890" />

              <label htmlFor="company-name">Company Name</label>
              <input type="text" name="company-name" placeholder="Your Company" />
            </div>

          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

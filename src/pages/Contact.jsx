import { useNavigate } from "react-router-dom";
import "../styles/contact.css";
import Footer from "../components/Footer";

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
        <div className="contact-info">
          <h1>Contact Information</h1>

          <div className="info-item">
            <span className="icon purple">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
                color="#8d18ff"
                fill="none"
                stroke="#8d18ff"
                stroke-width="1.5"
                stroke-linejoin="round"
              >
                <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" />
                <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" />
              </svg>
            </span>
            <div>
              <h4>Email</h4>
              <p>hello@startagency.com</p>
              <small>We'll respond within 24 hours</small>
            </div>
          </div>

          <div className="info-item">
            <span className="icon cyan">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
                color="#07c1ff"
                fill="none"
                stroke="#07c1ff"
                stroke-width="1.5"
                stroke-linecap="round"
              >
                <path d="M9.1585 5.71217L8.75584 4.80619C8.49256 4.21382 8.36092 3.91762 8.16405 3.69095C7.91732 3.40688 7.59571 3.19788 7.23592 3.08779C6.94883 2.99994 6.6247 2.99994 5.97645 2.99994C5.02815 2.99994 4.554 2.99994 4.15597 3.18223C3.68711 3.39696 3.26368 3.86322 3.09497 4.35054C2.95175 4.76423 2.99278 5.18937 3.07482 6.03964C3.94815 15.0901 8.91006 20.052 17.9605 20.9254C18.8108 21.0074 19.236 21.0484 19.6496 20.9052C20.137 20.7365 20.6032 20.3131 20.818 19.8442C21.0002 19.4462 21.0002 18.972 21.0002 18.0237C21.0002 17.3755 21.0002 17.0514 20.9124 16.7643C20.8023 16.4045 20.5933 16.0829 20.3092 15.8361C20.0826 15.6393 19.7864 15.5076 19.194 15.2443L18.288 14.8417C17.6465 14.5566 17.3257 14.414 16.9998 14.383C16.6878 14.3533 16.3733 14.3971 16.0813 14.5108C15.7762 14.6296 15.5066 14.8543 14.9672 15.3038C14.4304 15.7511 14.162 15.9748 13.834 16.0946C13.5432 16.2009 13.1588 16.2402 12.8526 16.1951C12.5071 16.1442 12.2426 16.0028 11.7135 15.7201C10.0675 14.8404 9.15977 13.9327 8.28011 12.2867C7.99738 11.7576 7.85602 11.4931 7.80511 11.1476C7.75998 10.8414 7.79932 10.457 7.90554 10.1662C8.02536 9.83822 8.24905 9.5698 8.69643 9.03294C9.14586 8.49362 9.37058 8.22396 9.48939 7.91885C9.60309 7.62688 9.64686 7.31234 9.61719 7.00042C9.58618 6.67446 9.44362 6.3537 9.1585 5.71217Z" />
              </svg>
            </span>
            <div>
              <h4>Phone</h4>
              <p>+1 (234) 567-890</p>
              <small>Mon–Fri, 9am–6pm EST</small>
            </div>
          </div>

          <div className="info-item">
            <span className="icon pink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
                color="#e927dc"
                fill="none"
                stroke="#e927dc"
                stroke-width="1.5"
              >
                <path d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z" />
                <path d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z" />
              </svg>
            </span>
            <div>
              <h4>Office</h4>
              <p>123 Digital Avenue</p>
              <small>San Francisco, CA 94105</small>
            </div>
          </div>

          <div className="follow">
            <h2>Follow Us</h2>
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
      <Footer />
    </>
  );
};

export default Contact;

import { Link } from "react-router-dom";
import "../styles/footer.css";
import Logo from '../assets/logo.png'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <footer>
          <div className="footer-column">
            <div className="footer-logo">
              <img src={Logo} alt="footer logo" />
            </div>
            <div className="footer-profile">
              <a href="https://x.com/sami72982704">Twitter</a>
              <a href="https://www.linkedin.com/in/sami-ali-548272319/">Linkdein</a>
              <a href="https://www.instagram.com/ig_samiali/">Instagram</a>
              <a href="https://www.youtube.com/@who_is_sami">YouTube</a>
            </div>
          </div>
          <div className="copy-right">
            <p>
              © 2026 Eshal Agency. Crafting digital experiences that inspire. Made by <a href="https://AlixSami.com/">Mohammad Sami Ali</a>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;

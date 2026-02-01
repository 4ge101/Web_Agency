import { NavLink, useLocation } from "react-router-dom";
import "../styles/nav.css";

const Navbar = () => {
  const location = useLocation();

  if (location.pathname === "/contact") {
    return null;
  }

  return (
    <nav>
      <div className="logo">
        <p>AKESHA</p>
      </div>

      <div className="navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      <div className="contact-btn">
        <button>Let's Talk</button>
      </div>
    </nav>
  );
};

export default Navbar;

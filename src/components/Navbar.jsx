import { NavLink, useLocation } from "react-router-dom";
import "../styles/nav.css";
import BubbleMenu from "../components/BubbleMenu";

const Navbar = () => {
  const location = useLocation();

  // hide navbar on contact page
  if (location.pathname === "/contact") {
    return null;
  }

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/aboutteam" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <nav>
      <div className="logo">
        <p>AKESHA</p>
      </div>

      <div className="navigation">
        {navItems.map((item, i) => (
          <NavLink key={i} to={item.to}>
            {item.label}
          </NavLink>
        ))}
      </div>

      <div className="contact-btn">
        <button>Let's Talk</button>
      </div>

      <div className="mobile-nav">
        <BubbleMenu items={navItems} />
      </div>
    </nav>
  );
};

export default Navbar;

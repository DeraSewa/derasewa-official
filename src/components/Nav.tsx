import React from "react";
import "../styles/Nav.css";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  const [secondRow, setSecondRow] = React.useState(false);

  const handleLinkClick = () => {
    setSecondRow(false);
  };

  return (
    <div className="nav-container">
      <div className="first-row">
        <Link to={"/"}><div className="logo">DERA<span>SEWA</span></div></Link>
        <div className="menu" onClick={() => setSecondRow(!secondRow)}>
          { secondRow ? <i className="fa-solid fa-xmark"></i> : <i className="ri-menu-3-fill"></i> }
        </div>
        <div className="links">
          <Link to={"/about-us"}>ABOUT US</Link>
          <Link to={"/contact-us"}>CONTACT US</Link>
        </div>
      </div>
      { secondRow && 
        <div className="second-row">
          <Link to={"/about-us"} onClick={handleLinkClick}>About Us</Link>
          <Link to={"/contact-us"} onClick={handleLinkClick}>Contact Us</Link>
          <Link to={"/term-condition"} onClick={handleLinkClick}>Terms and Condition</Link>
          <Link to={"/privacy-policy"} onClick={handleLinkClick}>Privacy and Policy</Link>
          <Link to={"/help-support"} onClick={handleLinkClick}>Help and Support</Link>
          <Link to={"/faq"} onClick={handleLinkClick}>FAQs</Link>
        </div>
      }
    </div>
  )
}

export default Nav;

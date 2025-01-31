import "../styles/Nav.css";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <div className="nav-container">
        <div className="logo">DERA<span>SEWA</span></div>
        <div className="links">
            <Link to={"/about-us"}>About us</Link>
            <Link to={"/contact-us"}>Contact us</Link>
        </div>
    </div>
  )
}

export default Nav;
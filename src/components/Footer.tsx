import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
        <div className="logo">DERA<span>SEWA</span></div>
        <div className="links">
            <Link to={""}>Terms and Condition</Link>
            <Link to={""}>Privacy policy</Link>
            <Link to={""}>Help and support</Link>
            <Link to={""}>FAQs</Link>
        </div>
        <div className="socials">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-github"></i>
        <i className="fa-brands fa-linkedin"></i>
        </div>
    </div>
  )
}

export default Footer;
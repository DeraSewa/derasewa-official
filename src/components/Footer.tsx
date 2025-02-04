import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <div className="logo"><Link to={"/"}>DERA<span>SEWA</span></Link></div>
      <div className="links">
        <Link to={"/term-and-condition"}>Terms and Condition</Link>
        <Link to={"/privacy-and-policy"}>Privacy and Policy</Link>
        <Link to={"/help-and-support"}>Help and Support</Link>
        <Link to={"/faq"}>FAQs</Link>
      </div>
      <div className="socials">
        <a href="https://facebook.com/derasewaofficial"><i className="fa-brands fa-facebook"></i></a>
        <a href="https://github.com/derasewa"><i className="fa-brands fa-github"></i></a>
        <a href="https://linkedin.com/derasewa"><i className="fa-brands fa-linkedin"></i></a>
      </div>
    </div>
  )
}

export default Footer;
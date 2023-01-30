import "./Footer.css";
import logo from "../../assets/bannerFooter.png";

function Footer() {
  // récupération de l'année en cours
  const actualYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="footer-rights">
          <p>&copy; {actualYear} Kasa. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

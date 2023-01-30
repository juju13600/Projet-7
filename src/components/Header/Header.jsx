import logo from "../../assets/LOGO.png";
import { NavLink } from "react-router-dom";

import "./Header.css";
function Header() {
  return (
    <nav className="nav">
      <NavLink to="/">
        <img src={logo} alt="Logo" className="nav__img" />
      </NavLink>
      {/* menu de navigation*/}
      <div>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav__link active" : "nav__link"
          }
          to="/"
        >
          Accueil
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav__link active" : "nav__link"
          }
          to="/about"
        >
          À Propos
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;

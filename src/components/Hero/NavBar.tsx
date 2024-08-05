import "./NavBar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navbar-container">
      <span className="navbar-tittle kodchasan-regular">NFC Studio</span>
      <nav className="navbar-nav">
        <Link to={""} className="navbar-link raleway-400">
          TECNOLOGÍA
        </Link>
        <Link to={""} className="navbar-link raleway-400">
          PRODUCTOS
        </Link>
        <Link to={""} className="navbar-link raleway-400">
          CONTACTO
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;

import "./index.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header__nav">
      <div className="header__contenido">
        <h3>Hackeros</h3>
      </div>

      <div className="header__contenido">
        <nav id="nav">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

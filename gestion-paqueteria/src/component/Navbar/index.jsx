import "./index.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header__nav">
      <div className="between">
        <Link to="/">
          <h1 className="font">NextAuth</h1>
        </Link>

        <ul className="flex">
          <li className="paddin">
            <Link to="/login">Login</Link>
          </li>
          <li className="paddin">
            <Link to="/register">Registro</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

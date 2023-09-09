import { Link } from "react-router-dom";
import "./index.scss";

const Register = () => {
  return (
    <form className="register">
      <div className="container">
        <h1>Create account</h1>
        <div className="container__input-field">
          <input type="text" name="name" className="container__input" />
          <label>Nombre:</label>
        </div>

        <div className="container__input-field">
          <input type="text" name="email" className="container__input" />
          <label>Email:</label>
        </div>

        <div className="container__input-field">
          <input type="password" className="container__input" />
          <label>Contraseña:</label>
        </div>

        <div className="axel">
          <button className="axel__submit" type="submit">
            Registrarse
          </button>

          <div className="endo">
            <p>
              ¿Ya tienes una Cuenta?
              <Link className="endo__enlace" to="/login">
                {" "}
                Inicia sesion con tu cuenta!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;

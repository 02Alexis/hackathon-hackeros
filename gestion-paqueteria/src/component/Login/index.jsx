import { Link } from "react-router-dom";
import "./index.scss";

const Login = () => {
  return (
    <form className="form">
      <div className="form__input-box">
        <h1>Iniciar sesion</h1>
        <div className="form__input-field">
          <input type="text" name="email" className="form__input" />
          <label htmlFor="email">Email:</label>
        </div>

        <div className="form__input-field">
          <input type="password" name="password" className="form__input" />
          <label htmlFor="password">Contraseña:</label>
        </div>

        <div className="action">
          <button className="action__submit" type="submit">
            ingresar
          </button>

          <div className="sigin">
            <p>
              ¿No tienes una Cuenta?
              <Link className="sigin__enlace" to="/register">
                Haz click aqui!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;

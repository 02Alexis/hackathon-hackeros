import { Link } from "react-router-dom";
import Delivery from "../../assets/serice.png";
import Navbar from "../Navbar";
import "./index.scss";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <h1>Delivery Service</h1>
        <p>
          Hackheros te ofrece una mayor seguridad al enviar y entregar tus
          paquetes
        </p>
        <Link to='/sent-form'><button>Hacer entrega</button></Link>
        <img src={Delivery} alt="Imagen de entrega" />
      </div>
    </>
  );
};

export default HomePage;

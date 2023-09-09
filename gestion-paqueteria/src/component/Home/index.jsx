import Delivery from "../../assets/serice.png";
import "./index.scss";

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Delivery Service</h1>
      <p>
        Hackheros te ofrece una mayor seguridad al enviar y entregar tus
        paquetes
      </p>
      <button>Hacer entrega</button>
      <img src={Delivery} alt="Imagen de entrega" />
    </div>
  );
};

export default HomePage;

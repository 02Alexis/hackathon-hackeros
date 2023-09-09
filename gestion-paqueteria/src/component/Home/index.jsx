import Delivery from "../../assets/serice.png";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import "./index.scss";

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/sent-form");
  };

  return (
    <>
      <Navbar />
      <div className="home-container">
        <h1>Delivery Service</h1>
        <p>
          Hackheros te ofrece una mayor seguridad al enviar y entregar tus
          paquetes
        </p>
        <button onClick={handleClick}>Hacer entrega</button>
        <img src={Delivery} alt="Imagen de entrega" />
      </div>
    </>
  );
};

export default HomePage;

import { Route, Routes } from "react-router-dom";
import Navbar from "../Navbar";
import Login from "../Login";
import Register from "../Register";
import HomePage from "../Home";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;

import { Route, Routes } from "react-router-dom";
import Login from "../Login";
import Register from "../Register";
import HomePage from "../Home";
import SentForm from "../../pages/SentForm";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="sent-form" element={<SentForm />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;

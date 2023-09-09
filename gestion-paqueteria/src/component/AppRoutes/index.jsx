import { Route, Routes } from 'react-router-dom'
import SentForm from '../../pages/SentForm'
import Login from "../Login";
import Register from "../Register";
import HomePage from "../Home";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='sent-form' element={<SentForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;

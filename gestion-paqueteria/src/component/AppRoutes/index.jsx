<<<<<<< HEAD
import { Route, Routes } from 'react-router-dom'
import SentForm from '../../pages/SentForm'
import Login from "../Login";
import Register from "../Register";
import HomePage from "../Home";
=======
import { Route, Routes } from "react-router-dom";
import Login from "../Login";
import Register from "../Register";
import HomePage from "../Home";
import SentForm from "../../pages/SentForm";
>>>>>>> 6af18aa965795cb4d4615f5a9ea94d103d6b7557

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='sent-form' element={<SentForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
<<<<<<< HEAD
=======
        <Route path="sent-form" element={<SentForm />} />
>>>>>>> 6af18aa965795cb4d4615f5a9ea94d103d6b7557
      </Routes>
    </div>
  );
};

export default AppRoutes;

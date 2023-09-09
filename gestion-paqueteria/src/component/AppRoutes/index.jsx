import { Route, Routes } from 'react-router-dom'
import Navbar from '../Navbar'
import SentForm from '../../pages/SentForm'

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route path='sent-form' element={<SentForm />} />
      </Routes>
    </div>
  )
}

export default AppRoutes

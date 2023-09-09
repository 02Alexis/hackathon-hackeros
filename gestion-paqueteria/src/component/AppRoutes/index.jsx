import { Route, Routes } from 'react-router-dom'
import Navbar from '../Navbar'

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar />} />
      </Routes>
    </div>
  )
}

export default AppRoutes

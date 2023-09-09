import { BrowserRouter } from 'react-router-dom'
import AppRoutes from '../AppRoutes'
import './App.scss'

function App() {


  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App

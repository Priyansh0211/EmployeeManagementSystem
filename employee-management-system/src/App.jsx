

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Employees from './pages/Employees'
import { ToastContainer } from 'react-toastify'
import Department from './pages/Department'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/employees' element={<Employees/>} />
      <Route path='/department' element={<Department />}/>
    </Routes>

    <ToastContainer position="top-right" autoClose={3000} theme="dark"/>
    </>
  )
}

export default App

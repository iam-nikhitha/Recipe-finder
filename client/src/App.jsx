
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Home from './Components/Home'
import ForgotPassword from './Components/ForgotPassword'
import ResetPassword from './Components/ResetPassword'
import Dashboard from './Components/Dashboard'
import { useEffect, useState } from 'react'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Assuming authentication status is stored in localStorage or a similar mechanism
    const token = localStorage.getItem('token')
    if (token) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />
        <Route path='/resetPassword/:token' element={<ResetPassword />} />
        <Route path='/dashboard' element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

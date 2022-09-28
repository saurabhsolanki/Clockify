import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar/Navbar'

const Login = () => {
  return (
    <>
    <Navbar/>
    <Link to="/login">
    <div>Login</div>
    </Link>
    
    </>
  )
}

export default Login
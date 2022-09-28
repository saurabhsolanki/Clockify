import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar/Navbar'

const Features = () => {
  return (
    <>
    <Navbar/>
    <Link to="/features">
    <div>Features</div>
    </Link>
    </>
  )
}

export default Features
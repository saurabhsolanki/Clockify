import { Img } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false)
  return (
    <nav className='navbar'>
    <h3 className="logo">
        <Img src='https://clockify.me/assets/images/clockify-logo.svg' />
    </h3>
    <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
    onClick={() => setIsMobile(false)}
    >
     <Link to="/features" className='home'>
        <li>Features</li>
     </Link>
     <Link to="/download" className='about'>
        <li>DownLoad</li>
     </Link>
     <Link to="/login" className='skills'>
        <li>Log In</li>
     </Link>
     
     <Link to="/signup" className='signup'>
        <li >Sign up Free</li>
     </Link>
    </ul>
    <button className='mobile-menu-icon'
    onClick={() => setIsMobile(!isMobile)}
    >
        {
            isMobile ? (
                <i className='fas fa-times'></i>
            ): (
                <i className='fas fa-bars'></i>
            )
        }
    </button>
    </nav>
  )
}

export default Navbar
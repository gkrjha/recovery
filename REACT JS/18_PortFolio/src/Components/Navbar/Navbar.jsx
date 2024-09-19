import React from 'react'
import logo from './logo.png'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
    <div className='navbar'>
      <div className="logo">
        <img src={logo} alt="log" />
      </div>
      <div className="navbar-components">
        <ul>
          <li>HOME</li>
          <li>SKILLS</li>
          <li>WORKS</li>
          <li>CONTACT</li>
          <li>RESUME</li>
        </ul>
      </div>
      <div className="navbar-button">
        <button>HIRE ME</button>
      </div>
    </div>
    <div>
    I m Gaurav kumar Jha
  </div>
  </>
  )
}

export default Navbar

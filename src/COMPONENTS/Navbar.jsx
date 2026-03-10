import React from 'react'
import '../Styles/Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <div className="left-nav">
            <a href="/" className='name'>Syed <br />Siddiq.</a>
        </div>
        <div className="right-nav">
            <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/skills'>Skills</NavLink></li>
            <li><NavLink to='/projects'>Project</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
            {/* <li ><a className="theme-toggle">🌙</a></li> */}
        </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar
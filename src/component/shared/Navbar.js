import React from 'react'
import './Navbar.css'
// import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
      <h1>Sahar Shatah</h1>
      <ul>
        {/* <li><Link to='/'>Home</Link></li>
            <li><Link to='/Projects'>Projects</Link></li> */}
        <li>Home</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Contact us</li>
      </ul>
    </nav>
  )
}

export default Navbar
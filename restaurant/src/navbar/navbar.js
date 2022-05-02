import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <h2>Logo</h2>
        <ul className='navitems'>
            <div className='mar'><Link to='/'>Home</Link></div>
            <div className='mar'><Link to='/about'>About Us</Link></div>
            <div className='mar'><Link to='/products'>Products</Link></div>
            <div className='mar'><Link to='/contact'>Contact</Link></div>
        </ul>
    </nav>
  )
}

export default Navbar
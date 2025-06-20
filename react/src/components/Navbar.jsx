import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; 


const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='nav-list'>
        <li className='Link'><Link to="/">Home</Link></li>
        <li className='Link'><Link to="/about">About</Link></li>
        <li className='Link'><Link to="/skills">Skills</Link></li>
        <li className='Link'><Link to="/contact">Contact</Link></li>
        <li className='Link'><Link to="/login">Login</Link></li>
        <li className='Link'><Link to="/counter">Counter</Link></li>
        <li><Link className="Link" to="/hooks">Hooks</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
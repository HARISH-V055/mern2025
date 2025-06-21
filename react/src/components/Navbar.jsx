import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; 


const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='nav-list'>
        <li><Link className='Link' to="/">Home</Link></li>
        <li><Link className='Link' to="/about">About</Link></li>
        <li><Link className='Link' to="/contact">Contact</Link></li>
        <li><Link className='Link' to="/skills">Skills</Link></li>
        <li><Link className='Link' to="/child">Child</Link></li>
        <li><Link className='Link' to="/login">Login</Link></li>  
        <li> <Link className='Link' to="/counter">Counter</Link></li>
        <li><Link className="Link" to="/hooks">Hooks</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.svg';

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Planet logo" className="navbar-logo" />
     
    </nav>
  );
}

export default Navbar;
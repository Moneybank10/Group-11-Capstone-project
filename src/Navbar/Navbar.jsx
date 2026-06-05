import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.svg';

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Planet logo" className="navbar-logo" />
      <div className="navbar-links">
        <a href="#explore" className="btn-primary">Explore the Data</a>
        <a href="#contact" className="btn-outline">Contact Us</a>
      </div>
    </nav>
  );
}

export default Navbar;
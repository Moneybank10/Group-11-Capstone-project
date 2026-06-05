import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
        <div className='navBarLogo'>
            <img src="" alt="" />
        </div>
      <div className='flex'>
        <div className='bar'>
        <div className='barWords'>
            <h1> Explore Our Solar System Through Data</h1>
            <h6>Understand the planets not just by name, but by measurable facts. From size and mass to gravity and density, this page breaks down the solar system in a clear, data-driven way.</h6>
        </div>
        <div className="navbar-links">
        <a href="#explore" className="btn-primary">Explore the Data</a>
        <a href="#contact" className="btn-outline">Contact Us</a>
      </div>
      </div>
      <div className='image'>
        
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
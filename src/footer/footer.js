import React from 'react';
import './footer.css';

function footer() {
  return (
    <footer className="footer">
      <div className="footer-about">
        <h3>About</h3>
        <p>We are Group 11 - Taofeek, Favour, King, Daniel, Michael, Emmy, Debby, Nanu, Amidat and Precious.</p>
      </div>
      <div className="footer-columns">
        <div className="footer-col">
          <ul>
            <li><a href="https://amakandukwu.com/" target="_blank" rel="noreferrer">Amaka</a></li>
            <li><a href="https://www.linkedin.com/in/ifeomaokocha" target="_blank" rel="noreferrer">Ifeoma</a></li>
            <li><a href="https://tsacademyonline.com/" target="_blank" rel="noreferrer">TSacademy</a></li>
            <li><a href="https://github.com/Moneybank10/Group-11-Capstone-project" target="_blank" rel="noreferrer">Group 11</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#explore">Planetary Facts</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Contact</h3>
          <p>Have questions? <a href="#contact">Send us a message</a></p>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>©️2026 Design by <a href="https://amakandukwu.com/" target="_blank" rel="noreferrer">Amaka</a> & <a href="https://www.linkedin.com/in/ifeomaokocha" target="_blank" rel="noreferrer">Ifeoma</a> A. Built by <a href="https://github.com/Moneybank10/Group-11-Capstone-project" target="_blank" rel="noreferrer">Group 11</a>. All rights reserved.</p>
        <a href="https://tsacademyonline.com/" target="_blank" rel="noreferrer">TSAcademy</a>
      </div>
    </footer>
  );
}

export default footer;
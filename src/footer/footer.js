import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-columns">

        <div className="footer-col">
          <h3>About Us</h3>
          <p>We are Group 11, a team of passionate frontend developers built by Taofeek, Favour, King, Daniel, Michael, Emmy and Precious. Together we explore our solar system through data.</p>
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
        <p>©2025 Group 11 Capstone Project. All rights reserved.</p>
        <p>
          <a href="/privacy">Privacy &amp; Policy</a>
          &nbsp;|&nbsp;
          <a href="/terms">Terms &amp; Conditions</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
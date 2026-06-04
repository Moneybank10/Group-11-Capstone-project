import React from 'react';
import './video-section.css';
import video from '../assets/solar-system.mp4';

function VideoSection() {
  return (
    <section className="video-section">
      <div className="video-container">
        <video autoPlay muted loop controls>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="video-text">
        <h2>How Planetary Data Helps Us Understand Space</h2>
        <p>Planetary science goes beyond images. Comparing <strong className="highlight">mass</strong>, <strong className="highlight">diameter</strong>, <strong className="highlight">gravity</strong> and <strong className="highlight">density</strong>, we gain insight into how planets form, behave, and interact within the solar system.</p>
      </div>
    </section>
  );
}

export default VideoSection;
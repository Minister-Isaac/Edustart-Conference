import React from 'react';
import './HeroSection.css';
import backgroundVideo from './assets/conference-background.mp4';


const HeroSection = () => {
  return (
    <div className="hero-container">
      <video className="background-video" autoPlay muted loop>
      <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">What’s Next Conference</h1>
        <p className="hero-subtitle">
          Navigating Career & Tech Opportunities For High School Students
        </p>
        <div className="hero-buttons">
          <button className="register-btn">Register Now</button>
          <button className="learn-btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

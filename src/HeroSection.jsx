import React from 'react';
import './HeroSection.css';
import backgroundVideo from './assets/conference-background.mp4';

const HeroSection = () => {
  const handleLearnMoreClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          Navigating Career & Tech Opportunities For High<br /> School Students
        </p>
        <div className="hero-buttons">
          {/* Updated Register Now Button */}
          <a
            href="https://www.eventbrite.com/e/whats-next-conference-tickets-1335387703569?aff=oddtdtcreator"
            className="register-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register Now
          </a>
          <button className="learn-btn" onClick={handleLearnMoreClick}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

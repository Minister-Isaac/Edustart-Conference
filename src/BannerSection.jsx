import React from 'react';
import './BannerSection.css';
import image6 from './assets/women-s-panel-discussion.png'

const BannerSection = () => {
  return (
    <section className="banner-section">
      <img
        src= {image6}
        alt="Conference Speakers Panel"
        className="banner-image"
      />
    </section>
  );
};

export default BannerSection;

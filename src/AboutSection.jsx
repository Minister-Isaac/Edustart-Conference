import React from "react";
import "./AboutSection.css";
import imageMain from './assets/Rectangle 4488.png';
import imageOverlay from './assets/Rectangle 4489.png';
import { FaCheckCircle } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section id="about" className="about-section"> {/* Added id here */}
      <div className="about-images">
        <div className="main-image">
          <img src={imageMain} alt="Main" />
          <div className="overlay-image">
            <img src={imageOverlay} alt="Overlay" />
          </div>
        </div>
      </div>
      <div className="about-text">
        <h2>About</h2>
        <p className="about-subtitle">
          The What’s Next Conference aims to provide high school students with
          insight into the world of career options, the major trends shaping the
          future, and how they can prepare themselves for success in both
          traditional and emerging fields.
        </p>
        <p>
          With a particular focus on technology, innovation, and global trends,
          this event will bring together industry professionals, educators, and
          thought leaders to equip students with the knowledge and inspiration
          they need to shape their future careers.
        </p>
        <ul className="about-points">
          <li><FaCheckCircle className="icon" /> Encourage critical thinking</li>
          <li><FaCheckCircle className="icon" /> Develop future-ready skills</li>
          <li><FaCheckCircle className="icon" /> Foster adaptability</li>
          <li><FaCheckCircle className="icon" /> Inspire awareness</li>
        </ul>
        <button className="ticket-btn">Get your ticket!</button>
      </div>
    </section>
  );
};

export default AboutSection;

import React, { useState } from 'react';
import './Navbar.css';
import logo from './assets/Rectangle 11.png';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Edustart Logo" className="logo-img" />
      </div>

      {/* Desktop Nav Links */}
      <ul className="nav-links desktop-only">
        <li><a href="#about">About</a></li>
        <li><a href="#agenda">Agenda</a></li>
        <li><a href="#speakers">Speakers</a></li>
        <li><a href="#get-involved">Get Involved</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>

      <div className="cta-menu-container">
        <a href="#tickets" className="get-tickets desktop-only">Get Tickets</a>

        {/* Mobile Menu Toggle */}
        <button className="menu-toggle mobile-only" onClick={toggleMenu}>
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Nav Links */}
      {isMobileMenuOpen && (
        <ul className="nav-links mobile-menu">
          <li><a href="#about">About</a></li>
          <li><a href="#agenda">Agenda</a></li>
          <li><a href="#speakers">Speakers</a></li>
          <li><a href="#get-involved">Get Involved</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#tickets" className="get-tickets">Get Tickets</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

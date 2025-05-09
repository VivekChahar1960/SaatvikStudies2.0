import React from 'react';
import HeroImg from '../../assets/HeroSectionImg.png';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <h1>Welcome <br/>to <span>Saatvik Studies</span></h1>
        <p>Your ultimate resource for NCERT books, notes, solutions, and mock tests</p>
        <button className="get-started-btn">Get Started</button>
      </div>
      <div className="hero-right">
        <img src={HeroImg} alt="Hero" />
      </div>
    </div>
  );
};

export default HeroSection;

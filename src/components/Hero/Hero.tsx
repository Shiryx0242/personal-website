import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <p className="hero-tagline">Welcome to My personal website</p>
        <h1 className="hero-name text-gradient">
          Witthawat<br />Sim-ngam
        </h1>
        <h2 className="hero-roles">
          Computer Science Student, Web Developer, UI/UX Designer
        </h2>
      </div>
    </section>
  );
};

export default Hero;

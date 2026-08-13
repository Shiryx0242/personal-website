import React from 'react';
import './About.css';
import profileImg from '../../assets/profile.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-card">
        <div className="about-image-column">
          <img src={profileImg} alt="Profile" className="about-profile-img" />
        </div>
        
        <div className="about-content-column">
          <span className="about-label">ABOUT ME</span>
          
          <div className="about-text-wrapper">
            <p className="about-main-text">
              Passionate about full-stack development. Eager to apply my skills in web technologies, clean database management, and UI design to real-world projects while continuing to grow as a developer.
            </p>
            <p className="about-main-text">
              Currently, I'm focused on full-stack web development and creating user-centric interfaces that are both beautiful and functional.
            </p>
          </div>
          
          <div className="about-sub-text">
            <p>
              Currently, I'm a Computer Science Student at <span className="rmutsb-text">@RMUTSB</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

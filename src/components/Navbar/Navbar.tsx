import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference on load
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'resume', 'projects'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the element is near the top of the viewport
          if (rect.top <= 150) {
            current = section;
          }
        }
      }
      
      // If we are at the very top, clear active to show no active section or set it to 'hero'
      if (window.scrollY < 200) {
        current = '';
      }
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Brand Area */}
        <a 
          href="#" 
          className="navbar-brand"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img src="/favicon.png" alt="Logo" className="brand-logo" />
          <span className="brand-name text-gradient">Witthawat</span>
        </a>

        {/* Links Area */}
        <ul className="navbar-links">
          <li><a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About</a></li>
          <li><a href="#resume" className={`nav-link ${activeSection === 'resume' ? 'active' : ''}`}>Experience</a></li>
          <li><a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a></li>
        </ul>

        {/* Actions */}
        <div className="navbar-actions">
          <div className="divider"></div>
          
          <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

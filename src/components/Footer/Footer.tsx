import React from 'react';
import { Mail, Send } from 'lucide-react';
import './Footer.css';

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        <div className="footer-top">
          <h2 className="footer-name">Witthawat Sim-ngam</h2>
          <p className="footer-subtitle">Computer Science • Thailand</p>
          
          <div className="footer-socials">
            <a href="https://github.com/Shiryx0242" target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub">
              <GithubIcon size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">
              <LinkedinIcon size={20} />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=disconectx123@gmail.com" target="_blank" rel="noreferrer" className="social-btn" aria-label="Email">
              <Mail size={20} />
            </a>
            <a href="https://t.me/" target="_blank" rel="noreferrer" className="social-btn" aria-label="Telegram">
              <Send size={20} />
            </a>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <a href="#resume" className="footer-resume-link">Full Resume</a>
          
          <p className="footer-copyright">
            © {new Date().getFullYear()} Witthawat Sim-ngam. Designed and built with React.
          </p>
          
          <p className="footer-tags">
            Official personal website • Computer Science • Web Development • UI/UX Design
          </p>
          
          <p className="footer-updated">
            Last updated: {new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import './Projects.css';
import project1Img from '../../assets/project1.png';
import project2Img from '../../assets/project2.png';
import project3Img from '../../assets/project3.png';
import project4Img from '../../assets/project4.png';
import project5Img from '../../assets/project5.png';
import project6Img from '../../assets/project6.png';

interface ProjectLink {
  text: string;
  url: string;
}

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image?: string;
  links?: ProjectLink[];
}

const dummyProjects: ProjectItem[] = [
  {
    id: '01',
    title: 'Personal Website',
    description: 'My personal portfolio website built with React, showcasing modern design principles and responsive layouts.',
    image: project1Img,
  },
  {
    id: '02',
    title: 'Wisely Studio Shop',
    description: 'A mini-project simulating a modern clothing store website to demonstrate e-commerce web development and UI design fundamentals.',
    image: project2Img,
  },
  {
    id: '03',
    title: 'Web-based IDS (Final Project)',
    description: 'Developed a web-based Intrusion Detection System (IDS) using Python and machine learning to detect and analyze potentially malicious web requests. The project includes log generation, payload analysis, model training, and a web interface for monitoring security events.',
    image: project3Img,
  },
  {
    id: '04',
    title: 'Thai Coin Detection',
    description: 'A computer vision mini-project using machine learning to detect and classify Thai coins (1, 5, 10 Baht) from images. It calculates the total value automatically with high confidence.',
    image: project6Img,
  },
  {
    id: '05',
    title: 'Wisly Shop Mobile UI/UX',
    description: 'A comprehensive UI/UX design mini-project for a mobile e-commerce clothing app. It features a modern, clean, and user-friendly interface covering essential screens from product browsing to checkout.',
    image: project4Img,
  },
  {
    id: '06',
    title: 'App Design (Figma)',
    description: 'A UI/UX design mini-project created in Figma for a healthcare mobile application. The design encompasses user registration, doctor browsing, and appointment booking flows with a clean, medical-themed aesthetic.',
    image: project5Img,
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-curved-bg"></div>
      
      <div className="projects-content">
        <div className="projects-header">
          <span className="projects-label">MY WORK</span>
          <h2 className="projects-main-text text-gradient">Portfolio Showcase</h2>
        </div>

        <div className="projects-grid">
          {dummyProjects.map((project) => (
            <div className="project-card" key={project.id}>
              {project.image && (
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} className="project-image" />
                </div>
              )}
              <div className="project-number">{project.id}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              {project.links && project.links.length > 0 && (
                <div className="project-links">
                  {project.links.map((link, idx) => (
                    <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                      {link.text}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

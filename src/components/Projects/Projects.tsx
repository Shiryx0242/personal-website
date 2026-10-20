import React from 'react';
import './Projects.css';
import project1Img from '../../assets/project1.png';
import project2Img from '../../assets/project2.png';
import project3Img from '../../assets/project3.png';
import project4Img from '../../assets/project4.png';
import project5Img from '../../assets/project5.png';
import project6Img from '../../assets/project6.png';

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image?: string;
  techStack?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const dummyProjects: ProjectItem[] = [
  {
    id: '01',
    title: 'Personal Website',
    description: 'My personal portfolio website built with React, showcasing modern design principles and responsive layouts.',
    image: project1Img,
    techStack: ['React', 'TypeScript', 'Vite', 'CSS3'],
    liveUrl: 'https://personal-website-witthawat.vercel.app/',
    githubUrl: 'https://github.com/Shiryx0242/personal-website',
  },
  {
    id: '02',
    title: 'Wisely Studio Shop',
    description: 'A mini-project simulating a modern clothing store website to demonstrate e-commerce web development and UI design fundamentals.',
    image: project2Img,
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'SASS'],
    liveUrl: 'https://wisely-studio-shop.onrender.com',
    githubUrl: 'https://github.com/Shiryx0242/Wisely-Studio-Shop',
  },
  {
    id: '03',
    title: 'ThreatSentry',
    description: 'An authorized web vulnerability scanner and OWASP ML-assisted Intrusion Detection System (IDS) combining passive & active security checks, scope-aware crawling, and machine learning payload analysis to detect SQL Injection, XSS, Path Traversal, and security misconfigurations.',
    image: project3Img,
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Python', 'Scikit-Learn', 'Supabase'],
    liveUrl: 'https://threatsentry.vercel.app',
    githubUrl: 'https://github.com/kktpx/Threatsentry',
  },
  {
    id: '04',
    title: 'Thai Coin Detection',
    description: 'A computer vision mini-project using machine learning to detect and classify Thai coins (1, 5, 10 Baht) from images. It calculates the total value automatically with high confidence.',
    image: project6Img,
    techStack: ['Python', 'YOLOv5', 'PyTorch', 'Flask', 'OpenCV', 'HTML/CSS'],
    githubUrl: 'https://github.com/Shiryx0242/coin-detection',
  },
  {
    id: '05',
    title: 'Wisly Shop Mobile UI/UX',
    description: 'A comprehensive UI/UX design mini-project for a mobile e-commerce clothing app. It features a modern, clean, and user-friendly interface covering essential screens from product browsing to checkout.',
    image: project4Img,
    techStack: ['Figma', 'UI/UX Design', 'Wireframing', 'Prototyping'],
  },
  {
    id: '06',
    title: 'App Design (Figma)',
    description: 'A UI/UX design mini-project created in Figma for a healthcare mobile application. The design encompasses user registration, doctor browsing, and appointment booking flows with a clean, medical-themed aesthetic.',
    image: project5Img,
    techStack: ['Figma', 'UI/UX Design', 'Mobile Design', 'Prototyping'],
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

              {project.techStack && project.techStack.length > 0 && (
                <div className="project-tech">
                  <span className="project-tech-label">Tech Stack</span>
                  <div className="project-tech-badges">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="project-tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {(project.liveUrl || project.githubUrl) && (
                <div className="project-links">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polygon points="10 8 16 12 10 16 10 8" />
                      </svg>
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span>GitHub</span>
                    </a>
                  )}
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

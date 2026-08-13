import React from 'react';
import './Experience.css';

interface ExperienceItem {
  date: string;
  title: string;
  institution: string;
  description: string;
}

const experienceData: ExperienceItem[] = [
  {
    date: '2023 — PRESENT',
    title: 'Bachelor of Science in Computer Science',
    institution: 'Ragamangala University of Technology Suvarnabhumi Huntra',
    description: 'Studying computer science fundamentals, software engineering, data structures, algorithms, and modern development practices.',
  },
  {
    date: '2020 — 2022',
    title: 'Vocational certificate in Information Technology',
    institution: 'Ayutthaya Technological Commercial College',
    description: 'Focused on practical IT skills, including hardware maintenance, software troubleshooting, and basic web development.',
  }
];

const Experience: React.FC = () => {
  return (
    <div className="experience-container">
      <div className="section-header">
        <h2 className="section-title text-gradient">Experience & Education</h2>
        <div className="title-underline"></div>
      </div>

      <div className="timeline">
        {experienceData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-marker">
              <div className="marker-circle"></div>
              {index !== experienceData.length - 1 && <div className="marker-line"></div>}
            </div>
            <div className="timeline-content">
              <span className="timeline-date">{item.date}</span>
              <h3 className="timeline-role">{item.title}</h3>
              <h4 className="timeline-institution">{item.institution}</h4>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

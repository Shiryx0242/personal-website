import React from 'react';
import './TechStack.css';

const skillCategories = [
  {
    title: 'Frontend',
    icon: 'Monitor',
    skills: [
      { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
    ]
  },
  {
    title: 'Backend',
    icon: 'Server',
    skills: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    ]
  },
  {
    title: 'Tools & DevOps',
    icon: 'Wrench',
    skills: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg' },
      { name: 'Windows', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
      { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
    ]
  }
];

const TechStack: React.FC = () => {
  return (
    <div className="tech-stack-container">
      <div className="section-header">
        <h2 className="section-title text-gradient">Technical Stack</h2>
        <div className="title-underline"></div>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-card-header">
              <h3 className="skill-card-title">{category.title}</h3>
            </div>
            
            <div className="skill-items">
              {category.skills.map((skill, i) => (
                <div className="skill-item" key={i}>
                  <div className="skill-icon-wrapper">
                    <img src={skill.icon} alt={skill.name} className="skill-icon" loading="lazy" />
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;

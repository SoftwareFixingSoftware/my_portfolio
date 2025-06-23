import React, { useState, useEffect } from 'react';
import './Skills.css';

const skillCategories = [
  {
    name: 'Offensive Security',
    skills: [
      { name: 'Penetration Testing', level: 90 },
      { name: 'Exploit Development', level: 85 },
      { name: 'Red Teaming', level: 80 },
      { name: 'Social Engineering', level: 75 }
    ]
  },
  {
    name: 'Development',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'C++', level: 80 },
      { name: 'Swift', level: 75 }
    ]
  },
  {
    name: 'Defensive Security',
    skills: [
      { name: 'SIEM Analysis', level: 85 },
      { name: 'Incident Response', level: 80 },
      { name: 'Threat Hunting', level: 75 },
      { name: 'Forensics', level: 70 }
    ]
  }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="container">
      <div className="binary-bg" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="binary-code"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${10 + Math.random() * 20}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            {Array.from({ length: 30 }).map((_, j) => (
              Math.round(Math.random()).toString()
            )).join(' ')}
          </div>
        ))}
      </div>
      
      <h2>
        <span className="section-title">
          <span className="title-number">02.</span> Skills & Proficiency
        </span>
      </h2>
      
      <div className="skills-container">
        <div className="skills-tabs">
          {skillCategories.map((category, index) => (
            <button
              key={category.name}
              className={`skill-tab ${index === activeCategory ? 'active' : ''}`}
              onClick={() => setActiveCategory(index)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="skills-content">
          <ul className="skills-list">
            {skillCategories[activeCategory].skills.map(s => (
              <li key={s.name}>
                <div className="skill-header">
                  <span>{s.name}</span>
                  <span className="skill-percent">{s.level}%</span>
                </div>
                <div className="bar-bg">
                  <div
                    className="bar-fill"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
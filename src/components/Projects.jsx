import React from 'react';
import './Projects.css';
import proj1Screenshot from '../assets/images/projects/proj1.png';
import proj2Screenshot from '../assets/images/projects/proj2.jpeg';
import proj3Screenshot from '../assets/images/projects/proj3.jpeg';

const projects = [
  {
    title: 'Winnas Academy Payment system',
    desc: 'Python tool that scans & auto-exploits known CVEs, with custom payload chaining. Features modular architecture and support for multiple exploit databases.',
    img: proj1Screenshot,
    live: 'https://winnasacademy.co.ke',
    repo: 'https://github.com/SoftwareFixingSoftware/WinnasAcademyDocumentation',
    tags: ['Java', 'Metasploit', 'API', 'Security']
  },
  {
    title: 'SecureVault',
    desc: 'Encrypted credential manager with TUI & REST API, written in Go. Implements AES-256 encryption and secure memory handling. works inhand with an audio player for encapsulation purposes',
    img: proj2Screenshot,
    live: null,
    repo: null,
    tags: ['Java', 'gRPC', 'SQLite', 'Cryptography']
  },
  // Add more projects as needed
  {
    title: 'Network Scanner',
    desc: 'Custom network scanning tool with vulnerability detection. Supports multiple scanning techniques and output formats. not yet complete',
    img: proj3Screenshot, // Replace with actual image
    live: null,
    repo: 'https://github.com/SoftwareFixingSoftware/ServerSockets',
    tags: ['Java', 'Networking', 'Security']
  }
];

const Projects = () => (
  <section id="projects">
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
    
    <div className="projects-container">
      <h2>
        <span className="section-title">
          <span className="title-number">04.</span> Key Projects
        </span>
      </h2>
      
      <div className="projects-scroll">
        {projects.map((p) => (
          <div key={p.title} className="proj-card">
            <div className="proj-header">
              <h3>{p.title}</h3>
            </div>
            
            <div className="proj-content">
              <div className="proj-img-container">
                <img src={p.img} alt={`${p.title} screenshot`} className="proj-img" />
              </div>
              
              <p className="proj-desc">{p.desc}</p>
              
              <div className="proj-footer">
                <div className="tag-container">
                  {p.tags.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                
                <div className="proj-links">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="proj-link">
                      <span className="link-icon">🌐</span> Live
                    </a>
                  )}
                  <a href={p.repo} target="_blank" rel="noopener noreferrer" className="proj-link">
                    <span className="link-icon">💻</span> Code
                  </a>
                </div>
              </div>
            </div>
            
            <div className="terminal-decoration">
              Project initialized: {new Date().getFullYear()}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
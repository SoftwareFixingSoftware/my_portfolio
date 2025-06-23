import React from 'react';
import './About.css';

const About = () => (
  <section id="about" className="container">
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
    
    
    
    <div className="about-content">
      <div className="about-text">
        <p>
          I am a <span className="about-highlight">Certified Security Professional</span> and 
          <span className="about-highlight"> Full-Stack Developer</span> with over five years of 
          experience in building secure systems and identifying vulnerabilities in enterprise environments.
        </p>
        
        <p>
          My expertise bridges <span className="about-highlight">application security</span> and 
          <span className="about-highlight"> software engineering</span>, allowing me to not only 
          identify security flaws but also architect robust solutions that prevent them.
        </p>
        
        <ul className="about-list">
          <li>
            <div className="skill-card">
              <h3>Secure Application Development</h3>
              <p>OWASP Top 10 mitigation, secure SDLC implementation, and security code reviews</p>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <h3>Penetration Testing</h3>
              <p>Web/mobile app testing, network exploitation (Nmap, Metasploit), and custom exploit development</p>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <h3>Security Tooling</h3>
              <p>Development of Python, Go, and Java tools for red-team operations and automation</p>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <h3>Threat Intelligence</h3>
              <p>Log analysis, SIEM dashboard creation, and security incident investigation</p>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <h3>Security Architecture</h3>
              <p>Design of secure cloud infrastructures and microservices architectures</p>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <h3>Certifications</h3>
              <p>OSCP (Offensive Security Certified Professional), CEH, pursuing CISSP</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default About;
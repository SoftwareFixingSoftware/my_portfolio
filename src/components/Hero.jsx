import React from 'react';
import './Hero.css';
import profile from '../assets/images/code.jpeg';

const Hero = () => (
  <section id="home" className="hero">
    <div className="container">
      <div className="hero-content">
        <h1>Hello World, I'm <span>CYBER_SECURITY_SPECIALIST</span></h1>
        <p>Pentesting • Secure Coding • Threat Analysis • Red Teaming</p>
        <p>Helping organizations secure their systems through ethical hacking and proactive defense.</p>
       </div>
 
      <div className="hero-image">
        <img src={profile} alt="Security Specialist Profile" />
      </div>
    </div>
    <div className="terminal-line">
      Initializing secure connection... Establishing encrypted channel... Ready for communication.
    </div>
                   <a href="#contact" className="btn">Initiate Contact</a>

  </section>
);

export default Hero;

import React, { useState } from 'react';
import './Contact.css';
import pdfResume from '../assets/files/resume.pdf';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="container">
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
          <span className="title-number">06.</span> Get in Touch
              Connect directly with Lucas for expert one-on-one consultation. Secure your systems,
              build resilient infrastructure, and stay ahead of emerging cybersecurity threats.
        </span>
      </h2>
      
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Enter your message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            <span className="btn-text">Send Message</span>
            <span className="btn-icon">→</span>
          </button>
        </form>
        
        <div className="contact-extras">
          <div className="resume-download">
            <a href={pdfResume} download className="resume-btn">
              <span className="btn-icon">📄</span>
              <span className="btn-text">Download Résumé</span>
            </a>
          </div>
          
          <div className="social-links">
            <h3>Connect With Me</h3>
            <div className="social-icons">
              <a href="https://github.com/SoftwareFixingSoftware" target="_blank" rel="noopener noreferrer" className="social-icon">
                <span className="icon"></span>
                <span className="tooltip">GitHub</span>
              </a>
              <a href="mailto:gitirikulucas@gmail.com" className="social-icon">
                <span className="icon"></span>
                <span className="tooltip">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
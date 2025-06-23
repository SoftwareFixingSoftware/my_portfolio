import React from 'react';
import './Footer.css';


const Footer = () => (
  <footer className="footer">
    <div className="terminal-footer">
      <div className="status-line">
        <span className="status-label">System Status:</span>
        <span className="status-indicator online">Secure Connection Active</span>
      </div>
      <div className="copyright terminal-text">
        &copy; {new Date().getFullYear()} SOFTWAREFIXINGSOFTWARE1.0
      </div>
      <div className="cursor" aria-hidden="true"></div>
    </div>
  </footer>
);

export default Footer;

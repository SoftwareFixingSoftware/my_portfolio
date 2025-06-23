import React, { useState, useEffect } from 'react';
import './Header.css';
import profile from '../assets/images/profile.jpeg';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const nameOptions = ['CYBER_SPEC', 'HACKER_MODE', 'DEV_MASTER', 'CODE_NINJA'];
  const currentText = nameOptions[loopNum % nameOptions.length];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      if (isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        setTypingSpeed(75);
      } else {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentText, loopNum, typingSpeed]);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <h1 className="logo">
          <span className="logo-bracket">[</span>
          <span className="logo-name">{displayText}</span>
          <span className="logo-bracket">]</span>
        </h1>
        <nav>
          <ul className="nav-list">
            {['Home','About','Skills','Projects','Experience','Contact'].map(link => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="nav-link">
                  <span className="nav-num">0{['Home','About','Skills','Projects','Experience','Contact'].indexOf(link) + 1}</span>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="profile-image-container">
          <img src={profile} alt='Profile' className="profile-image" />
        </div>
      </div>
    </header>
  );
};

export default Header;
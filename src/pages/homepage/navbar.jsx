import React, { useState } from 'react';
import './navbar.css';

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Heran Habte
      </div>

      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <a href="#intro" onClick={() => setIsOpen(false)}>Home</a>
        </li>
        <li>
          <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
        </li>
        <li>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
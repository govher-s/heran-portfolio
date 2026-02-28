import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/experience" onClick={() => setIsOpen(false)}>Experience</Link>
        </li>
        <li>
          <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
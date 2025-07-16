import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const Navbar = ({ brandName, navLinks }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef();

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);

  // Close on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="navbar">
      <div className="navbar-container" ref={navRef}>
        <div className="logo">{brandName}</div>

        <nav className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map(({ id, label }) => (
            <a key={id} href={`#${id}`} onClick={() => setMobileMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

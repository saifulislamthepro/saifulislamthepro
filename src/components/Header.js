import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Header.css';


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

const toggleMobileMenu = () => {
  setIsMobileMenuOpen(!isMobileMenuOpen);
}

  return (
    <div className='header-container'>
    <header className='header'>
      <h1 className='logo'><Link to="/">SAIFUL</Link></h1>
        <nav className={`nav ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className='link-list' onClick={toggleMobileMenu}>
        <Link className='li' to="/">Home</Link>
          <Link className='li' to="/about">About</Link>
          <Link className='li' to="/services">Services</Link>
          <Link className='li' to="/contact">Contact</Link>
        </div>
        </nav>
      <div className='mobile-menu-icon' onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? 
        <span className='close-icon'> &times;</span>
        :<span className='bar-icon'>&#9776;</span>}
      </div>
    </header>
    </div>
  );
};

export default Header;
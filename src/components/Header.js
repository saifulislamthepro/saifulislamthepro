import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Header.css';


const Header = () => {
  return (
    <div className='header-container'>
    <header>
      <h1><Link to="/">SAIFUL ISLAM</Link></h1>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
    </div>
  );
};

export default Header;
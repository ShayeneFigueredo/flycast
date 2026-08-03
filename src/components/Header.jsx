import React from 'react';
import { ArrowRight } from 'lucide-react';
import logoHorizontal from '../assets/LOGO-HORIZONTAL.png';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo-container">
          <img src={logoHorizontal} alt="Flycast Logo" className="logo" />
        </div>
        
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#features">Features</a>
          <a href="#blog">Blog</a>
        </nav>

        <Link to="/login" target="_blank" className="btn-outline">
          Login <ArrowRight size={16} />
        </Link>
      </div>
    </header>
  );
};

export default Header;

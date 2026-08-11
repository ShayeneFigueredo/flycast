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
          <a href="/#home">Home</a>
          <div className="nav-dropdown">
            <a href="/#solucoes">Soluções</a>
            <div className="dropdown-content">
              <Link to="/solucoes/flybox">Nova Era FlyBox</Link>
              <Link to="/solucoes/transmissao-aerea">Transmissão Aérea</Link>
              <Link to="/solucoes/instalacao-cameras">Instalação de Câmeras</Link>
            </div>
          </div>
          <a href="/#sobre">Sobre Nós</a>
          <a href="/#features">Features</a>
          <a href="/#blog">Blog</a>
        </nav>

        <Link to="/login" target="_blank" className="btn-outline">
          Login <ArrowRight size={16} />
        </Link>
      </div>
    </header>
  );
};

export default Header;

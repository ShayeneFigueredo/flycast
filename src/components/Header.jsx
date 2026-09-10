import React from 'react';
import logoHorizontal from '../assets/LOGO-HORIZONTAL.png';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo-container">
          <Link to="/">
            <img src={logoHorizontal} alt="Flycast Logo" className="logo" />
          </Link>
        </div>
        
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <div className="nav-dropdown">
            <a href="/#solucoes">Soluções</a>
            <div className="dropdown-content">
              <Link to="/solucoes/flybox">Nova Era FlyBox</Link>
              <Link to="/solucoes/transmissao-aerea">Transmissão Aérea</Link>
              <Link to="/solucoes/instalacao-cameras">Instalação de Câmeras</Link>
            </div>
          </div>
          <Link to="/sobre-nos">Sobre Nós</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

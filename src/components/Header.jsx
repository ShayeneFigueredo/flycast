import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logoHorizontal from '../assets/LOGO-HORIZONTAL.png';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdownTimeoutRef = React.useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
  }, [location]);

  // Lock body scroll when mobile menu is open to prevent page pull/scroll
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [mobileMenuOpen]);

  const handleMouseEnter = (name) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 1000); // 1-second grace period
  };

  const handleDropdownClick = (name) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(prev => prev === name ? null : name);
  };

  const toggleDropdown = (name) => {
    setActiveDropdown(prev => prev === name ? null : name);
  };

  return (
    <>
      <header className={`header-wrapper ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-capsule">
        <div className="logo-container">
          <Link to="/" aria-label="Flycast Home">
            <img src={logoHorizontal} alt="Flycast" className="logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-links" aria-label="Navegação principal">
          <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
            Home
          </Link>

          {/* Vertical 1: Helicópteros */}
          <div 
            className="nav-dropdown"
            onMouseEnter={() => handleMouseEnter('heli')}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              type="button"
              className={`nav-dropdown-btn ${activeDropdown === 'heli' || location.pathname.includes('helicoptero') || location.pathname.includes('transmissao') || location.pathname.includes('instalacao') ? 'active' : ''}`}
              aria-expanded={activeDropdown === 'heli'}
              onClick={() => handleDropdownClick('heli')}
            >
              <span className="nav-main-title">Helicópteros</span>
              <ChevronDown size={14} className={`chevron-icon ${activeDropdown === 'heli' ? 'rotate' : ''}`} />
            </button>
            <div 
              className={`dropdown-menu ${activeDropdown === 'heli' ? 'show' : ''}`}
              onMouseEnter={() => handleMouseEnter('heli')}
              onMouseLeave={handleMouseLeave}
            >
              <div className="dropdown-list">
                <Link to="/solucoes/transmissao-aerea" className="dropdown-item" onClick={() => setActiveDropdown(null)}>
                  Transmissão Aérea
                </Link>
                <Link to="/solucoes/servicos-integrados" className="dropdown-item" onClick={() => setActiveDropdown(null)}>
                  Serviços Integrados
                </Link>
                <Link to="/solucoes/setores-atendidos" className="dropdown-item" onClick={() => setActiveDropdown(null)}>
                  Setores Atendidos
                </Link>
              </div>
            </div>
          </div>

          {/* Vertical 2: Aviões */}
          <Link 
            to="/solucoes/avioes" 
            className={`nav-item ${location.pathname.includes('avioes') ? 'active' : ''}`}
          >
            Aviões
          </Link>

          {/* Vertical 3: Escolas de Aviação / CIACs */}
          <Link 
            to="/solucoes/escolas-de-aviacao" 
            className={`nav-item ${location.pathname.includes('escolas-de-aviacao') || location.pathname.includes('ciacs') || location.pathname.includes('flybox') ? 'active' : ''}`}
          >
            Escolas de Aviação
          </Link>

          <Link to="/sobre-nos" className={`nav-item ${location.pathname === '/sobre-nos' ? 'active' : ''}`}>
            Sobre Nós
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button 
          type="button"
          className="mobile-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>

    {/* Backdrop Escuro (Fecha ao tocar fora e impede puxar a página) */}
    <div 
      className={`mobile-nav-backdrop ${mobileMenuOpen ? 'open' : ''}`}
      onClick={() => setMobileMenuOpen(false)}
      aria-hidden="true"
    />

    {/* Menu Drawer Lateral (Desliza somente pela lateral direita) */}
    <aside 
      className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
      aria-hidden={!mobileMenuOpen}
      aria-label="Menu de navegação mobile"
    >
      <div className="mobile-drawer-header">
        <Link to="/" onClick={() => setMobileMenuOpen(false)} aria-label="Flycast Home">
          <img src={logoHorizontal} alt="Flycast" className="mobile-drawer-logo" />
        </Link>
        <button 
          type="button"
          className="mobile-drawer-close"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Fechar menu"
        >
          <X size={18} />
        </button>
      </div>

      <div className="mobile-nav-content">
        <Link to="/" className={`mobile-nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
          HOME
        </Link>

        {/* Mobile Vertical 1: Helicópteros */}
        <div className="mobile-vertical-block">
          <button 
            type="button" 
            className="mobile-vertical-title" 
            onClick={() => toggleDropdown('m-heli')}
            aria-expanded={activeDropdown === 'm-heli'}
          >
            <strong>HELICÓPTEROS</strong>
            <ChevronDown size={16} className={`chevron-icon ${activeDropdown === 'm-heli' ? 'rotate' : ''}`} />
          </button>
          <div className={`mobile-vertical-links ${activeDropdown === 'm-heli' ? 'expanded' : ''}`}>
            <Link to="/solucoes/transmissao-aerea" onClick={() => setMobileMenuOpen(false)}>
              Transmissão Aérea
            </Link>
            <Link to="/solucoes/servicos-integrados" onClick={() => setMobileMenuOpen(false)}>
              Serviços Integrados
            </Link>
            <Link to="/solucoes/setores-atendidos" onClick={() => setMobileMenuOpen(false)}>
              Setores Atendidos
            </Link>
          </div>
        </div>

        {/* Mobile Vertical 2: Aviões */}
        <Link 
          to="/solucoes/avioes" 
          className={`mobile-nav-link ${location.pathname.includes('avioes') ? 'active' : ''}`} 
          onClick={() => setMobileMenuOpen(false)}
        >
          AVIÕES
        </Link>

        {/* Mobile Vertical 3: Escolas de Aviação */}
        <Link 
          to="/solucoes/escolas-de-aviacao" 
          className={`mobile-nav-link ${location.pathname.includes('escolas-de-aviacao') || location.pathname.includes('ciacs') || location.pathname.includes('flybox') ? 'active' : ''}`} 
          onClick={() => setMobileMenuOpen(false)}
        >
          ESCOLAS DE AVIAÇÃO
        </Link>

        <Link 
          to="/sobre-nos" 
          className={`mobile-nav-link ${location.pathname === '/sobre-nos' ? 'active' : ''}`} 
          onClick={() => setMobileMenuOpen(false)}
        >
          SOBRE NÓS
        </Link>
      </div>

      <div className="mobile-drawer-footer">
        <span className="drawer-footer-tag">TECNOLOGIA PARA AVIAÇÃO</span>
      </div>
    </aside>
  </>
);
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import { Radio, Plane, GraduationCap, MessageCircle } from 'lucide-react';
import logoHorizontal from '../assets/LOGO-HORIZONTAL.png';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <Link to="/" onClick={scrollToTop} className="footer-logo-link" aria-label="Flycast Home">
              <img src={logoHorizontal} alt="Flycast" className="footer-logo" />
            </Link>
            <div className="footer-contact-item">
              <a 
                href="https://wa.me/553499793418?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20a%20equipe%20da%20Flycast." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-whatsapp-btn"
              >
                <MessageCircle size={18} />
                <span>(34) 99793-418</span>
              </a>
            </div>
          </div>

          {/* Nav: Helicópteros */}
          <div className="footer-col">
            <Link to="/" onClick={scrollToTop} className="footer-nav-title">
              <Radio size={18} className="text-accent" />
              <span>Helicópteros</span>
            </Link>
          </div>

          {/* Nav: Aviões */}
          <div className="footer-col">
            <Link to="/" onClick={scrollToTop} className="footer-nav-title">
              <Plane size={18} className="text-accent" />
              <span>Aviões</span>
            </Link>
          </div>

          {/* Nav: Escolas de Aviação */}
          <div className="footer-col">
            <Link to="/" onClick={scrollToTop} className="footer-nav-title">
              <GraduationCap size={18} className="text-accent" />
              <span>Escolas de Aviação</span>
            </Link>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {currentYear} <strong>FLYCAST Tecnologia Aeronáutica</strong>. Todos os direitos reservados.
          </p>
          <div className="footer-meta-tag">
            Engenharia & Conectividade Aeroespacial
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

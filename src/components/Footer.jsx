import React from 'react';
import { Link } from 'react-router-dom';
import { Radio, Plane, GraduationCap, MessageCircle, Users, MapPin } from 'lucide-react';
import logoHorizontal from '../assets/LOGO-HORIZONTAL.png';
import './Footer.css';

// lucide-react não inclui ícones de marcas; SVG simples do Instagram
const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

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
            <div className="footer-contact-item footer-contact-row">
              <a 
                href="https://wa.me/5534999793418?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20a%20equipe%20da%20Flycast." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-whatsapp-btn"
              >
                <MessageCircle size={18} />
                <span>+55 34 99979-3418</span>
              </a>
              <a
                href="https://www.instagram.com/flycast.solucoes/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Instagram da Flycast (@flycast.solucoes)"
                title="Instagram da Flycast"
              >
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>

          {/* Nav: Helicópteros */}
          <div className="footer-col">
            <Link to="/solucoes/transmissao-aerea" onClick={scrollToTop} className="footer-nav-title">
              <Radio size={18} className="text-accent" />
              <span>Helicópteros</span>
            </Link>
            <ul className="footer-sublinks">
              <li><Link to="/solucoes/transmissao-aerea" onClick={scrollToTop}>Transmissão Aérea</Link></li>
              <li><Link to="/solucoes/servicos-integrados" onClick={scrollToTop}>Serviços Integrados</Link></li>
              <li><Link to="/solucoes/setores-atendidos" onClick={scrollToTop}>Setores Atendidos</Link></li>
            </ul>
          </div>

          {/* Nav: Aviões */}
          <div className="footer-col">
            <Link to="/solucoes/avioes" onClick={scrollToTop} className="footer-nav-title">
              <Plane size={18} className="text-accent" />
              <span>Aviões</span>
            </Link>
          </div>

          {/* Nav: Escolas de Aviação */}
          <div className="footer-col">
            <Link to="/solucoes/escolas-de-aviacao" onClick={scrollToTop} className="footer-nav-title">
              <GraduationCap size={18} className="text-accent" />
              <span>Escolas de Aviação</span>
            </Link>
            <Link to="/sobre-nos" onClick={scrollToTop} className="footer-nav-title">
              <Users size={18} className="text-accent" />
              <span>Sobre Nós</span>
            </Link>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-legal">
            <p className="footer-copy">
              &copy; {currentYear} <strong className="notranslate" translate="no">Flycast Soluções LTDA</strong>. Todos os direitos reservados.
            </p>
            <p className="footer-company-info">
              <span className="notranslate" translate="no">CNPJ 52.537.051/0001-50</span>
              <span className="footer-info-sep" aria-hidden="true">·</span>
              <span className="footer-location">
                <MapPin size={13} /> Uberlândia – MG, Brasil
              </span>
            </p>
          </div>
          <div className="footer-meta-tag">
            Engenharia & Conectividade Aeroespacial
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

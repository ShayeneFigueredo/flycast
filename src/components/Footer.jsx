import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight, Shield, Radio, Plane, MessageCircle } from 'lucide-react';
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
            <p className="footer-brand-desc">
              Pioneira em conectividade aeronáutica híbrida, streaming celular em tempo real e inteligência operacional com IA Multimodal para asas rotativas, aviação leve e centros de instrução.
            </p>
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
            <h4 className="footer-title">
              <Radio size={16} className="text-accent" />
              <span>Helicópteros</span>
            </h4>
            <ul className="footer-links">
              <li>
                <Link to="/solucoes/transmissao-aerea" onClick={scrollToTop}>
                  Transmissão Aérea HD
                </Link>
              </li>
              <li>
                <Link to="/solucoes/servicos-integrados" onClick={scrollToTop}>
                  Serviços Integrados
                </Link>
              </li>
              <li>
                <Link to="/solucoes/setores-atendidos" onClick={scrollToTop}>
                  Setores Atendidos
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav: Aviões & CIACs */}
          <div className="footer-col">
            <h4 className="footer-title">
              <Plane size={16} className="text-accent" />
              <span>Aviões & CIACs</span>
            </h4>
            <ul className="footer-links">
              <li>
                <Link to="/solucoes/flybox" onClick={scrollToTop}>
                  A Nova Era da Instrução
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav: Institucional */}
          <div className="footer-col">
            <h4 className="footer-title">
              <Shield size={16} className="text-accent" />
              <span>Institucional</span>
            </h4>
            <ul className="footer-links">
              <li>
                <Link to="/" onClick={scrollToTop}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sobre-nos" onClick={scrollToTop}>
                  Sobre a Flycast
                </Link>
              </li>
              <li>
                <a href="/#clientes">
                  Nossos Clientes
                </a>
              </li>
              <li>
                <Link to="/login" onClick={scrollToTop}>
                  Portal FlyHub
                </Link>
              </li>
            </ul>
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

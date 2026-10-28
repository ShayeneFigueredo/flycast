import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Settings, 
  Share2, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';
import Header from './Header';
import Partners from './Partners';
import './SobreNos.css';

// Assets
import videoBanner from '../assets/video-banner.mp4';
import helicopteroPoliciaImg from '../assets/helicoptero-policia-militar.png';
import coltImg from '../assets/colt-img.webp';

const SobreNos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sobre-page-wrapper">
      <Header />

      <div className="container">
        {/* Navegação Voltar */}
        <div className="sobre-top-nav">
          <Link to="/" className="btn-back">
            <ArrowLeft size={18} /> Voltar ao Início
          </Link>
        </div>

        {/* 1. HERO SECTION */}
        <section className="sobre-hero-card glow-box">
          <video 
            src={videoBanner} 
            autoPlay 
            loop
            muted 
            playsInline 
            onEnded={(e) => {
              e.target.currentTime = 0;
              e.target.play();
            }}
            className="sobre-hero-bg-video" 
          />
          <div className="sobre-hero-overlay"></div>

          <div className="sobre-hero-content">
            <div className="sobre-hero-tag">
              <span className="cyan-dash-inline"></span>
              <span>SOBRE A FLYCAST</span>
            </div>

            <h1 className="sobre-hero-title">
              Tecnologia que <br className="d-none d-md-block" />
              conecta a aviação.
            </h1>

            <p className="sobre-hero-desc">
              Engenharia embarcada, transmissão ao vivo e inteligência de dados para operações aéreas.
            </p>
          </div>
        </section>

        {/* 2. CONHEÇA NOSSAS SOLUÇÕES */}
        <section className="sobre-solutions-section section-padding">
          <div className="sobre-section-header">
            <span className="cyan-dash-bar"></span>
            <h2 className="sobre-section-title">
              Conheça nossas soluções
            </h2>
          </div>

          <div className="sobre-solutions-grid">
            {/* Card 1: Helicópteros */}
            <div className="sobre-solution-card glow-box">
              <img 
                src={helicopteroPoliciaImg} 
                alt="Soluções para Helicópteros" 
                className="solution-card-img" 
              />
              <div className="solution-card-overlay"></div>
              <div className="solution-card-content">
                <h3 className="solution-card-title">Helicópteros</h3>
                <Link to="/solucoes/transmissao-aerea" className="solution-btn-pill">
                  <span>Conhecer</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Card 2: Aviões e CIACs */}
            <div className="sobre-solution-card glow-box">
              <img 
                src={coltImg} 
                alt="Soluções para Aviões e CIACs" 
                className="solution-card-img" 
              />
              <div className="solution-card-overlay"></div>
              <div className="solution-card-content">
                <h3 className="solution-card-title">Aviões e CIACs</h3>
                <Link to="/solucoes/avioes" className="solution-btn-pill">
                  <span>Conhecer</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3. DESENVOLVER, INTEGRAR E VALIDAR */}
        <section className="sobre-pillars-section section-padding">
          <div className="sobre-section-header">
            <span className="cyan-dash-bar"></span>
            <h2 className="sobre-section-title">
              Desenvolver, integrar e validar.
            </h2>
          </div>

          <div className="sobre-pillars-grid">
            {/* Card 1: Desenvolver */}
            <div className="sobre-pillar-card glow-box">
              <div className="pillar-icon-box">
                <Settings size={28} />
              </div>
              <h3 className="pillar-title">Desenvolver</h3>
              <p className="pillar-desc">
                Hardware e software para operações aéreas.
              </p>
            </div>

            {/* Card 2: Integrar */}
            <div className="sobre-pillar-card glow-box">
              <div className="pillar-icon-box">
                <Share2 size={28} />
              </div>
              <h3 className="pillar-title">Integrar</h3>
              <p className="pillar-desc">
                Sistemas, conectividade e dados a bordo.
              </p>
            </div>

            {/* Card 3: Validar */}
            <div className="sobre-pillar-card glow-box">
              <div className="pillar-icon-box">
                <ShieldCheck size={28} />
              </div>
              <h3 className="pillar-title">Validar</h3>
              <p className="pillar-desc">
                Testes em bancada e em voo.
              </p>
            </div>
          </div>
        </section>

        {/* 4. NOSSOS CLIENTES / PARCEIROS */}
        <Partners />
      </div>
    </div>
  );
};

export default SobreNos;

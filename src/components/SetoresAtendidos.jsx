import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Shield, 
  Building2, 
  CheckCircle2, 
  Radio, 
  Video, 
  MessageCircle, 
  ArrowRight 
} from 'lucide-react';
import './SetoresAtendidos.css';
import Header from './Header';
import Partners from './Partners';

// Assets
import imagensHelicoptero from '../assets/imagens-helicoptero.mp4';
import setorImg1 from '../assets/setores-atendidos1.png';
import setorImg2 from '../assets/setores atendidos 2.png';
import setorImg3 from '../assets/setores-atendidos3.png';

const SetoresAtendidos = () => {
  const [activeStrip, setActiveStrip] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryStrips = [
    {
      img: setorImg1,
      tag: 'Segurança & Defesa',
      title: 'Operações Táticas',
      desc: 'Missões governamentais e patrulhamento aéreo sob qualquer condição.'
    },
    {
      img: setorImg2,
      tag: 'Mídia & Jornalismo',
      title: 'Transmissão ao Vivo',
      desc: 'Tecnologia validada pelas maiores emissoras do país.'
    },
    {
      img: setorImg3,
      tag: 'Engenharia Aeronáutica',
      title: 'Integração em Hangar',
      desc: 'Homologação e instalação técnica especializada de ponta a ponta.'
    }
  ];

  return (
    <div className="setores-page-wrapper">
      <Header />

      {/* 1. HERO SECTION (Mesmo estilo das páginas de Helicóptero) */}
      <section className="setores-hero">
        <video 
          src={imagensHelicoptero}
          autoPlay
          loop
          muted
          playsInline
          onEnded={(e) => {
            e.target.currentTime = 0;
            e.target.play();
          }}
          className="setores-video-bg"
        />
        <div className="setores-hero-overlay"></div>
        <div className="container relative-z">
          <Link to="/" className="btn-back">
            <ArrowLeft size={18} /> Voltar ao Início
          </Link>

          <div className="transmissao-hero-content">
            <h1 className="transmissao-hero-title">
              Presença Estratégica em <span className="animated-altitude">Setores Atendidos.</span>
            </h1>

            <p className="transmissao-hero-desc">
              Tecnologia validada nas operações mais exigentes do país, desde missões críticas de segurança pública até conectividade corporativa para a aviação executiva.
            </p>
            <p className="transmissao-hero-subdesc">
              Conectividade contínua, transmissão em alta definição e sistemas embarcados projetados para máxima confiabilidade e confidencialidade.
            </p>

            <div className="hero-cta-group">
              <a href="#setores" className="btn-primary">
                Conhecer Nossos Setores
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEÇÃO DE SETORES ATENDIDOS + GALERIA EM TIRAS VERTICAIS */}
      <section className="setores-main-section section-padding" id="setores">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">
              Setores <span className="text-accent glow-text">Atendidos</span>
            </h2>
            <p className="section-subtitle">
              Tecnologia validada nas operações mais exigentes do país, com soluções sob medida para cada necessidade.
            </p>
          </div>

          <div className="setores-composition-grid">
            {/* COLUNA ESQUERDA: CARDS DESCRITIVOS DOS SETORES */}
            <div className="setores-cards-column">
              {/* Card 1: Governamental & Militar */}
              <div className="setor-detail-card glow-box">
                <div className="sdc-icon">
                  <Shield size={28} />
                </div>
                <h3 className="sdc-title">Operações Governamentais e Militares</h3>
                <p className="sdc-desc">
                  Soluções seguras de conectividade e transmissão para missões estratégicas, segurança pública e operações especiais, desenvolvidas para funcionar em condições exigentes.
                </p>
                <ul className="sdc-checklist">
                  <li>
                    <CheckCircle2 size={16} className="text-accent" />
                    <span>Transmissão em tempo real para centrais integradas de comando e controle</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="text-accent" />
                    <span>Conexão estável em relevo acidentado, fronteiras e áreas remotas</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="text-accent" />
                    <span>Criptografia de dados e robustez contra interferência e condições adversas</span>
                  </li>
                </ul>
              </div>

              {/* Card 2: Executiva & Setor Privado */}
              <div className="setor-detail-card glow-box">
                <div className="sdc-icon">
                  <Building2 size={28} />
                </div>
                <h3 className="sdc-title">Aviação Executiva e Setor Privado</h3>
                <p className="sdc-desc">
                  Tecnologia de comunicação e conectividade híbrida para operações executivas e corporativas, com alto desempenho, segurança e confidencialidade.
                </p>
                <ul className="sdc-checklist">
                  <li>
                    <CheckCircle2 size={16} className="text-accent" />
                    <span>Conexão celular + satelital ininterrupta em qualquer altitude</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="text-accent" />
                    <span>Telemetria, rastreabilidade e dados de voo em tempo real</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="text-accent" />
                    <span>Transmissão de alta qualidade para emissoras de TV, jornalismo e eventos</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* COLUNA DIREITA: GALERIA DE FOTOS EM TIRAS VERTICAIS ARREDONDADAS (ESTILO JPCA/I9HUB) */}
            <div className="setores-gallery-column">
              <div className="gallery-strips-container">
                {galleryStrips.map((item, idx) => (
                  <div 
                    key={idx}
                    className={`gallery-strip-item ${activeStrip === idx ? 'strip-expanded' : ''}`}
                    onMouseEnter={() => setActiveStrip(idx)}
                    onClick={() => setActiveStrip(idx)}
                  >
                    <img src={item.img} alt={item.title} className="strip-img" />
                    <div className="strip-overlay"></div>
                    <div className="strip-content">
                      <span className="strip-badge">{item.tag}</span>
                      <h4 className="strip-title">{item.title}</h4>
                      <p className="strip-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NOSSOS CLIENTES */}
      <Partners />
    </div>
  );
};

export default SetoresAtendidos;

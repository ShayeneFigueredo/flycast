import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Shield, 
  Building2, 
  CheckCircle2 
} from 'lucide-react';
import './SetoresAtendidos.css';
import Header from './Header';
import Partners from './Partners';

// Assets
import imagensHelicoptero from '../assets/imagens-helicoptero.mp4';
import helicopteroPolicia from '../assets/helicoptero-policia-militar.png';
import comandanteHamilton from '../assets/comandante-hamilton.jpg';
import painelHelicoptero from '../assets/painel-helicoptero-privado.png';

const SetoresAtendidos = () => {
  const [activeStrip, setActiveStrip] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryImages = [
    {
      id: 'governamental',
      tag: 'Segurança & Defesa',
      title: 'Operações Táticas',
      img: helicopteroPolicia,
      imgAlt: 'Helicópteros da Polícia Militar em Operação'
    },
    {
      id: 'midia',
      tag: 'Mídia & Jornalismo',
      title: 'Transmissão Ao Vivo',
      img: comandanteHamilton,
      imgAlt: 'Comandante Hamilton em transmissão aérea'
    },
    {
      id: 'privado',
      tag: 'Engenharia & Homologação',
      title: 'Integração Embarcada',
      img: painelHelicoptero,
      imgAlt: 'Painel e interior de helicóptero no setor privado'
    }
  ];

  return (
    <div className="setores-page-wrapper">
      <Header />

      {/* 1. HERO SECTION */}
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

      {/* 2. SEÇÃO DE SETORES ATENDIDOS (DOIS CARDS AZUIS + CARDS DE IMAGEM LIMPOS) */}
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

          <div className="setores-showcase-container">
            {/* Coluna Esquerda: 2 Cards Azuis Informativos */}
            <div className="setores-blue-cards-col">
              {/* Card 1: Operações Governamentais e Militares */}
              <div 
                className="setor-blue-card"
                onMouseEnter={() => setActiveStrip(0)}
              >
                <div className="setor-blue-card-icon">
                  <Shield size={24} strokeWidth={1.8} />
                </div>
                <h3 className="setor-blue-card-title">
                  OPERAÇÕES GOVERNAMENTAIS E MILITARES
                </h3>
                <p className="setor-blue-card-desc">
                  Soluções seguras de conectividade e transmissão para missões estratégicas, segurança pública e operações especiais, desenvolvidas para funcionar em condições exigentes.
                </p>
                <ul className="setor-blue-card-list">
                  <li>
                    <CheckCircle2 size={18} className="setor-check-icon" />
                    <span>Transmissão em tempo real para centrais integradas de comando e controle</span>
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="setor-check-icon" />
                    <span>Conexão estável em relevo acidentado, fronteiras e áreas remotas</span>
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="setor-check-icon" />
                    <span>Criptografia de dados e robustez contra interferência e condições adversas</span>
                  </li>
                </ul>
              </div>

              {/* Card 2: Aviação Executiva e Setor Privado */}
              <div 
                className="setor-blue-card"
                onMouseEnter={() => setActiveStrip(2)}
              >
                <div className="setor-blue-card-icon">
                  <Building2 size={24} strokeWidth={1.8} />
                </div>
                <h3 className="setor-blue-card-title">
                  AVIAÇÃO EXECUTIVA E SETOR PRIVADO
                </h3>
                <p className="setor-blue-card-desc">
                  Tecnologia de comunicação e conectividade híbrida para operações executivas e corporativas, com alto desempenho, segurança e confidencialidade.
                </p>
                <ul className="setor-blue-card-list">
                  <li>
                    <CheckCircle2 size={18} className="setor-check-icon" />
                    <span>Conexão celular + satelital ininterrupta em qualquer altitude</span>
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="setor-check-icon" />
                    <span>Telemetria, rastreabilidade e dados de voo em tempo real</span>
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="setor-check-icon" />
                    <span>Transmissão de alta qualidade para emissoras de TV, jornalismo e eventos</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Coluna Direita: Cards Verticais de Imagem com títulos e tags (sem os textinhos) */}
            <div className="setores-images-col">
              {galleryImages.map((item, idx) => {
                const isExpanded = activeStrip === idx;
                return (
                  <div 
                    key={item.id}
                    className={`setores-image-card ${isExpanded ? 'card-expanded' : ''}`}
                    onMouseEnter={() => setActiveStrip(idx)}
                    onClick={() => setActiveStrip(idx)}
                  >
                    <img 
                      src={item.img} 
                      alt={item.imgAlt} 
                      className={`setores-card-img setores-card-img-${item.id}`} 
                    />
                    <div className="setores-card-overlay"></div>
                    <div className="setores-card-content">
                      <span className="setores-card-tag">{item.tag}</span>
                      <h4 className="setores-card-title">{item.title}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SetoresAtendidos;

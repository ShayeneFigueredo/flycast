import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Radio, 
  Video, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle,
  ShieldCheck,
  Cpu,
  Layers,
  Award
} from 'lucide-react';
import './InstalacaoCameras.css';
import helicopteroImg from '../assets/helicoptero.jpg';
import cameraImg from '../assets/camera.png';
import helicopteroBranco from '../assets/helicoptero-branco.webp';
import imagensHelicoptero from '../assets/imagens-helicoptero.mp4';
import Header from './Header';
import Partners from './Partners';

const InstalacaoCameras = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="instalacao-page-wrapper">
      <Header />
      
      {/* 1. HERO SECTION NO MESMO ESTILO DE TRANSMISSÃO AÉREA */}
      <section className="instalacao-hero">
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
          className="instalacao-video-bg"
        />
        <div className="instalacao-hero-overlay"></div>
        <div className="container relative-z">
          <Link to="/" className="btn-back">
            <ArrowLeft size={18} /> Voltar ao Início
          </Link>

          <div className="transmissao-hero-grid">
            <div className="transmissao-hero-left">
              <h1 className="transmissao-hero-title">
                Engenharia aeronáutica e <span className="animated-altitude">Serviços Integrados.</span>
              </h1>

              <p className="transmissao-hero-desc">
                Unimos transmissão celular híbrida em tempo real, integração e homologação de câmeras giroestabilizadas e sistemas embarcados para as operações aéreas mais exigentes do país.
              </p>
              <p className="transmissao-hero-subdesc">
                Mais de uma década de experiência comprovada com emissoras de TV, órgãos de segurança pública e aviação executiva.
              </p>

              <div className="hero-cta-group">
                <a href="#servicos" className="btn-primary">
                  Conhecer Nossos Serviços
                </a>
              </div>
            </div>

            <div className="transmissao-hero-right">
              <div className="helicopter-hover-container">
                {/* Rotor Principal com Perspectiva 3D e Motion Blur */}
                <div className="main-rotor-system">
                  <div className="rotor-blur-disc"></div>
                  <div className="rotor-blades-spin">
                    <span className="blade b1"></span>
                    <span className="blade b2"></span>
                    <span className="blade b3"></span>
                  </div>
                </div>

                {/* Rotor de Cauda */}
                <div className="tail-rotor-system">
                  <div className="tail-rotor-disc"></div>
                </div>

                {/* Corpo do Helicóptero */}
                <img src={helicopteroBranco} alt="Helicóptero Flycast" className="hero-helicopter-img" />

                {/* Efeito de Sustentação */}
                <div className="helicopter-downwash-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEÇÃO DE CARDS OBJETIVOS DE SERVIÇOS (ORIENTAÇÃO VISUAL JPCA) */}
      <section className="servicos-section section-padding" id="servicos">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">
              Nossos <span className="text-accent glow-text">Serviços Integrados</span>
            </h2>
            <p className="section-subtitle">
              Soluções completas com engenharia de precisão, transmissão ininterrupta e homologação técnica de ponta a ponta.
            </p>
          </div>

          <div className="servicos-objective-grid">
            {/* SERVIÇO 1 — Transmissão Aérea */}
            <div className="servico-objective-card glow-box">
              <div className="soc-img-wrapper">
                <img src={helicopteroImg} alt="Transmissão Aérea em Helicópteros" className="soc-card-img" />
              </div>
              
              <div className="soc-body">
                <div className="soc-header">
                  <div className="soc-icon">
                    <Radio size={26} />
                  </div>
                </div>
                
                <h3 className="soc-title">Transmissão Aérea</h3>
                <p className="soc-desc">
                  Transmissão de alta qualidade e estabilidade em tempo real, conectando sua operação de qualquer lugar.
                </p>

                <ul className="soc-highlights">
                  <li>
                    <CheckCircle2 size={16} className="text-accent" />
                    <span>Soma de banda (Bonding) com até 12 modems 5G/4G simultâneos</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="text-accent" />
                    <span>Streaming estável para estúdios de televisão e centros de comando</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="text-accent" />
                    <span>Hardware em alumínio maciço aeroespacial (Livecast PRO & Extender)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* SERVIÇO 2 — Instalação de Câmeras */}
            <div className="servico-objective-card glow-box">
              <div className="soc-img-wrapper">
                <img src={cameraImg} alt="Instalação de Câmeras em Helicópteros" className="soc-card-img camera-img-fit" />
              </div>

              <div className="soc-body">
                <div className="soc-header">
                  <div className="soc-icon">
                    <Video size={26} />
                  </div>
                </div>

                <h3 className="soc-title">Especialistas em Instalação de Câmeras em Helicópteros</h3>
                <p className="soc-desc">
                  Mais de uma década de experiência na integração de câmeras e sistemas embarcados para emissoras de televisão, órgãos públicos e operações críticas. Nossa equipe reúne conhecimento técnico, tecnologia de ponta e experiência comprovada em projetos aeronáuticos.
                </p>

                <ul className="soc-highlights">
                  <li>
                    <CheckCircle2 size={16} className="text-accent" />
                    <span>Engenharia estrutural, balanceamento de peso e conformidade técnica</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="text-accent" />
                    <span>Gimbals giroestabilizados para captura 4K e Full HD sem vibrações</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="text-accent" />
                    <span>Proteção contra interferência eletromagnética (EMI) e cablagem aeronáutica</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLIENTES */}
      <Partners />
    </div>
  );
};

export default InstalacaoCameras;


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Radio, 
  Wifi, 
  Cpu, 
  ShieldCheck, 
  Layers, 
  Maximize2, 
  ThermometerSnowflake, 
  Network, 
  Video, 
  Building2, 
  Shield, 
  CheckCircle2, 
  FileText,
  MessageCircle,
  X
} from 'lucide-react';
import './TransmissaoAerea.css';
import livecastImg from '../assets/solucoes/livecast2.png';
import extenderImg from '../assets/solucoes/extender-1.png';
import helicopteroImg from '../assets/helicoptero.jpg';
import helicopteroBranco from '../assets/helicoptero-branco.webp';
import imagensHelicoptero from '../assets/imagens-helicoptero.mp4';
import Header from './Header';
import Partners from './Partners';

const TransmissaoAerea = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="transmissao-page-wrapper">
      <Header />
      
      {/* 1. HERO SECTION */}
      <section className="transmissao-hero">
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
          className="transmissao-video-bg"
        />
        <div className="transmissao-hero-overlay"></div>
        <div className="container relative-z">
          <Link to="/" className="btn-back">
            <ArrowLeft size={18} /> Voltar ao Início
          </Link>

          <div className="transmissao-hero-grid">
            <div className="transmissao-hero-left">
              <h1 className="transmissao-hero-title">
                Conexão e transmissão garantidas em <span className="animated-altitude">qualquer altitude.</span>
              </h1>

              <p className="transmissao-hero-desc">
                O <strong>Livecast PRO</strong> e o <strong>Extender</strong> formam um sistema celular híbrido de transmissão ao vivo em alta definição, desenvolvido para operações de asas rotativas que exigem conectividade contínua, baixa latência e alta disponibilidade.
              </p>
              <p className="transmissao-hero-subdesc">
                Projetada para cenários com grandes variações de relevo, longas distâncias e movimentos bruscos, a solução oferece estabilidade e desempenho mesmo nas condições mais desafiadoras.
              </p>

              <div className="hero-cta-group">
                <a href="#hardware" className="btn-primary">
                  Conheça a Solução
                </a>
              </div>
            </div>

            <div className="transmissao-hero-right">
              <div className="helicopter-hover-container">
                {/* Main Rotor System with 3D Spinning Motion Blur */}
                <div className="main-rotor-system">
                  <div className="rotor-blur-disc"></div>
                  <div className="rotor-blades-spin">
                    <span className="blade b1"></span>
                    <span className="blade b2"></span>
                    <span className="blade b3"></span>
                  </div>
                </div>

                {/* Tail Rotor System */}
                <div className="tail-rotor-system">
                  <div className="tail-rotor-disc"></div>
                </div>

                {/* Helicopter Body */}
                <img src={helicopteroBranco} alt="Helicóptero Flycast" className="hero-helicopter-img" />

                {/* Flight Glow / Downwash */}
                <div className="helicopter-downwash-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HARDWARE E ESPECIFICAÇÕES TÉCNICAS */}
      <section className="hardware-section section-padding" id="hardware">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">
              Hardware & <span className="text-accent glow-text">Especificações Técnicas</span>
            </h2>
            <p className="section-subtitle">
              Componentes desenvolvidos a partir de blocos maciços de alumínio com refrigeração avançada para resistir a vibrações severas e condições extremas em voo.
            </p>
          </div>

          <div className="hardware-grid">
            {/* Card 1 — Livecast PRO */}
            <div className="hardware-card glow-box">
              <div className="hw-header">
                <span className="hw-tag">Unidade Principal Embarcada</span>
                <h3 className="hw-title">Livecast PRO: robustez e estabilidade</h3>
              </div>

              <div className="hw-img-box">
                <img src={livecastImg} alt="Livecast PRO" className="hw-img" />
              </div>

              <p className="hw-desc">
                Uma solução robusta para transmissão móvel de vídeo. Por meio da tecnologia proprietária de bonding (soma de banda) e múltiplas conexões simultâneas, o equipamento amplia a estabilidade da imagem, inclusive em áreas com baixa cobertura celular.
              </p>

              <div className="hw-specs-box">
                <h4 className="specs-title text-accent">ESPECIFICAÇÕES TÉCNICAS</h4>
                <ul className="specs-list">
                  <li>
                    <Layers size={18} className="spec-icon" />
                    <span><strong>Gabinete em alumínio maciço:</strong> usinado contra choques mecânicos, vibração e EMI.</span>
                  </li>
                  <li>
                    <ThermometerSnowflake size={18} className="spec-icon" />
                    <span><strong>Sistema LiveCooling:</strong> refrigeração avançada para voos prolongados em altas temperaturas.</span>
                  </li>
                  <li>
                    <Wifi size={18} className="spec-icon" />
                    <span><strong>Expansão para até 12 modems:</strong> compatibilidade nativa com redes 5G/4G/3G de múltiplas operadoras.</span>
                  </li>
                  <li>
                    <Network size={18} className="spec-icon" />
                    <span><strong>Duas portas Ethernet integradas:</strong> para conexão com internet fixa e satelital.</span>
                  </li>
                  <li>
                    <Maximize2 size={18} className="spec-icon" />
                    <span><strong>Integração nativa:</strong> suporte a até duas unidades Extender simultâneas.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2 — Extender */}
            <div className="hardware-card glow-box">
              <div className="hw-header">
                <span className="hw-tag">Módulo Portátil de Longo Alcance</span>
                <h3 className="hw-title">Extender: maior alcance e disponibilidade</h3>
              </div>

              <div className="hw-img-box">
                <img src={extenderImg} alt="Extender" className="hw-img" />
              </div>

              <p className="hw-desc">
                Unidade portátil de modems desenvolvida para ampliar a recepção de sinal. Permite conexão com torres remotas e menos congestionadas, aumentando significativamente a largura de banda disponível durante manobras e deslocamentos aéreos.
              </p>

              <div className="hw-specs-box">
                <h4 className="specs-title text-accent">ESPECIFICAÇÕES TÉCNICAS</h4>
                <ul className="specs-list">
                  <li>
                    <Wifi size={18} className="spec-icon" />
                    <span><strong>Quatro modems de alta capacidade:</strong> recepção potente em cenários críticos.</span>
                  </li>
                  <li>
                    <Radio size={18} className="spec-icon" />
                    <span><strong>Antenas externas de alto ganho:</strong> visada otimizada para capturar sinal de torres remotas.</span>
                  </li>
                  <li>
                    <Network size={18} className="spec-icon" />
                    <span><strong>Conexão otimizada via Ethernet:</strong> integração direta e sem perdas ao Livecast PRO.</span>
                  </li>
                  <li>
                    <ShieldCheck size={18} className="spec-icon" />
                    <span><strong>Ampliação da capacidade de bonding:</strong> cobertura ampliada em áreas isoladas e voos rurais.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="spec-icon" />
                    <span><strong>Design compacto e resistente:</strong> rápida fixação e transporte em cabines operacionais.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Ficha Técnica */}
          <div className="text-center mt-5">
            <button className="btn-primary" onClick={() => setModalOpen(true)}>
              <FileText size={18} />
              Ver Ficha Técnica Completa
            </button>
          </div>
        </div>
      </section>

      {/* CLIENTES */}
      <Partners />

      {/* MODAL FICHA TÉCNICA */}
      {modalOpen && (
        <div className="modal-backdrop" onClick={() => setModalOpen(false)}>
          <div className="modal-content glow-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Ficha Técnica: Livecast PRO & Extender</h3>
              <button className="modal-close" onClick={() => setModalOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="modal-body">
              <div className="tech-spec-table">
                <div className="tst-row tst-header">
                  <div>Parâmetro</div>
                  <div>Livecast PRO</div>
                  <div>Extender</div>
                </div>
                <div className="tst-row">
                  <div>Modems Internos</div>
                  <div>4 a 12 modems (5G / 4G / 3G)</div>
                  <div>4 modems de alta potência</div>
                </div>
                <div className="tst-row">
                  <div>Tecnologia de Soma</div>
                  <div>Bonding Multi-Homer proprietário</div>
                  <div>Extensão de bonding via Ethernet</div>
                </div>
                <div className="tst-row">
                  <div>Chassi</div>
                  <div>Alumínio aeroespacial maciço</div>
                  <div>Polímero blindado de alta densidade</div>
                </div>
                <div className="tst-row">
                  <div>Refrigeração</div>
                  <div>LiveCooling ativo com controle térmico</div>
                  <div>Dissipação passiva de alto rendimento</div>
                </div>
                <div className="tst-row">
                  <div>Entradas de Rede</div>
                  <div>2x Ethernet Gigabit RJ45</div>
                  <div>1x Ethernet Gigabit RJ45</div>
                </div>
                <div className="tst-row">
                  <div>Compatibilidade</div>
                  <div>Conexão com até 2 Extenders</div>
                  <div>Plug & Play no Livecast PRO</div>
                </div>
              </div>
              <div className="modal-footer mt-4 text-center">
                <a 
                  href="https://wa.me/553499793418?text=Ol%C3%A1!%20Gostaria%20da%20ficha%20t%C3%A9cnica%20em%20PDF%20do%20Livecast%20PRO%20e%20Extender." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary"
                >
                  <MessageCircle size={18} />
                  Solicitar Proposta Comercial
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransmissaoAerea;

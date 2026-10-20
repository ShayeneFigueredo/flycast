import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  MessageCircle, 
  Cpu, 
  Cloud, 
  BarChart3, 
  Database, 
  Settings, 
  Monitor, 
  TrendingUp, 
  BookOpen, 
  Calendar, 
  MapPin, 
  Clock, 
  Timer, 
  FileText, 
  Plane,
  ChevronRight,
  ShieldCheck,
  Activity
} from 'lucide-react';
import Header from './Header';
import Partners from './Partners';
import './AvioesPage.css';

// Assets
import videoColtBanner from '../assets/video-colt-banner.mp4';
import inpaerLogo from '../assets/clientes/inpaer.png';
import coltImg from '../assets/colt.png';
import telaFlyhubAvioes from '../assets/tela-flyhub-avioes.png';
import flyhubImg from '../assets/flyhub.png';

const AvioesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="avioes-page-wrapper">
      <Header />

      {/* 1. HERO SECTION COM VÍDEO EMBARCADO */}
      <section className="avioes-hero">
        <div className="avioes-video-bg">
          <video 
            src={videoColtBanner}
            autoPlay
            loop
            muted
            playsInline
            className="hero-video"
          />
          <div className="avioes-video-overlay"></div>
        </div>

        <div className="container hero-content-container relative-z">
          <Link to="/" className="btn-back">
            <ArrowLeft size={18} /> Voltar ao Início
          </Link>

          <div className="avioes-hero-content">
            <span className="avioes-hero-tag">AVIÕES</span>

            <h1 className="avioes-hero-title">
              Conheça melhor <br />
              <span className="text-accent glow-text">seu voo.</span>
            </h1>

            <p className="avioes-hero-desc">
              Reúna telemetria, áudio e vídeo para acompanhar sua aeronave. Com o FlyHub, visualize e analise os registros de forma integrada.
            </p>

            <div className="avioes-highlight-card glow-box">
              <h3 className="highlight-card-title">
                Mais informação para cuidar da sua aeronave.
              </h3>
              <p className="highlight-card-desc">
                A análise dos dados apoia a manutenção preditiva e o planejamento das intervenções, ajudando a reduzir custos e manutenções não programadas.
              </p>
            </div>

            <div className="avioes-hero-actions">
              <a 
                href="https://wa.me/553499793418?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20a%20solu%C3%A7%C3%A3o%20Flycast%20para%20meu%20avi%C3%A3o."
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary avioes-btn-cta"
              >
                <span>Conhecer a solução para meu avião</span>
                <ArrowRight size={18} />
              </a>
              <a href="#arquitetura" className="btn-outline">
                Ver Arquitetura Técnica
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DA AERONAVE À INTELIGÊNCIA OPERACIONAL (3 ETAPAS) */}
      <section className="avioes-fluxo-section section-padding" id="solucao">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">
              Da aeronave à <span className="text-accent glow-text">inteligência operacional</span>
            </h2>
            <p className="section-subtitle">
              Um fluxo contínuo e integrado que transforma cada parâmetro em confiabilidade para o seu voo.
            </p>
          </div>

          <div className="avioes-fluxo-grid">
            {/* Etapa 01: Captura */}
            <div className="avioes-fluxo-card glow-box">
              <div className="fluxo-card-top">
                <span className="fluxo-num">01</span>
                <div className="fluxo-icon-box">
                  <Cpu size={24} />
                </div>
              </div>
              <h3 className="fluxo-card-title">Captura</h3>
              <p className="fluxo-card-desc">
                Registro de dados e informações do voo a bordo.
              </p>
            </div>

            <div className="fluxo-arrow-connector">
              <ChevronRight size={28} />
            </div>

            {/* Etapa 02: Sincronização */}
            <div className="avioes-fluxo-card glow-box">
              <div className="fluxo-card-top">
                <span className="fluxo-num">02</span>
                <div className="fluxo-icon-box">
                  <Cloud size={24} />
                </div>
              </div>
              <h3 className="fluxo-card-title">Sincronização</h3>
              <p className="fluxo-card-desc">
                Envio dos registros para a plataforma após o voo.
              </p>
            </div>

            <div className="fluxo-arrow-connector">
              <ChevronRight size={28} />
            </div>

            {/* Etapa 03: Análise */}
            <div className="avioes-fluxo-card glow-box">
              <div className="fluxo-card-top">
                <span className="fluxo-num">03</span>
                <div className="fluxo-icon-box">
                  <BarChart3 size={24} />
                </div>
              </div>
              <h3 className="fluxo-card-title">Análise</h3>
              <p className="fluxo-card-desc">
                Telemetria, áudio, vídeo e eventos reunidos no FlyHub.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DIÁRIO DE BORDO DIGITAL & ANÁLISE FLYHUB */}
      <section className="diario-bordo-section section-padding">
        <div className="container">
          <div className="diario-split-grid">
            {/* Coluna Esquerda: Mockup de Tablet Moderno com a tela FlyHub Aviões */}
            <div className="diario-media-col">
              <div className="modern-tablet-mockup">
                <div className="tablet-frame glow-box">
                  <div className="tablet-camera-sensor"></div>
                  <div className="tablet-screen-display">
                    <img 
                      src={telaFlyhubAvioes} 
                      alt="Tela FlyHub Aviões - Painel de Telemetria e Diário de Bordo" 
                      className="tablet-screen-asset" 
                    />
                    <div className="tablet-glare-effect"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna Direita: Diário de Bordo Digital */}
            <div className="diario-info-col">
              <div className="diario-badge-icon">
                <BookOpen size={24} />
              </div>

              <h2 className="diario-title">Diário de bordo digital</h2>
              <h3 className="diario-subtitle text-accent">
                O histórico da sua aeronave em um só lugar.
              </h3>

              <p className="diario-desc">
                Organize e consulte os registros de cada voo: datas, trajetos, horários, tempo de voo e observações. Informações reunidas para facilitar o acompanhamento da aeronave e apoiar sua gestão operacional.
              </p>

              {/* Tabela / Card de Registros */}
              <div className="diario-records-card">
                <div className="record-item">
                  <div className="record-label">
                    <Calendar size={17} className="record-icon" />
                    <span>Aeronave e data</span>
                  </div>
                  <div className="record-value">PT-FLY · Voo Registrado</div>
                </div>

                <div className="record-item">
                  <div className="record-label">
                    <MapPin size={17} className="record-icon" />
                    <span>Origem e destino</span>
                  </div>
                  <div className="record-value">Origem ➔ Destino com rota 3D</div>
                </div>

                <div className="record-item">
                  <div className="record-label">
                    <Clock size={17} className="record-icon" />
                    <span>Decolagem e pouso</span>
                  </div>
                  <div className="record-value">Calço a calço sincronizado</div>
                </div>

                <div className="record-item">
                  <div className="record-label">
                    <Timer size={17} className="record-icon" />
                    <span>Tempo de voo</span>
                  </div>
                  <div className="record-value">Cálculo automatizado</div>
                </div>

                <div className="record-item">
                  <div className="record-label">
                    <FileText size={17} className="record-icon" />
                    <span>Observações</span>
                  </div>
                  <div className="record-value">Eventos, telemetria e notas</div>
                </div>
              </div>

              <div className="diario-cta-row">
                <a 
                  href="https://wa.me/553499793418?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20uma%20demonstra%C3%A7%C3%A3o%20do%20Di%C3%A1rio%20de%20Bordo%20Digital." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary"
                >
                  <MessageCircle size={18} />
                  Consultar registros de voo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ARQUITETURA TÉCNICA DO ECOSSISTEMA (5 ETAPAS) */}
      <section className="arquitetura-horizontal-section section-padding" id="arquitetura">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">
              Arquitetura Técnica do <span className="text-accent glow-text">Ecossistema</span>
            </h2>
            <p className="section-subtitle">
              Cinco níveis integrados que estruturam o fluxo de dados desde a aeronave até a inteligência operacional.
            </p>
          </div>

          <div className="arquitetura-5steps-row">
            {/* Step 1 */}
            <div className="arch-step-card glow-box">
              <div className="arch-card-icon">
                <Cpu size={26} />
              </div>
              <h4 className="arch-step-heading">1. Fonte de dados</h4>
              <p className="arch-step-text">
                AirBind, FlyBox e importação de arquivos.
              </p>
            </div>

            <div className="arch-connector-arrow">
              <ChevronRight size={24} />
            </div>

            {/* Step 2 */}
            <div className="arch-step-card glow-box">
              <div className="arch-card-icon">
                <Settings size={26} />
              </div>
              <h4 className="arch-step-heading">2. Processamento</h4>
              <p className="arch-step-text">
                Organização e análise dos registros de voo.
              </p>
            </div>

            <div className="arch-connector-arrow">
              <ChevronRight size={24} />
            </div>

            {/* Step 3 */}
            <div className="arch-step-card glow-box">
              <div className="arch-card-icon">
                <Database size={26} />
              </div>
              <h4 className="arch-step-heading">3. Base de dados</h4>
              <p className="arch-step-text">
                Armazenamento centralizado dos registros.
              </p>
            </div>

            <div className="arch-connector-arrow">
              <ChevronRight size={24} />
            </div>

            {/* Step 4 */}
            <div className="arch-step-card glow-box">
              <div className="arch-card-icon">
                <Monitor size={26} />
              </div>
              <h4 className="arch-step-heading">4. Plataforma</h4>
              <p className="arch-step-text">
                Visualização integrada no FlyHub.
              </p>
            </div>

            <div className="arch-connector-arrow">
              <ChevronRight size={24} />
            </div>

            {/* Step 5 */}
            <div className="arch-step-card glow-box">
              <div className="arch-card-icon">
                <TrendingUp size={26} />
              </div>
              <h4 className="arch-step-heading">5. Aplicações</h4>
              <p className="arch-step-text">
                Acompanhamento da aeronave e análise operacional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TECNOLOGIA INTEGRADA DE FÁBRICA PELA INPAER (AVIÃO AUMENTADO EM DESTAQUE) */}
      <section className="inpaer-colt-highlight-section section-padding" id="inpaer">
        <div className="container">
          <div className="inpaer-colt-banner">
            <div className="inpaer-colt-text">
              <div className="inpaer-brand-row">
                <img src={inpaerLogo} alt="Inpaer" className="inpaer-logo-img" />
                <span className="endorsement-tag">HOMOLOGAÇÃO DE FÁBRICA</span>
              </div>

              <h2 className="inpaer-colt-title">
                Tecnologia integrada de fábrica pela Inpaer.
              </h2>

              <p className="inpaer-colt-desc">
                O <strong>Inpaer Colt</strong>, referência em qualidade e segurança nas Américas, pode sair de fábrica com a tecnologia de captura e telemetria <strong>FlyBox</strong> integrada à aeronave.
              </p>

              <div className="inpaer-colt-action">
                <p className="inpaer-lead-quote">
                  Pronto para transformar os registros do seu avião em inteligência?
                </p>
                <a 
                  href="https://wa.me/553499793418?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20consultor%20sobre%20o%20Inpaer%20Colt%20com%20FlyBox." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary inpaer-btn"
                >
                  <MessageCircle size={18} />
                  Fale com um consultor
                </a>
              </div>
            </div>

            <div className="inpaer-colt-media">
              <img 
                src={coltImg} 
                alt="Aeronave Inpaer Colt com FlyBox integrada" 
                className="colt-aircraft-super-img" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. BANNER FINAL / TRANSFORME OS REGISTROS DA SUA AERONAVE */}
      <section className="avioes-final-banner-section section-padding">
        <div className="container">
          <div className="avioes-final-banner glow-box">
            <div className="banner-content">
              <h2 className="banner-title">
                Transforme os registros da sua aeronave em informação.
              </h2>
              <p className="banner-desc">
                Conheça a solução para acompanhar seus voos e apoiar suas decisões operacionais.
              </p>
              <div className="banner-action">
                <a 
                  href="https://wa.me/553499793418?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20consultor%20Flycast%20sobre%20meu%20avi%C3%A3o." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary banner-btn"
                >
                  <span>Falar com um consultor</span>
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AvioesPage;

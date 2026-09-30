import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Target, 
  Eye, 
  ShieldCheck, 
  Zap, 
  Award, 
  Radio, 
  Cpu, 
  Globe, 
  Activity, 
  ArrowRight, 
  Lock, 
  Server,
  CheckCircle2,
  Workflow,
  Wrench,
  Layers,
  Plane,
  Users,
  Compass
} from 'lucide-react';
import Header from './Header';
import Partners from './Partners';
import './SobreNos.css';

import flycastImg from '../assets/flycast.png';

const SobreNos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const corePillars = [
    {
      icon: <Award size={28} />,
      title: 'Trajetória & Experiência Técnica',
      desc: 'Histórico consolidado no desenvolvimento de soluções de engenharia, acumulando anos de experiência técnica em operações de alta complexidade e missões críticas no setor aeroespacial.'
    },
    {
      icon: <Workflow size={28} />,
      title: 'Integração JPCA & Flycast',
      desc: 'União estratégica entre a solidez operacional e competências consolidadas da JPCA com a capacidade de inovação ágil, desenvolvimento digital e engenharia avançada da Flycast.'
    },
    {
      icon: <Radio size={28} />,
      title: 'Aviação, Conectividade & Dados',
      desc: 'Atuação especializada em sistemas de transmissão ao vivo de alta definição, agregação de conectividade (AirBind), telemetria em tempo real e inteligência operacional baseada em dados (FlyHub).'
    },
    {
      icon: <Cpu size={28} />,
      title: 'Soluções Embarcadas de Ponta a Ponta',
      desc: 'Capacidade completa para projetar, desenvolver, integrar fisicamente e validar sistemas de hardware e software embarcados sob rigorosos padrões de segurança e homologação.'
    }
  ];

  const capacidades = [
    {
      icon: <Cpu size={24} />,
      title: 'Engenharia de Hardware e Software',
      desc: 'Criação de soluções proprietárias como a FlyBox e AirBind, com inteligência artificial embarcada na borda (Edge AI).'
    },
    {
      icon: <Wrench size={24} />,
      title: 'Integração & Instalação Mecânica',
      desc: 'Projetos e kits de instalação mecânica e elétrica customizados para aviões e helicópteros, preservando a integridade da aeronave.'
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'Validação em Voo & Homologação',
      desc: 'Testes de bancada, validação em voo real e assessoria para processos de homologação junto aos órgãos competentes da aviação.'
    },
    {
      icon: <Activity size={24} />,
      title: 'Plataforma de Dados & Telemetria',
      desc: 'Sincronização em nuvem e análise preditiva de parâmetros FOQA para treinamento, segurança e suporte à decisão.'
    }
  ];

  return (
    <>
      <Header />
      <div className="sobre-nos-page">
        <div className="container">
          
          {/* Breadcrumb / Back Button */}
          <Link to="/" className="btn-back">
            <ArrowLeft size={18} /> Voltar ao Início
          </Link>

          {/* Hero Section */}
          <section className="sobre-hero">
            <div className="badge-tag">
              <Compass size={14} /> Institucional & Engenharia
            </div>
            <h1 className="hero-title text-center">
              Tecnologia, Conectividade e <br />
              <span className="text-accent glow-text">Inteligência Aeronáutica</span>
            </h1>
            <p className="subtitle-text">
              Transformamos a aviação através da integração de engenharia embarcada, transmissão em tempo real e inteligência baseada em dados.
            </p>
          </section>

          {/* Seção 1: Trajetória e Integração JPCA + Flycast */}
          <section className="section-padding sobre-intro-section">
            <div className="about-intro-grid">
              <div className="about-intro-text">
                <h2 className="section-title text-left">
                  A Força da <span className="text-accent glow-text">Experiência Técnica</span>
                </h2>
                <p>
                  A <strong>FLYCAST</strong> consolida anos de trajetória técnica e know-how de ponta na indústria aeronáutica. Nossa história é marcada pela busca contínua em solucionar desafios complexos de comunicação, telemetria e visibilidade operacional a bordo.
                </p>
                <p>
                  A integração das competências apresentadas pela <strong>JPCA</strong> potencializa a Flycast com uma base operacional sólida, unindo a comprovada excelência em transmissão e infraestrutura aeroespacial a uma plataforma tecnológica moderna, ágil e escalável.
                </p>
                <p>
                  Hoje, conectamos aeronaves a centros de comando, escolas de aviação (CIACs), operadores executivos e forças de segurança, transformando horas de voo em dados estratégicos e inteligência de missão.
                </p>

                <div className="sobre-highlights-row mt-4">
                  <div className="highlight-mini-card">
                    <CheckCircle2 size={18} className="text-accent" />
                    <span>Engenharia Especializada</span>
                  </div>
                  <div className="highlight-mini-card">
                    <CheckCircle2 size={18} className="text-accent" />
                    <span>Transmissão Sem Ponto Cego</span>
                  </div>
                  <div className="highlight-mini-card">
                    <CheckCircle2 size={18} className="text-accent" />
                    <span>Soluções Validadas em Voo</span>
                  </div>
                </div>
              </div>

              {/* Imagem Flycast sem bordas */}
              <div className="about-intro-media">
                <div className="sobre-media-card-clean">
                  <img 
                    src={flycastImg} 
                    alt="Flycast" 
                    className="sobre-team-img" 
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Seção 2: Os 4 Pilares Fundamentais */}
          <section className="section-padding sobre-pillars-section">
            <div className="text-center mb-5">
              <h2 className="section-title">
                Nossos Pilares de <span className="text-accent glow-text">Atuação</span>
              </h2>
              <p className="section-subtitle">
                Estrutura multidisciplinar que guia a concepção de cada sistema e produto.
              </p>
            </div>

            <div className="core-pillars-grid">
              {corePillars.map((pillar, idx) => (
                <div key={idx} className="core-pillar-card glow-box">
                  <div className="core-pillar-icon">
                    {pillar.icon}
                  </div>
                  <div className="core-pillar-body">
                    <h3>{pillar.title}</h3>
                    <p>{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Seção 3: Capacidade de Desenvolver, Integrar e Validar */}
          <section className="section-padding sobre-capacidades-section">
            <div className="text-center mb-5">
              <h2 className="section-title">
                Desenvolver, Integrar e <span className="text-accent glow-text">Validar</span>
              </h2>
              <p className="section-subtitle">
                Domínio completo de todo o ciclo de vida do projeto aeronáutico embarcado.
              </p>
            </div>

            <div className="capacidades-grid">
              {capacidades.map((cap, idx) => (
                <div key={idx} className="capacidade-card glow-box">
                  <div className="cap-icon-box">
                    {cap.icon}
                  </div>
                  <h4>{cap.title}</h4>
                  <p>{cap.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Banner de Contato / Próximos Passos */}
          <section className="section-padding" style={{ paddingTop: '10px' }}>
            <div className="culture-banner glow-box">
              <h2 className="section-title" style={{ marginBottom: '1rem', fontSize: '2.4rem' }}>
                Conheça Nossas <span className="text-accent glow-text">Soluções em Operação</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '680px', margin: '0 auto', fontSize: '1.05rem' }}>
                Descubra como o ecossistema Flycast pode ser integrado à sua frota ou instituição de ensino aeronáutico.
              </p>
              <div className="cta-actions">
                <Link to="/solucoes/avioes-ciacs" className="btn-primary">
                  Soluções para Aviões & CIACs <ArrowRight size={18} />
                </Link>
                <Link to="/solucoes/transmissao-aerea" className="btn-outline">
                  Transmissão para Helicópteros <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </section>

          {/* Clientes & Parceiros */}
          <Partners />

        </div>
      </div>
    </>
  );
};

export default SobreNos;

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
  CheckCircle2
} from 'lucide-react';
import Header from './Header';
import Partners from './Partners';
import './SobreNos.css';

const SobreNos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { number: '+10 Anos', label: 'De inovação aeronáutica' },
    { number: '100%', label: 'Conectividade e streaming contínuo' },
    { number: '24/7', label: 'Suporte & Monitoramento ativo' },
    { number: 'High-Res', label: 'Vídeo Full HD & Criptografia' }
  ];

  const pillars = [
    {
      icon: <Radio size={26} />,
      title: 'Conectividade Híbrida AirBind',
      desc: 'Agregação inteligente de múltiplas redes de telefonia celular e satélite para manter o sinal estável mesmo sob oscilações severas em voo.'
    },
    {
      icon: <Cpu size={26} />,
      title: 'Processamento Embarcado (Edge AI)',
      desc: 'Hardware de alta densidade computacional que processa vídeo, áudio de cabine e dados de telemetria diretamente na aeronave.'
    },
    {
      icon: <Lock size={26} />,
      title: 'Criptografia & Segurança Militar',
      desc: 'Transmissão ponta a ponta criptografada para proteger dados estratégicos, operacionais e de inteligência contra interceptações.'
    },
    {
      icon: <Activity size={26} />,
      title: 'Telemetria & Gestão de Frota (FlyHub)',
      desc: 'Painel centralizado em tempo real para controle operacional, rastreamento de rotas e diagnóstico preventivo do comportamento da aeronave.'
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
              <Globe size={14} /> Ecossistema Conectado Flycast
            </div>
            <h1 className="hero-title text-center">
              Liderando a Revolução da <br />
              <span className="text-accent glow-text">Conectividade Aeronáutica</span>
            </h1>
            <p className="subtitle-text">
              Desenvolvemos a próxima geração de tecnologia em transmissão de vídeo ao vivo, telemetria e inteligência de dados para aviação comercial, segurança e missões críticas.
            </p>
          </section>

          {/* Intro Section - Quem Somos */}
          <section className="section-padding" style={{ paddingTop: '20px' }}>
            <div className="about-intro-grid">
              <div className="about-intro-text">
                <h2 className="section-title" style={{ textAlign: 'left', fontSize: '2.2rem', marginBottom: '1.5rem' }}>
                  Quem Somos & <span className="text-accent glow-text">Nossa História</span>
                </h2>
                <p>
                  A <strong>FLYCAST</strong> nasceu com a missão clara de transformar a maneira como aeronaves se comunicam com a terra. Durante anos, operações com aviões e helicópteros enfrentaram pontos cegos, falta de dados em tempo real e investigações baseadas em suposições após eventos críticos.
                </p>
                <p>
                  Combinando engenharia aeronáutica de ponta, desenvolvimento de hardware embarcado e algoritmos proprietários de agregação de sinal, criamos um ecossistema completo que garante <strong>vídeo HD ao vivo, áudio cristalino e telemetria precisa</strong> sob qualquer condição de voo.
                </p>
                <p>
                  Seja no combate a incêndios, patrulhamento aéreo, transmissão jornalística ou transporte VIP e agrícola, nossas soluções entregam visibilidade total e poder de decisão instantâneo para os gestores de frota.
                </p>
              </div>

              {/* Stats Counters */}
              <div className="stats-grid">
                {stats.map((item, idx) => (
                  <div key={idx} className="stat-card glow-box">
                    <div className="stat-number">{item.number}</div>
                    <div className="stat-label">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Mission, Vision, Values */}
          <section className="section-padding">
            <div className="text-center mb-5">
              <h2 className="section-title">
                Nossos <span className="text-accent glow-text">Fundamentos</span>
              </h2>
              <p className="section-subtitle">
                O compromisso com a segurança de voo e a excelência tecnológica guia cada linha de código e circuito que criamos.
              </p>
            </div>

            <div className="mvv-grid">
              <div className="mvv-card glow-box">
                <div className="mvv-icon-wrapper">
                  <Target size={30} />
                </div>
                <h3>Nossa Missão</h3>
                <p>
                  Garantir conectividade contínua, transmissão ao vivo e inteligência operacional para aeronaves em qualquer lugar do mundo, eliminando pontos cegos e elevando a segurança a patamares inéditos.
                </p>
              </div>

              <div className="mvv-card glow-box">
                <div className="mvv-icon-wrapper">
                  <Eye size={30} />
                </div>
                <h3>Nossa Visão</h3>
                <p>
                  Ser a plataforma global de referência em sistemas inteligentes embarcados, streaming aeronáutico e telemetria para a aviação comercial, executiva e de missões críticas.
                </p>
              </div>

              <div className="mvv-card glow-box">
                <div className="mvv-icon-wrapper">
                  <ShieldCheck size={30} />
                </div>
                <h3>Nossos Valores</h3>
                <p>
                  Segurança inflexível, transparência em dados, inovação ágil, robustez técnica extrema e parceria contínua com operadores e órgãos da aviação.
                </p>
              </div>
            </div>
          </section>

          {/* Pillars of Technology */}
          <section className="section-padding">
            <div className="text-center mb-5">
              <h2 className="section-title">
                Pilares Tecnológicos <span className="text-accent glow-text">Flycast</span>
              </h2>
              <p className="section-subtitle">
                Engenharia de alta complexidade simplificada em soluções robustas para o seu dia a dia operacional.
              </p>
            </div>

            <div className="pillars-grid">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="pillar-card glow-box">
                  <div className="pillar-icon">
                    {pillar.icon}
                  </div>
                  <div className="pillar-content">
                    <h4>{pillar.title}</h4>
                    <p>{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Culture Banner / Call to Action */}
          <section className="section-padding" style={{ paddingTop: '20px' }}>
            <div className="culture-banner glow-box">
              <h2 className="section-title" style={{ marginBottom: '1rem', fontSize: '2.4rem' }}>
                Pronto para transformar a <span className="text-accent glow-text">Conectividade da sua Frota?</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem' }}>
                Fale com nossos especialistas em tecnologia aeronáutica e descubra como integrar a linha Flycast às suas aeronaves.
              </p>
              <div className="cta-actions">
                <Link to="/solucoes/flybox" className="btn-primary">
                  Conhecer Soluções <ArrowRight size={18} />
                </Link>
                <Link to="/login" target="_blank" className="btn-outline">
                  Acessar Plataforma
                </Link>
              </div>
            </div>
          </section>

          {/* Partners Section */}
          <Partners />

        </div>

        {/* Footer */}
        <footer className="sobre-footer">
          <div className="container">
            <p>© {new Date().getFullYear()} FLYCAST Tecnologias Aeronáuticas. Todos os direitos reservados.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default SobreNos;

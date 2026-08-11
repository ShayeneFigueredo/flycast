import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, Target, Clock, Settings, TrendingDown, Users, ShieldAlert, Cpu, Cloud, BarChart3, PlaySquare, Plane, Mail, MessageCircle } from 'lucide-react';
import Header from './Header';
import './FlyboxPage.css';

import flyboxImg from '../assets/flybox-gg.png';
import flyboxVoo from '../assets/flybox-voo.mp4';
import ecossistemaImg from '../assets/ecossistema.png';
import imagensFlyboxVoo from '../assets/imagens-flybox.mp4';
import flyboxFlycast from '../assets/FLYBOX-FLYCAST.mp4';
import jpcaPeople from '../assets/jpca-people.png';
import paolaFlybox from '../assets/paola-flybox.mp4';
import pageFlycast from '../assets/page-flycast.png';

const FlyboxPage = () => {
  const consequenciasRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (consequenciasRef.current) {
      observer.observe(consequenciasRef.current);
    }

    return () => {
      if (consequenciasRef.current) observer.unobserve(consequenciasRef.current);
    };
  }, []);

  const [scrollProgress, setScrollProgress] = useState(0);
  const statsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!statsRef.current) return;
      const rect = statsRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const start = windowHeight * 0.9; // Starts animating when 90% down the screen
      const end = windowHeight * 0.4;   // Finishes when 40% down the screen
      
      if (rect.top > start) {
        setScrollProgress(0);
      } else if (rect.top < end) {
        setScrollProgress(1);
      } else {
        const progress = 1 - ((rect.top - end) / (start - end));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Rotating text
  const words = ['inteligência', 'segurança', 'tecnologia', 'informação', 'controle'];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flybox-page-wrapper">
      <Header />
      
      {/* 1. HERO SECTION */}
      <section className="flybox-hero">
        <div className="hero-video-bg">
          <video 
            src={`${flyboxVoo}#1`}
            autoPlay
            loop
            muted
            playsInline
            className="hero-video"
          />
          <div className="hero-video-overlay"></div>
        </div>

        <div className="container hero-content-container">
          <Link to="/#solucoes" className="btn-back mt-5">
            <ArrowLeft size={20} /> Voltar
          </Link>
          <div className="flybox-hero-content">
            <div className="flybox-hero-text">
              <h1 className="flybox-title">
                A NOVA ERA DA<br />
                <span className="title-bold">INSTRUÇÃO</span>
              </h1>
              
              <h2 className="flybox-subtitle">
                Transformar cada voo em <span className="rotating-word">{words[wordIndex]}</span>.
              </h2>
              
              <p className="flybox-desc">
                Eleve o padrão da sua escola, acelere o aprendizado dos alunos e aumente a lucratividade da sua frota com uma plataforma integrada de gestão.
              </p>
              
              <div className="flybox-logo-text mt-5">
                <strong className="flybox-brand-name">F L Y B O X</strong>
                <div className="reveal-container">
                  <Plane className="airplane-icon" size={16} />
                  <span className="small-text reveal-text">DADOS QUE VOAM, DECISÕES QUE PROTEGEM.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CUSTO SECTION */}
      <section className="flybox-custo">
        <div className="container">
          <div className="section-header-left">
            <span className="section-tag text-accent">O CUSTO</span>
            <h2 className="section-title-dark">
              O custo da<br /><span className="text-accent">subjetividade</span><br />na formação de pilotos.
            </h2>
          </div>
          
          <div className="custo-grid mt-5">
            <div className="custo-left">
              <div className="custo-intro-item">
                <p><strong>A instrução ainda depende da percepção do instrutor.</strong></p>
              </div>
              <div className="custo-intro-item">
                <p>Sem dados objetivos, cada debriefing gera <strong className="text-accent">interpretações diferentes</strong>, comprometendo a padronização e o aprendizado.</p>
              </div>
              
              <div className="consequencias mt-5" ref={consequenciasRef}>
                <h4 className="text-accent mb-4">CONSEQUÊNCIAS</h4>
                <div className="consequencia-list">
                  <div className="cons-item">
                    <div className="cons-icon"><Clock size={40} /></div>
                    <div>
                      <strong>Mais horas de voo.</strong>
                      <p>Mais tempo e custo para corrigir os mesmos erros.</p>
                    </div>
                  </div>
                  <div className="cons-item">
                    <div className="cons-icon"><Users size={40} /></div>
                    <div>
                      <strong>Menor padronização.</strong>
                      <p>Diferenças entre instrutores e unidades.</p>
                    </div>
                  </div>
                  <div className="cons-item">
                    <div className="cons-icon"><Settings size={40} /></div>
                    <div>
                      <strong>Mais custos de manutenção.</strong>
                      <p>Técnicas inadequadas geram desgaste e falhas.</p>
                    </div>
                  </div>
                  <div className="cons-item">
                    <div className="cons-icon"><TrendingDown size={40} /></div>
                    <div>
                      <strong>Menos controle operacional.</strong>
                      <p>Pouca rastreabilidade para gestão e segurança.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="custo-right">
               <video 
                 src={`${flyboxVoo}#2`}
                 autoPlay
                 loop
                 muted
                 playsInline
                 className="flybox-voo-video"
               />
            </div>
          </div>
        </div>
      </section>

      {/* 3. REALIDADE CENIPA SECTION */}
      <section className="flybox-realidade">
        <div className="container">
          <div className="section-header-left">
            <span className="section-tag text-accent">A REALIDADE (DADOS CENIPA)</span>
            <h2 className="section-title-dark">
              Onde sua escola perde<br />dinheiro e segurança.
            </h2>
          </div>
          
          <div className="realidade-grid mt-5">
            <div className="cenipa-card glow-box">
              <p>Dados do CENIPA (2016-2026) mostram que a maioria dos acidentes está relacionada ao <strong className="text-accent">fator humano.</strong></p>
            </div>
            
            <div className="stats-row mt-5" ref={statsRef}>
              <div className="stat-circle">
                <div className="circle-chart" style={{'--p': Math.round(58 * scrollProgress)}}><span>{Math.round(58 * scrollProgress)}%</span></div>
                <strong>Erros de julgamento de pilotagem.</strong>
              </div>
              <div className="stat-circle">
                <div className="circle-chart" style={{'--p': Math.round(51 * scrollProgress)}}><span>{Math.round(51 * scrollProgress)}%</span></div>
                <strong>Aplicação incorreta de comandos.</strong>
              </div>
              <div className="stat-circle">
                <div className="circle-chart" style={{'--p': Math.round(42 * scrollProgress)}}><span>{Math.round(42 * scrollProgress)}%</span></div>
                <strong>Falhas na supervisão gerencial.</strong>
              </div>
            </div>
            
            <div className="conclusao-card glow-box mt-5">
              <div className="conclusao-alert">
                <ShieldAlert size={48} className="text-accent" />
                <div>
                  <span className="text-accent font-bold">CONCLUSÃO</span>
                  <h3>A falta de dados objetivos gera <span className="text-accent">riscos operacional.</span></h3>
                </div>
              </div>
              <p className="mt-4 text-center text-muted">A aviação evoluiu em tecnologia, mas a forma como <strong className="text-accent">analisamos e aprendemos não.</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ECOSSISTEMA CONECTADO E MERCADOS */}
      <section className="flybox-ecossistema">
        <div className="container">
          <div className="section-header-left">
            <span className="section-tag text-accent">UM ECOSSISTEMA CONECTADO</span>
            <h2 className="section-title-dark">
              A FlyBox não entrega apenas dados.<br />
              <span className="text-accent">Ela conecta todos os participantes da operação.</span>
            </h2>
            <p className="text-muted mt-3">Uma única plataforma integra toda a cadeia da aviação leve.</p>
          </div>
          
          {/* Timeline / Flow */}
          <div className="ecossistema-flow mt-5">
            <div className="flow-step">
              <strong>01</strong>
              <h4>FlyBox</h4>
              <p>captura as informações.</p>
            </div>
            <div className="flow-step">
              <strong>02</strong>
              <h4>FlyHub</h4>
              <p>organiza e disponibiliza os dados.</p>
            </div>
            <div className="flow-step">
              <strong>03</strong>
              <h4>Instrutores</h4>
              <p>realizam debriefings objetivos.</p>
            </div>
            <div className="flow-step">
              <strong>04</strong>
              <h4>Alunos</h4>
              <p>têm processo de aprendizagem catalisado.</p>
            </div>
            <div className="flow-step">
              <strong>05</strong>
              <h4>Gestores</h4>
              <p>acompanham indicadores operacionais.</p>
            </div>
            <div className="flow-step">
              <strong>06</strong>
              <h4>Proprietários</h4>
              <p>têm visão clara da performance e dos resultados.</p>
            </div>
            <div className="flow-step">
              <strong>07</strong>
              <h4>Fabricantes</h4>
              <p>utilizam dados reais para evolução de seus produtos.</p>
            </div>
          </div>
          <hr style={{ margin: '8rem 0', borderColor: 'rgba(255, 255, 255, 0.1)' }} />

          {/* Mercados Atendidos */}
          <div className="mercados-section" style={{ backgroundColor: 'rgba(0, 136, 255, 0.1)', padding: '4rem', borderRadius: '24px', margin: '2rem 0' }}>
            <div className="section-header-left">
              <span className="section-tag text-accent">MERCADOS ATENDIDOS</span>
              <h2 className="section-title-dark">
                A plataforma foi desenvolvida para atender diferentes segmentos da aviação leve.
              </h2>
            </div>
            
            <div className="mercados-grid mt-4">
              <div className="mercado-card">
                <div className="mercado-icon"><Users size={28}/></div>
                <h4>Escolas de Aviação</h4>
                <p>Padronização do treinamento e melhoria do desempenho dos alunos.</p>
              </div>
              <div className="mercado-card">
                <div className="mercado-icon"><User size={28}/></div>
                <h4>Proprietários</h4>
                <p>Visão completa da operação, segurança e performance da aeronave.</p>
              </div>
              <div className="mercado-card">
                <div className="mercado-icon"><Settings size={28}/></div>
                <h4>Fabricantes</h4>
                <p>Dados reais de utilização para desenvolvimento e evolução de aeronaves e componentes.</p>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div style={{ margin: '10rem auto 4rem', display: 'flex', justifyContent: 'center' }}>
            <div style={{ textAlign: 'left', padding: '0 20px' }}>
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: '800', lineHeight: '1.2', color: 'var(--text-primary)', letterSpacing: '-1px' }}>
                <span className="text-accent">&ldquo;</span>O que <span className="text-accent">não pode ser</span><br />
                <span className="text-accent">medido,</span> não pode ser<br />
                <span className="text-accent">melhorado.&rdquo;</span>
              </h2>
              <div style={{ width: '80px', height: '6px', backgroundColor: 'var(--neon-blue)', marginTop: '2rem' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ARQUITETURA / PASSO A PASSO */}
      <section className="flybox-arquitetura">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">ECOSSISTEMA <span className="text-accent">FLYBOX</span></h2>
            <p className="text-muted">Da aeronave à inteligência operacional.</p>
          </div>
          
          <div className="arquitetura-cards">
            <div className="arq-card glow-box">
              <div className="arq-badge">1</div>
              <h3>HARDWARE FLYBOX</h3>
              <img src={flyboxImg} alt="Hardware Flybox" className="arq-img" />
              <p className="text-sm">Dispositivo embarcado responsável pela captura de toda a operação da aeronave.</p>
              <ul className="arq-list">
                <li>Vídeo do cockpit</li>
                <li>Áudio da cabine</li>
                <li>Telemetria da aeronave</li>
                <li>GPS</li>
                <li>Conectividade LTE / Wi-Fi</li>
                <li>Armazenamento local</li>
              </ul>
              <div className="arq-footer text-accent font-bold">Captura todos os dados do voo em tempo real.</div>
            </div>
            
            <div className="arq-arrow"><ArrowRight size={32} className="text-accent"/></div>
            
            <div className="arq-card glow-box">
              <div className="arq-badge">2</div>
              <h3>APP FLY RECORD</h3>
              <div className="arq-img-placeholder phone-shape" style={{ overflow: 'hidden', padding: 0, position: 'relative', background: 'transparent' }}>
                <video 
                  src={`${flyboxVoo}#3`} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, borderRadius: 'inherit' }}
                />
              </div>
              <p className="text-sm">Aplicativo utilizado para visualizar, sincronizar e enviar os registros do voo para a plataforma FlyHub.</p>
              <div className="arq-footer text-accent font-bold">O elo entre a aeronave e a nuvem.</div>
            </div>
            
            <div className="arq-arrow"><ArrowRight size={32} className="text-accent"/></div>
            
            <div className="arq-card glow-box">
              <div className="arq-badge">3</div>
              <h3>FLYHUB</h3>
              <div className="arq-img-placeholder laptop-shape" style={{ overflow: 'hidden', padding: 0, position: 'relative', background: 'transparent' }}>
                <video 
                  src={imagensFlyboxVoo} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, borderRadius: 'inherit' }}
                />
              </div>
              <p className="text-sm">Plataforma web para armazenamento, análise, replay e gestão operacional dos voos.</p>
              <div className="arq-footer text-accent font-bold">Os dados transformados em inteligência operacional.</div>
            </div>
          </div>
          
          <div className="text-center mt-5">
            <img src={ecossistemaImg} alt="Ecossistema Flybox" style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px' }} />
          </div>
          
          <div className="dados-inteligencia glow-box mt-5">
            <div className="text-center mb-4"><span className="text-accent font-bold">DADOS &rarr; INTELIGÊNCIA</span></div>
            <div className="di-steps">
              <div className="di-step">
                <Cpu className="text-accent" size={32}/>
                <div>
                  <strong>1 Captura</strong>
                  <p>Hardware registra toda a operação.</p>
                </div>
              </div>
              <div className="di-step">
                <Cloud className="text-accent" size={32}/>
                <div>
                  <strong>2 Sincronização</strong>
                  <p>Os dados são enviados automaticamente para o FlyHub.</p>
                </div>
              </div>
              <div className="di-step">
                <BarChart3 className="text-accent" size={32}/>
                <div>
                  <strong>3 Análise</strong>
                  <p>Todos os registros ficam organizados em uma linha do tempo sincronizada.</p>
                </div>
              </div>
              <div className="di-step">
                <PlaySquare className="text-accent" size={32}/>
                <div>
                  <strong>4 Debriefing Inteligente</strong>
                  <p>Replay completo do voo com vídeo, áudio, telemetria, GPS e instrumentos sincronizados.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 6. TRANSIÇÃO DIGITAL / OPÇÕES DE ADOÇÃO */}
      <section className="flybox-white-section transicao-section">
        <div className="container">
          <div className="transicao-header">
            <span className="text-accent uppercase font-bold text-sm">O FUTURO DO TREINAMENTO: IA MULTIMODAL</span>
            <h2 className="transicao-title">Flexibilidade total para<br/>entrar na transição digital.</h2>
          </div>
          
          <div className="opcoes-adocao mt-5">
            <div className="opcoes-label">OPÇÕES DE ADOÇÃO NA SUA FROTA</div>
            
            <div className="opcoes-cards-container">
              
              <div className="opcao-card hw-card">
                <div className="opcao-header">
                  <h3>Hardware <span className="text-accent">FlyBox</span></h3>
                </div>
                <div className="opcao-body">
                  <div className="opcao-img-container">
                    <img src={flyboxImg} alt="Hardware Flybox" />
                  </div>
                  <ul className="opcao-list">
                    <li><span className="dot">•</span> Instalação física autônoma</li>
                    <li><span className="dot">•</span> +100 parâmetros lidos</li>
                    <li><span className="dot">•</span> Autonomia de 2.000h</li>
                    <li><span className="dot">•</span> Proteção física imune a pane</li>
                  </ul>
                </div>
              </div>

              <div className="opcao-card app-card">
                <div className="opcao-header">
                  <h3>App <span className="text-accent">Fly Record</span></h3>
                </div>
                <div className="opcao-body">
                  <div className="opcao-placeholder-img" style={{ padding: 0, overflow: 'hidden' }}>
                    <video 
                      src={imagensFlyboxVoo} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <ul className="opcao-list">
                    <li><span className="dot">•</span> Solução em celular/tablet</li>
                    <li><span className="dot">•</span> Captura áudio, vídeo e GPS</li>
                    <li><span className="dot">•</span> Zero custo de hardware</li>
                    <li><span className="dot">•</span> Ideal para iniciar hoje mesmo</li>
                  </ul>
                </div>
              </div>

            </div>

            <div className="plataforma-card">
              <div className="plat-left">
                <div className="opcao-header">
                  <h3>Plataforma <span className="text-accent">FlyHub</span></h3>
                </div>
                <p>Ambas as soluções sincronizam automaticamente na nuvem ao pousar, centralizando todos os alunos e aeronaves no mesmo painel web.</p>
              </div>
              <div className="plat-center">
                <div className="cloud-logo">FLYHUB</div>
              </div>
              <div className="plat-right">
                <div className="plat-dashboard-placeholder" style={{ padding: 0, overflow: 'hidden' }}>
                  <video 
                    src={flyboxFlycast} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="plat-features">
                  <div className="plat-feat-item"><Users size={16} className="text-accent"/> Todos os alunos em um só lugar</div>
                  <div className="plat-feat-item"><Plane size={16} className="text-accent"/> Todas as aeronaves monitoradas</div>
                  <div className="plat-feat-item"><BarChart3 size={16} className="text-accent"/> Dados que geram decisões</div>
                  <div className="plat-feat-item"><ShieldAlert size={16} className="text-accent"/> Mais segurança, menos custos</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. IA MULTIMODAL */}
      <section className="flybox-white-section ia-multimodal-section">
        <div className="container">
          <div className="ia-split-layout">
            <div className="ia-left">
              <span className="text-accent uppercase font-bold text-sm">IA MULTIMODAL<br/>O FUTURO DO DEBRIEFING</span>
              
              <div className="ia-text-block mt-4">
                <h2>Cada voo termina.<br/><span className="text-accent">O aprendizado começa.</span></h2>
                <p>A FlyHub utiliza Inteligência Artificial Multimodal para analisar automaticamente vídeo, áudio, telemetria e GPS, gerando relatórios objetivos e recomendações personalizadas poucos segundos após o pouso.</p>
              </div>

              <div className="ia-divider"></div>

              <div className="ia-text-block">
                <h2>O instrutor analisa.<br/><span className="text-accent">A IA potencializa.</span></h2>
                <p>A inteligência artificial interpreta milhares de dados simultaneamente e entrega uma análise que seria impossível realizar manualmente.</p>
              </div>
            </div>
            <div className="ia-right">
              <img 
                src={pageFlycast} 
                alt="IA Report Screenshot" 
                style={{ width: '100%', height: 'auto', borderRadius: '16px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. RENTABILIDADE CIAC */}
      <section className="flybox-white-section ciac-section">
        <div className="container">
          <div className="ciac-split">
            <div className="ciac-left">
              <h2>Como a FlyBox aumenta a <span className="text-accent">rentabilidade</span> do seu CIAC.</h2>
              <div className="ciac-divider"></div>
              <p>A <span className="text-accent">FlyHub</span> utiliza <span className="text-accent">Inteligência Artificial Multimodal</span> para analisar automaticamente <span className="text-accent">vídeo, áudio, telemetria e GPS</span>, gerando <span className="text-accent">relatórios objetivos e recomendações</span> personalizadas poucos segundos após o pouso.</p>
            </div>
            
            <div className="ciac-right">
              <div className="ciac-table">
                <div className="ciac-header-row">
                  <div className="ciac-col-desafio"><span className="circle-x">X</span> DESAFIO</div>
                  <div className="ciac-col-solucao"><span className="circle-check">✓</span> SOLUÇÃO FLYBOX</div>
                </div>
                
                <div className="ciac-row">
                  <div className="ciac-cell">
                    <strong>Aulas repetidas</strong>
                    <p>Alunos repetem voos por falta de clareza e análise ineficiente.</p>
                  </div>
                  <div className="ciac-cell bg-blue-highlight">
                    <strong>Debriefing cirúrgico</strong>
                    <p>Análise objetiva e precisa que acelera o aprendizado e aumenta a taxa de aprovação.</p>
                  </div>
                </div>

                <div className="ciac-row">
                  <div className="ciac-cell">
                    <strong>Aeronaves paradas</strong>
                    <p>Manutenção corretiva inesperada gera custos e reduz disponibilidade.</p>
                  </div>
                  <div className="ciac-cell bg-blue-highlight">
                    <strong>Manutenção preditiva</strong>
                    <p>Monitoramento contínuo e alertas inteligentes antecipam falhas e programam manutenções.</p>
                  </div>
                </div>

                <div className="ciac-row">
                  <div className="ciac-cell">
                    <strong>Custo de seguro alto</strong>
                    <p>Falta de histórico confiável e auditável aumenta o risco percebido.</p>
                  </div>
                  <div className="ciac-cell bg-blue-highlight">
                    <strong>Histórico auditável</strong>
                    <p>Dados objetivos e rastreáveis que reduzem o risco e o custo do seguro.</p>
                  </div>
                </div>

                <div className="ciac-row">
                  <div className="ciac-cell">
                    <strong>Dificuldade em atrair novos alunos</strong>
                    <p>Escolas sem diferencial perdem oportunidades.</p>
                  </div>
                  <div className="ciac-cell bg-blue-highlight">
                    <strong>Tecnologia que vende</strong>
                    <p>Inovação e dados em voo como diferencial que atraem e fidelizam novos alunos.</p>
                  </div>
                </div>

                <div className="ciac-row">
                  <div className="ciac-cell border-0">
                    <strong>Baixa rentabilidade</strong>
                    <p>Processos manuais, retrabalho e falta de dados limitam o lucro.</p>
                  </div>
                  <div className="ciac-cell bg-blue-highlight border-0">
                    <strong>Mais lucro</strong>
                    <p>Decisões baseadas em dados aumentam a performance e a satisfação dos alunos.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA ERA DA INSTRUÇÃO */}
      <section className="flybox-white-section cta-section">
        <div className="container">
          <div className="cta-split">
            <div className="cta-left">
              <h2>Leve a sua escola para a <span className="text-accent">era da instrução baseada em dados.</span></h2>
              <div className="cta-divider"></div>
              <p>A FlyHub transforma cada voo em <span className="text-accent">informação estratégica</span> para melhorar o <span className="text-accent">aprendizado</span>, a <span className="text-accent">segurança</span> e a <span className="text-accent">performance</span> da sua escola.</p>
              
              <div className="cta-contacts mt-5" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="https://wa.me/5534999793418" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#25D366', borderColor: '#25D366', color: '#fff', textDecoration: 'none' }}>
                  <MessageCircle size={20} />
                  +55 34 99979-3418
                </a>
                <a href="mailto:joao@jpca.tv" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                  <Mail size={20} />
                  joao@jpca.tv
                </a>
              </div>
            </div>
            
            <div className="cta-right">
              <div className="ia-dashboard-placeholder" style={{ padding: 0, overflow: 'hidden', position: 'relative' }}>
                <video 
                  src={paolaFlybox} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

// Simple ArrowRight component since it's not imported at the top
const ArrowRight = ({size, className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
)

export default FlyboxPage;

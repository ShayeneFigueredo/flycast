import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Plane, 
  Cpu, 
  Smartphone, 
  Cloud, 
  BarChart3, 
  Sparkles, 
  CheckCircle2, 
  XCircle,
  AlertTriangle, 
  Layers, 
  Database, 
  Server, 
  ShieldCheck, 
  ArrowRight, 
  MessageCircle, 
  HelpCircle,
  Clock,
  Settings,
  TrendingDown,
  TrendingUp,
  Users,
  Activity,
  Award,
  Zap,
  Mail,
  Phone
} from 'lucide-react';
import Header from './Header';
import Partners from './Partners';
import './FlyboxPage.css';

import flyboxImg from '../assets/flybox-gg.png';
import flyhubImg from '../assets/flyhub.png';
import flyhubSolucoes from '../assets/solucoes/flyhub.png';
import inpaerLogo from '../assets/clientes/inpaer.png';
import coltImg from '../assets/colt.png';
import pageFlycast from '../assets/page-flycast.png';
import fonteDadosImg from '../assets/FONTE DE DADOS - flycast.png';
import telaFlyhubImg from '../assets/tela-flyhub.png';

// Vídeos Flybox
import flyboxVoo from '../assets/flybox-voo.mp4';
import materiaFlycast from '../assets/materia-colt.mp4';
import imagensFlyboxVoo from '../assets/imagens-flybox.mp4';
import colt3dVideo from '../assets/colt-3d.mp4';
import paolaFlybox from '../assets/paola-flybox.mp4';
import videoColtBanner from '../assets/video-colt-banner.mp4';

const FlyboxPage = () => {
  const [capturaTab, setCapturaTab] = useState('flybox'); // 'flybox' | 'flyrecord'

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flybox-page-wrapper">
      <Header />

      {/* 1. HERO SECTION — A NOVA ERA DA INSTRUÇÃO */}
      <section className="flybox-hero">
        <div className="hero-video-bg">
          <video 
            src={videoColtBanner}
            autoPlay
            loop
            muted
            playsInline
            className="hero-video"
          />
          <div className="hero-video-overlay"></div>
        </div>

        <div className="container hero-content-container">
          <Link to="/" className="btn-back">
            <ArrowLeft size={18} /> Voltar ao Início
          </Link>

          <div className="flybox-hero-content">
            <h1 className="flybox-title">
              A Nova Era da <br />
              <span className="title-bold text-accent glow-text">Instrução de Voo</span>
            </h1>

            <p className="flybox-desc">
              Transforme cada voo em dados operacionais. Eleve o padrão da sua escola, acelere o aprendizado dos alunos e aumente a rentabilidade da sua frota com uma plataforma de gestão integrada.
            </p>

            <div className="hero-cta-row">
              <a 
                href="https://wa.me/553499793418?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20demonstra%C3%A7%C3%A3o%20do%20FlyHub."
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
              >
                <MessageCircle size={18} />
                Solicite uma Demonstração do FlyHub
              </a>
              <a href="#como-funciona" className="btn-outline">
                Ver Como Funciona
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. O PROBLEMA DA INSTRUÇÃO SUBJETIVA */}
      <section className="subjetividade-section section-padding">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">
              O Custo Oculto da <span className="text-accent glow-text">Subjetividade na Instrução</span>
            </h2>
            <p className="section-subtitle">
              A instrução tradicional depende fortemente da percepção humana. Sem dados objetivos, o debriefing fica sujeito a interpretações diferentes, o que reduz a padronização, gera retrabalho e aumenta o número de horas de voo improdutivas.
            </p>
          </div>

          <div className="erros-container">
            <h3 className="erros-heading text-center">Principais Erros</h3>
            <div className="erros-grid">
              <div className="erro-card">
                <div className="erro-icon-box">
                  <Users size={28} />
                </div>
                <h3>Erros de Julgamento de Pilotagem</h3>
                <p>
                  Dificuldade em identificar a causa raiz de aproximações desestabilizadas e arredondamentos imprecisos sem dados de telemetria e vídeo sincronizados.
                </p>
              </div>

              <div className="erro-card">
                <div className="erro-icon-box">
                  <Settings size={28} />
                </div>
                <h3>Aplicação Incorreta de Comandos</h3>
                <p>
                  Variações sutis no uso de manche, leme e potência passam despercebidas pelo olho nu do instrutor, gerando desgaste mecânico e vícios de pilotagem.
                </p>
              </div>

              <div className="erro-card">
                <div className="erro-icon-box">
                  <TrendingDown size={28} />
                </div>
                <h3>Falhas na Supervisão Gerencial</h3>
                <p>
                  Falta de visibilidade centralizada sobre o desempenho real de cada instrutor e turma, impedindo a padronização e o controle de segurança operacional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ECOSSISTEMA FLYHUB: COMO FUNCIONA (FLUXO 3 ETAPAS) */}
      <section className="fluxo-section section-padding" id="como-funciona">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title text-white">
              Da aeronave à inteligência operacional.
            </h2>
            <p className="section-subtitle fluxo-desc-intro">
              Substituímos as várias telas explicativas por um fluxo simples de três etapas: <strong>Captura</strong> &rarr; <strong>Sincronização</strong> &rarr; <strong>Análise</strong>.
            </p>
          </div>

          <div className="etapas-fluxo-grid">
            {/* ETAPA 1: CAPTURA */}
            <div className="etapa-flow-card">
              <div className="etapa-card-header">
                <span className="etapa-badge-number">01</span>
                <div>
                  <h3 className="etapa-title">Etapa 1 — Captura</h3>
                  <p className="etapa-subtitle">Hardware ou aplicativo</p>
                </div>
              </div>

              {/* Chave Seletora / Abas */}
              <div className="captura-toggle-pill">
                <button 
                  type="button"
                  className={`toggle-btn ${capturaTab === 'flybox' ? 'active' : ''}`}
                  onClick={() => setCapturaTab('flybox')}
                >
                  <Cpu size={15} />
                  FlyBox
                </button>
                <button 
                  type="button"
                  className={`toggle-btn ${capturaTab === 'flyrecord' ? 'active' : ''}`}
                  onClick={() => setCapturaTab('flyrecord')}
                >
                  <Smartphone size={15} />
                  Fly Record
                </button>
              </div>

              {/* Conteúdo Aba FlyBox */}
              {capturaTab === 'flybox' && (
                <div className="captura-tab-panel">
                  <div className="etapa-image-clean">
                    <img src={flyboxImg} alt="FlyBox — hardware embarcado" className="etapa-media-img" />
                  </div>
                  <div className="captura-tab-desc">
                    <h4>FlyBox — hardware embarcado</h4>
                    <p>
                      Solução física autônoma que registra mais de 100 parâmetros, incluindo telemetria, GPS, vídeo e áudio. Possui alimentação independente e mantém a captura mesmo diante de falhas na alimentação elétrica da aeronave.
                    </p>
                  </div>
                </div>
              )}

              {/* Conteúdo Aba Fly Record */}
              {capturaTab === 'flyrecord' && (
                <div className="captura-tab-panel">
                  <div className="etapa-video-clean">
                    <video 
                      src={imagensFlyboxVoo} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="tab-preview-video"
                    />
                  </div>
                  <div className="captura-tab-desc">
                    <h4>Fly Record — aplicativo</h4>
                    <p>
                      Solução para tablet ou celular que captura áudio, vídeo e GPS, permitindo iniciar a digitalização da instrução sem investimento inicial em hardware embarcado.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* ETAPA 2: SINCRONIZAÇÃO */}
            <div className="etapa-flow-card">
              <div className="etapa-card-header">
                <span className="etapa-badge-number">02</span>
                <div>
                  <h3 className="etapa-title">Etapa 2 — Sincronização</h3>
                  <p className="etapa-subtitle">Nuvem e segurança</p>
                </div>
              </div>

              <div className="etapa-sync-content">
                <div className="etapa-image-clean">
                  <img src={flyhubSolucoes} alt="FlyHub Sincronização" className="etapa-media-img" />
                </div>

                <div className="captura-tab-desc text-center">
                  <h4>Envio Automático Pós-Pouso</h4>
                  <p>
                    Após o pouso, os dados capturados são enviados automaticamente e com segurança para os servidores, conectando a aeronave à plataforma.
                  </p>
                </div>
              </div>
            </div>

            {/* ETAPA 3: ANÁLISE CENTRALIZADA */}
            <div className="etapa-flow-card">
              <div className="etapa-card-header">
                <span className="etapa-badge-number">03</span>
                <div>
                  <h3 className="etapa-title">Etapa 3 — Análise centralizada</h3>
                  <p className="etapa-subtitle">Plataforma FlyHub</p>
                </div>
              </div>

              <div className="etapa-analise-content">
                {/* REALISTIC TABLET MOCKUP RESTAURADO */}
                <div className="realistic-tablet-frame">
                  <div className="tablet-chassis">
                    <div className="tablet-camera-notch"></div>
                    <div className="tablet-screen-display">
                      <img src={flyhubImg} alt="FlyHub na tela do Tablet" className="tablet-screen-asset" />
                      <div className="tablet-glare-reflection"></div>
                    </div>
                  </div>
                </div>

                <div className="captura-tab-desc text-center mt-3">
                  <h4>Plataforma FlyHub</h4>
                  <p>
                    O FlyHub organiza vídeo, áudio, instrumentos e eventos de voo em uma linha do tempo sincronizada, acessível a alunos, instrutores e gestores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTELIGÊNCIA ARTIFICIAL MULTIMODAL */}
      <section className="ia-section section-padding" id="ia-multimodal">
        <div className="container">
          <div className="ia-split-grid">
            <div className="ia-text-column">
              <h2 className="ia-title">
                O instrutor analisa. <br />
                <span className="text-accent glow-text">A Inteligência Artificial potencializa.</span>
              </h2>
              <p className="ia-description">
                O FlyHub utiliza <strong>Inteligência Artificial Multimodal</strong> para analisar gravações, telemetria e dados de GPS logo após o corte do motor, transformando os registros do voo em informações úteis para o debriefing.
              </p>
            </div>

            <div className="ia-image-column">
              {/* MOCKUP DO TABLET COM A TELA FLYHUB */}
              <div className="ia-tablet-mockup-wrapper">
                <div className="ia-tablet-chassis">
                  <div className="ia-tablet-camera-notch"></div>
                  
                  <div className="flyhub-panel-screen">
                    <img 
                      src={telaFlyhubImg} 
                      alt="Tela FlyHub - IA e Painel de Instrução" 
                      className="ia-tablet-screen-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CARDS ABAIXO COBRINDO TODA A LARGURA */}
          <div className="ia-features-list">
            <div className="ia-feature-card">
              <h4>Score de voo</h4>
              <p>Pontuação automatizada baseada em parâmetros operacionais previamente definidos.</p>
            </div>

            <div className="ia-feature-card">
              <h4>Detecção de eventos críticos</h4>
              <p>Identificação de eventos como hard landing, overspeed e variações anormais.</p>
            </div>

            <div className="ia-feature-card">
              <h4>Pontos fortes e oportunidades de melhoria</h4>
              <p>Indicação dos momentos em que o aluno atingiu o padrão esperado e daqueles que exigem correção.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. IMPACTO PARA O CIAC (COMPARAÇÃO B2B MODERNA) */}
      <section className="ciac-impacto-section section-padding" id="ciac">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">
              Impacto direto na <span className="text-accent glow-text">rentabilidade do seu CIAC.</span>
            </h2>
            <p className="section-subtitle">
              Uma comparação direta entre os desafios operacionais tradicionais e as respostas inteligentes oferecidas pelo FlyHub.
            </p>
          </div>

          <div className="ciac-b2b-table-container">
            <div className="ciac-b2b-table">
              {/* Header da Tabela */}
              <div className="ciac-table-header">
                <div className="ciac-th-col ciac-th-desafio">
                  <XCircle size={18} className="th-icon-desafio" />
                  <span>DESAFIO</span>
                </div>
                <div className="ciac-th-col ciac-th-solucao">
                  <CheckCircle2 size={18} className="th-icon-solucao" />
                  <span>SOLUÇÃO FLYBOX</span>
                </div>
              </div>

              {/* Linhas da Tabela */}
              <div className="ciac-table-body">
                {/* Linha 1 */}
                <div className="ciac-table-row">
                  <div className="ciac-cell ciac-cell-desafio">
                    <h4>Aulas repetidas</h4>
                    <p>Alunos repetem voos por falta de clareza e análise ineficiente.</p>
                  </div>
                  <div className="ciac-cell ciac-cell-solucao">
                    <h4>Debriefing cirúrgico</h4>
                    <p>Análise objetiva e precisa que acelera o aprendizado e aumenta a taxa de aprovação.</p>
                  </div>
                </div>

                {/* Linha 2 */}
                <div className="ciac-table-row">
                  <div className="ciac-cell ciac-cell-desafio">
                    <h4>Aeronaves paradas</h4>
                    <p>Manutenção corretiva inesperada gera custos e reduz disponibilidade.</p>
                  </div>
                  <div className="ciac-cell ciac-cell-solucao">
                    <h4>Manutenção preditiva</h4>
                    <p>Monitoramento contínuo e alertas inteligentes antecipam falhas e programam manutenções.</p>
                  </div>
                </div>

                {/* Linha 3 */}
                <div className="ciac-table-row">
                  <div className="ciac-cell ciac-cell-desafio">
                    <h4>Custo de seguro alto</h4>
                    <p>Falta de histórico confiável e auditável aumenta o risco percebido.</p>
                  </div>
                  <div className="ciac-cell ciac-cell-solucao">
                    <h4>Histórico auditável</h4>
                    <p>Dados objetivos e rastreáveis que reduzem o risco e o custo do seguro.</p>
                  </div>
                </div>

                {/* Linha 4 */}
                <div className="ciac-table-row">
                  <div className="ciac-cell ciac-cell-desafio">
                    <h4>Dificuldade em atrair novos alunos</h4>
                    <p>Escolas sem diferencial perdem oportunidades.</p>
                  </div>
                  <div className="ciac-cell ciac-cell-solucao">
                    <h4>Tecnologia que vende</h4>
                    <p>Inovação e dados em voo como diferencial que atraem e fidelizam novos alunos.</p>
                  </div>
                </div>

                {/* Linha 5 */}
                <div className="ciac-table-row">
                  <div className="ciac-cell ciac-cell-desafio">
                    <h4>Baixa rentabilidade</h4>
                    <p>Processos manuais, retrabalho e falta de dados limitam o lucro.</p>
                  </div>
                  <div className="ciac-cell ciac-cell-solucao">
                    <h4>Mais lucro</h4>
                    <p>Decisões baseadas em dados aumentam a performance e a satisfação dos alunos.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ARQUITETURA TÉCNICA DO ECOSSISTEMA */}
      <section className="arquitetura-linear-section section-padding">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">
              Arquitetura Técnica do <span className="text-accent glow-text">Ecossistema</span>
            </h2>
            <p className="section-subtitle">
              Cinco níveis de leitura linear que estruturam o fluxo de dados desde a aeronave até as tomadas de decisão.
            </p>
          </div>

          <div className="arquitetura-split-grid">
            {/* Coluna Esquerda: Cards na Vertical */}
            <div className="arch-vertical-list">
              <div className="arch-step-vertical">
                <div className="arch-step-top">
                  <span className="arch-num-badge">1</span>
                  <h4>Aquisição</h4>
                </div>
                <p>AirBind, FlyBox e importação direta de arquivos.</p>
              </div>

              <div className="arch-step-vertical">
                <div className="arch-step-top">
                  <span className="arch-num-badge">2</span>
                  <h4>Processamento</h4>
                </div>
                <p>Algoritmos analíticos de FOQA aeronáutico.</p>
              </div>

              <div className="arch-step-vertical">
                <div className="arch-step-top">
                  <span className="arch-num-badge">3</span>
                  <h4>Base de Dados</h4>
                </div>
                <p>Flight Database centralizado, criptografado e seguro.</p>
              </div>

              <div className="arch-step-vertical">
                <div className="arch-step-top">
                  <span className="arch-num-badge">4</span>
                  <h4>Plataforma</h4>
                </div>
                <p>FlyHub Web com IA Multimodal e Replay 3D.</p>
              </div>

              <div className="arch-step-vertical">
                <div className="arch-step-top">
                  <span className="arch-num-badge">5</span>
                  <h4>Aplicações</h4>
                </div>
                <p>Pilotos & CIACs, Gestores Operacionais e Fabricantes.</p>
              </div>
            </div>

            {/* Coluna Direita: Imagem Inteira Fonte de Dados */}
            <div className="arch-image-column">
              <div className="arch-image-card">
                <img 
                  src={fonteDadosImg} 
                  alt="Arquitetura Fonte de Dados do Ecossistema FlyCast" 
                  className="arch-full-image" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ENDOSSO DA INDÚSTRIA — INPAER COLT */}
      <section className="inpaer-endorsement-section section-padding" id="inpaer">
        <div className="container">
          <div className="inpaer-banner dark-blue-box">
            <div className="inpaer-text-col">
              <div className="inpaer-brand-row">
                <img src={inpaerLogo} alt="Inpaer" className="inpaer-logo-img" />
                <span className="endorsement-tag">HOMOLOGAÇÃO DE FÁBRICA</span>
              </div>
              <h2 className="inpaer-title">Tecnologia integrada de fábrica pela Inpaer.</h2>
              <p className="inpaer-desc">
                O <strong>Inpaer Colt</strong>, referência em qualidade e segurança nas Américas, pode sair de fábrica com a tecnologia de captura e telemetria <strong>FlyBox</strong> integrada à aeronave.
              </p>
              
              <div className="inpaer-cta-box mt-4">
                <p className="cta-lead-text">Pronto para basear sua instrução em dados?</p>
                <a 
                  href="https://wa.me/553499793418?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20consultor%20sobre%20a%20FlyBox%20e%20FlyHub."
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary inpaer-btn-cta"
                >
                  <MessageCircle size={18} />
                  Fale com um consultor
                </a>
              </div>
            </div>

            <div className="inpaer-media-col">
              <img 
                src={coltImg} 
                alt="Inpaer Colt com FlyBox integrada de fábrica" 
                className="colt-right-borderless-img" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. SEÇÃO FINAL / CONTATO — LEVE SUA ESCOLA PARA A ERA DOS DADOS */}
      <section className="flybox-final-cta-section section-padding" id="contato">
        <div className="container">
          <div className="final-cta-split-grid">
            <div className="final-cta-text-col">
              <h2 className="final-cta-title">
                Leve a sua escola <br />
                para a <span className="text-accent glow-text">era da instrução baseada em dados.</span>
              </h2>

              <div className="final-cta-decor-line"></div>

              <p className="final-cta-desc">
                A <strong>FlyHub</strong> transforma cada voo em <span className="highlight-cyan">informação estratégica</span> para melhorar o <span className="highlight-cyan">aprendizado</span>, a <span className="highlight-cyan">segurança</span> e a <span className="highlight-cyan">performance</span> da sua escola.
              </p>

              <div className="final-cta-buttons-stack">
                <a 
                  href="https://wa.me/5534999793418?text=Ol%C3%A1!%20Gostaria%20de%20levar%20o%20FlyHub%20para%20minha%20escola."
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary final-btn-pill"
                >
                  <MessageCircle size={20} />
                  +55 34 99979-3418
                </a>

                <a 
                  href="mailto:joao@jpca.tv" 
                  className="btn-primary final-btn-pill"
                >
                  <Mail size={20} />
                  JOAO@JPCA.TV
                </a>
              </div>
            </div>

            <div className="final-cta-phone-col">
              <div className="phone-mockup-wrapper">
                <div className="phone-mockup-chassis">
                  <div className="phone-camera-notch"></div>
                  <div className="phone-screen-display">
                    <video 
                      src={paolaFlybox}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="phone-video-media"
                    />
                    <div className="phone-glare-overlay"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTES */}
      <Partners />
    </div>
  );
};

export default FlyboxPage;

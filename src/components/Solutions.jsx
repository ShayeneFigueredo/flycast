import React from 'react';
import { Link } from 'react-router-dom';
import { Radio, Plane, ArrowRight, ShieldCheck } from 'lucide-react';
import './Solutions.css';

import livecastImg from '../assets/solucoes/livecast2.png';
import extenderImg from '../assets/solucoes/extender-1.png';
import flyboxImg from '../assets/solucoes/flybox.png';
import airbindImg from '../assets/solucoes/airbind.png';
import flyhubImg from '../assets/solucoes/flyhub.png';
import cameraImg from '../assets/camera.png';

const Solutions = () => {
  const helicopterSolutions = [
    {
      title: 'LIVECAST PRO',
      badge: 'Hardware Embarcado',
      image: livecastImg,
      desc: 'Transmissão celular híbrida de vídeo ao vivo em alta definição com soma de banda (bonding) para até 12 modems 5G.',
      features: ['Gabinete em alumínio maciço', 'Sistema LiveCooling', 'Compatível com 5G e Extender'],
      link: '/solucoes/transmissao-aerea'
    },
    {
      title: 'EXTENDER',
      badge: 'Unidade Portátil',
      image: extenderImg,
      desc: 'Amplificador de sinal e modems com antenas de alto ganho para conectar torres remotas em voos de longa distância.',
      features: ['4 modems de alta capacidade', 'Antenas externas potentes', 'Conexão via Ethernet'],
      link: '/solucoes/transmissao-aerea'
    },
    {
      title: 'SERVIÇOS INTEGRADOS',
      badge: 'Serviço Especializado',
      image: cameraImg,
      desc: 'Mais de 10 anos de know-how em transmissão aérea, integração e homologação de câmeras em helicópteros para emissoras e segurança pública.',
      features: ['Engenharia aeronáutica', 'Imagens estáveis em voo', 'Suporte técnico contínuo'],
      link: '/solucoes/servicos-integrados'
    }
  ];

  const avioesSolutions = [
    {
      title: 'FLYBOX',
      badge: 'Hardware Autônomo',
      image: flyboxImg,
      desc: 'Computador de bordo autônomo com gravação de mais de 100 parâmetros de telemetria, vídeo do cockpit e áudio da cabine.',
      features: ['Alimentação independente', 'Homologado de fábrica no Colt', 'GPS e sensores inerciais'],
      link: '/solucoes/flybox'
    },
    {
      title: 'FLY RECORD',
      badge: 'Aplicativo Móvel',
      image: flyboxImg,
      desc: 'Solução ágil para celular e tablet que captura vídeo, áudio e GPS para digitalizar a instrução sem custo de hardware inicial.',
      features: ['Início imediato na escola', 'Gravação sincronizada', 'Sincronização pós-voo'],
      link: '/solucoes/flybox#captura'
    },
    {
      title: 'FLYHUB',
      badge: 'Plataforma em Nuvem',
      image: flyhubImg,
      desc: 'Plataforma web centralizada com replay em 3D, linha do tempo sincronizada e debriefing inteligente com IA Multimodal.',
      features: ['Score de voo automatizado', 'Gestão de alunos e frotas', 'Manutenção preditiva'],
      link: '/solucoes/flybox'
    },
    {
      title: 'AIR BIND',
      badge: 'Protocolo de Conectividade',
      image: airbindImg,
      desc: 'Roteamento e agregação inteligente de múltiplos canais de comunicação com criptografia e baixa latência.',
      features: ['Conexão celular + satélite', 'Failover automático', 'Telemetria em tempo real'],
      link: '/solucoes/flybox'
    }
  ];

  return (
    <section className="solutions-section section-padding" id="solucoes">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">
            Nossas <span className="text-accent glow-text">Soluções por Vertical</span>
          </h2>
          <p className="section-subtitle">
            Tecnologia desenvolvida especificamente para as demandas de cada operação: transmissão contínua para asas rotativas e dados para instrução de aviação leve.
          </p>
        </div>

        {/* Group 1: Helicópteros */}
        <div className="vertical-section-group mb-5">
          <div className="vertical-group-header">
            <div className="vgh-left">
              <div className="vgh-icon"><Radio size={22} /></div>
              <div>
                <h3 className="vgh-title">Helicópteros — Transmissão e Conectividade</h3>
                <p className="vgh-desc">Sistemas celulares híbridos de alta estabilidade e integração de câmeras para condições adversas de voo</p>
              </div>
            </div>
            <Link to="/solucoes/transmissao-aerea" className="vgh-link">
              Conhecer Vertical <ArrowRight size={16} />
            </Link>
          </div>

          <div className="solutions-cards-grid">
            {helicopterSolutions.map((item, idx) => (
              <div key={idx} className="solution-tech-card glow-box">
                <div className="stc-image-wrapper">
                  <img src={item.image} alt={item.title} className="stc-image" />
                </div>
                <div className="stc-content">
                  <h4 className="stc-title text-accent">{item.title}</h4>
                  <p className="stc-desc">{item.desc}</p>
                  <ul className="stc-features">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx}>
                        <ShieldCheck size={14} className="text-accent" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={item.link} className="stc-link">
                    <span>Ver Detalhes</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Group 2: Aviões e CIACs */}
        <div className="vertical-section-group">
          <div className="vertical-group-header">
            <div className="vgh-left">
              <div className="vgh-icon"><Plane size={22} /></div>
              <div>
                <h3 className="vgh-title">Aviões e CIACs — Dados, Instrução e Inteligência</h3>
                <p className="vgh-desc">Captura embarcada, eliminação da subjetividade e gestão operacional completa com IA Multimodal</p>
              </div>
            </div>
            <Link to="/solucoes/flybox" className="vgh-link">
              Conhecer Vertical <ArrowRight size={16} />
            </Link>
          </div>

          <div className="solutions-cards-grid">
            {avioesSolutions.map((item, idx) => (
              <div key={idx} className="solution-tech-card glow-box">
                <div className="stc-image-wrapper">
                  <img src={item.image} alt={item.title} className="stc-image" />
                </div>
                <div className="stc-content">
                  <h4 className="stc-title text-accent">{item.title}</h4>
                  <p className="stc-desc">{item.desc}</p>
                  <ul className="stc-features">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx}>
                        <ShieldCheck size={14} className="text-accent" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={item.link} className="stc-link">
                    <span>Ver Detalhes</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;

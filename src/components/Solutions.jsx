import React from 'react';
import './Solutions.css';

import livecastImg from '../assets/solucoes/livecast2.png';
import extenderImg from '../assets/solucoes/extender-1.png';
import flyboxImg from '../assets/solucoes/flybox.png';
import airbindImg from '../assets/solucoes/airbind.png';
import flyhubImg from '../assets/solucoes/flyhub.png';

const solutions = [
  {
    title: 'LIVECAST PRO',
    image: livecastImg,
    desc: 'Transmissão de alta qualidade e estabilidade em tempo real, conectando sua operação de qualquer lugar.'
  },
  {
    title: 'EXTENDER',
    image: extenderImg,
    desc: 'Amplie o alcance e a força do seu sinal com tecnologia de ponta para missões críticas.'
  },
  {
    title: 'FLYBOX',
    image: flyboxImg,
    desc: 'Solução embarcada para processamento e comunicação avançada de dados aéreos.',
    link: '/solucoes/flybox'
  },
  {
    title: 'AIR BIND',
    image: airbindImg,
    desc: 'Integração contínua e gerenciamento inteligente de múltiplos canais de comunicação.'
  },
  {
    title: 'FLYHUB',
    image: flyhubImg,
    desc: 'Plataforma centralizada para gestão de dados, visualização de telemetria e controle da frota.'
  }
];

const Solutions = () => {
  return (
    <section className="solutions-section section-padding" id="solucoes">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">
            Nossas <span className="text-accent glow-text">Soluções</span>
          </h2>
          <p className="section-subtitle">
            Tecnologia de ponta desenvolvida para superar os maiores desafios da sua operação.
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution, index) => {
            const CardContent = (
              <>
                <div className="solution-image-container">
                  <img src={solution.image} alt={solution.title} className="solution-image" />
                </div>
                <div className="solution-content">
                  <h3 className="solution-title text-accent">{solution.title}</h3>
                  <p className="solution-desc">{solution.desc}</p>
                </div>
                <div className="solution-glow"></div>
              </>
            );

            return solution.link ? (
              <a href={solution.link} key={index} className="solution-card" style={{ textDecoration: 'none' }}>
                {CardContent}
              </a>
            ) : (
              <div key={index} className="solution-card">
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;

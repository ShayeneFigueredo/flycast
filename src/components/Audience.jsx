import React from 'react';
import { CheckCircle2, Shield, Headphones } from 'lucide-react';
import flyboxVideo from '../assets/FLYBOX-FLYCAST.mp4';
import './Audience.css';

const Audience = () => {
  return (
    <section className="audience section-padding">
      <div className="container audience-grid">
        <div className="audience-image-col">
          <div className="video-frame glow-box">
            <video 
              className="audience-video" 
              autoPlay 
              loop 
              muted 
              playsInline 
              src={flyboxVideo}
            />
          </div>
        </div>

        <div className="audience-content">
          <h2 className="section-title audience-title-left">
            Soluções inteligentes que conectam o céu <span className="text-accent glow-text">ao solo</span>
          </h2>
          
          <ul className="audience-list">
            <li className="glow-box list-item">
              <div className="icon-wrapper">
                <CheckCircle2 size={24} className="text-accent" />
              </div>
              <div>
                <h3>Transmissão e Conectividade Híbrida</h3>
                <p>Desenvolvemos tecnologias inovadoras para garantir transmissão de vídeo ao vivo em HD e conectividade híbrida em aeronaves, mesmo em relevos adversos e áreas remotas.</p>
              </div>
            </li>
            <li className="glow-box list-item">
              <div className="icon-wrapper">
                <Shield size={24} className="text-accent" />
              </div>
              <div>
                <h3>Robustez e Alta Performance</h3>
                <p>Com mais de uma década de experiência prática, nossas soluções unem chassi de alumínio aeroespacial, refrigeração ativa e fácil integração para missões críticas.</p>
              </div>
            </li>
            <li className="glow-box list-item">
              <div className="icon-wrapper">
                <Headphones size={24} className="text-accent" />
              </div>
              <div>
                <h3>Suporte e Consultoria Especializada</h3>
                <p>Acompanhamento técnico desde a homologação da instalação física até o treinamento operacional da equipe de solo e dos pilotos.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Audience;

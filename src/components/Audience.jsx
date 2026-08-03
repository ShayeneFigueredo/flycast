import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import flyboxVideo from '../assets/FLYBOX-FLYCAST.mp4';
import imagensFlyboxVideo from '../assets/imagens-flybox.mp4';
import './Audience.css';

const Audience = () => {
  return (
    <section className="audience section-padding">
      <div className="container audience-grid">
        <div className="audience-image-col">
          <video 
            className="audience-video glow-box" 
            autoPlay 
            loop 
            muted 
            playsInline 
            src={imagensFlyboxVideo}
          />
          <video 
            className="audience-video glow-box" 
            autoPlay 
            loop 
            muted 
            playsInline 
            src={flyboxVideo}
          />
        </div>

        <div className="audience-content">
          <h2 className="section-title" style={{ textAlign: 'left' }}>
            Soluções inteligentes que conectam o céu <span className="text-accent glow-text">ao solo</span>
          </h2>
          
          <ul className="audience-list">
            <li className="glow-box list-item">
              <div className="icon-wrapper">
                <CheckCircle2 size={24} className="text-accent glow-text" />
              </div>
              <div>
                <h3>Transmissão e Conectividade Híbrida</h3>
                <p>Na FLYCAST, desenvolvemos tecnologias inovadoras para garantir transmissão de vídeo ao vivo e conectividade híbrida em aeronaves, mesmo em ambientes extremos e áreas remotas.</p>
              </div>
            </li>
            <li className="glow-box list-item">
              <div className="icon-wrapper">
                <CheckCircle2 size={24} className="text-accent glow-text" />
              </div>
              <div>
                <h3>Robustez e Alta Performance</h3>
                <p>Com mais de uma década de experiência, nossas soluções combinam robustez, alta performance e fácil integração, proporcionando comunicação estável e segura para operações críticas no setor aéreo.</p>
              </div>
            </li>
            <li className="glow-box list-item">
              <div className="icon-wrapper">
                <CheckCircle2 size={24} className="text-accent glow-text" />
              </div>
              <div>
                <h3>Tecnologia e Suporte Dedicado</h3>
                <p>Estamos prontos para elevar sua operação ao próximo nível com tecnologia confiável e suporte dedicado, desde helicópteros até grandes aviões.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Audience;

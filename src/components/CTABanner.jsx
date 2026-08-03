import React from 'react';
import { Link } from 'react-router-dom';
import monitoramentoCelular from '../assets/monitoramento-celular.mp4';
import './CTABanner.css';

const CTABanner = () => {
  return (
    <section className="cta-banner">
      <div className="container cta-banner-container">
        <div className="cta-video-wrapper">
          <video src={monitoramentoCelular} autoPlay loop muted playsInline className="cta-video" />
        </div>
        <div className="cta-content">
          <h2 className="cta-title">FAÇA LOGIN E ACOMPANHE SEUS DADOS DA FLYBOX</h2>
          <p className="cta-text">
            Tenha controle total da sua operação. Acesse nossa plataforma para visualizar<br/>
            telemetria, rotas e métricas da sua aeronave em tempo real.
          </p>
          <Link to="/login" target="_blank" className="btn-primary cta-btn" style={{ textDecoration: 'none' }}>
            FAZER LOGIN
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;

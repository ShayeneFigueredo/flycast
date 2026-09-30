import React from 'react';
import fonteDadosImg from '../assets/FONTE DE DADOS - flycast.png';
import './Benefits.css';

const Benefits = () => {
  return (
    <section className="benefits section-padding">
      <div className="container">
        {/* Title removed per user request */}
        
        <div className="benefits-diagram">
          <img src={fonteDadosImg} alt="Fonte de Dados Flycast" className="ecossistema-img" />
        </div>
      </div>
    </section>
  );
};

export default Benefits;

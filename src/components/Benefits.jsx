import React from 'react';
import ecossistema from '../assets/ecossistema.png';
import './Benefits.css';

const Benefits = () => {
  return (
    <section className="benefits section-padding">
      <div className="container">
        {/* Title removed per user request */}
        
        <div className="benefits-diagram">
          <img src={ecossistema} alt="Ecossistema Estratégico" className="ecossistema-img" />
        </div>
      </div>
    </section>
  );
};

export default Benefits;

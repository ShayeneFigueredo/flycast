import React from 'react';
import './Partners.css';

// Importando os logos disponíveis
import inpaerLogo from '../assets/inpaer.png';
import viasoftLogo from '../assets/viasoft.png';
import aeroclubLogo from '../assets/aeroclub.png';
import i9Logo from '../assets/i9.png';

const Partners = () => {
  // Array com os logos para facilitar a duplicação no loop
  const logos = [
    { src: inpaerLogo, alt: "Inpaer" },
    { src: i9Logo, alt: "i9hub" },
    { src: aeroclubLogo, alt: "Aeroclub de Uberlândia" },
    { src: viasoftLogo, alt: "Viasoft" }
  ];

  return (
    <section className="partners-section">
      <div className="partners-container">
        <h4 className="partners-title">NOSSOS PARCEIROS</h4>
        
        <div className="partners-marquee">
          <div className="partners-grid">
            {/* Renderizar as listas múltiplas vezes para garantir que preencham a tela em telas grandes */}
            {[...Array(4)].map((_, arrayIndex) => (
              <React.Fragment key={`list-${arrayIndex}`}>
                {logos.map((logo, index) => {
                  let customClass = "partner-logo";
                  if (logo.alt === "Inpaer" || logo.alt === "i9hub") {
                    customClass += " logo-large";
                  }
                  
                  return (
                    <div className={customClass} key={`logo-${arrayIndex}-${index}`}>
                      <img src={logo.src} alt={logo.alt} />
                    </div>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;

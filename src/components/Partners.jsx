import React from 'react';
import aeroclubLogo from '../assets/clientes/aeroclub.png';
import i9Logo from '../assets/clientes/i9.png';
import inpaerLogo from '../assets/clientes/inpaer.png';
import viasoftLogo from '../assets/clientes/viasoft.png';
import helinewsLogo from '../assets/clientes/HELINEWS_LOGOTIPO-07.png';
import helicopteroTvLogo from '../assets/clientes/helicopterotv.png';
import aeromotLogo from '../assets/clientes/aeromot.png';
import comaveLogo from '../assets/clientes/comave.png';
import aguiaLogo from '../assets/clientes/aguia.png';
import goldenFlyLogo from '../assets/clientes/goldenfly.svg';
import './Partners.css';

const Clientes = () => {
  const clientLogos = [
    { 
      name: 'Helicoptero.tv', 
      src: helicopteroTvLogo, 
      url: 'https://helicoptero.tv/',
      isWhite: false 
    },
    { 
      name: 'COMAVE - Comando de Aviação da PMMG', 
      src: comaveLogo, 
      url: 'https://www.instagram.com/pmmg.comave/',
      isEmblem: true
    },
    { 
      name: 'Águia - Comando de Aviação da PMESP', 
      src: aguiaLogo, 
      url: 'https://www.instagram.com/cavpm_pmesp/',
      isEmblem: true
    },
    { 
      name: 'Aeromot', 
      src: aeromotLogo, 
      url: 'https://sa.aeromot.com.br/',
      isWhite: true 
    },
    { 
      name: 'Inpaer', 
      src: inpaerLogo, 
      url: 'https://inpaer.com.br/' 
    },
    { 
      name: 'Golden Fly', 
      src: goldenFlyLogo, 
      url: 'https://goldenfly.com.br/' 
    },
    { 
      name: 'Helinews', 
      src: helinewsLogo, 
      url: 'https://helinews.com.br/',
      isWhite: true 
    },
    { 
      name: 'Aeroclube', 
      src: aeroclubLogo, 
      url: 'https://aeroclubesp.com.br/' 
    },
    { 
      name: 'Viasoft', 
      src: viasoftLogo, 
      url: 'https://www.viasoft.com.br/' 
    },
    { 
      name: 'i9 Hub', 
      src: i9Logo, 
      url: 'https://shayenefigueredo.github.io/site-i9hub/' 
    },
  ];

  // Repeat for continuous seamless infinite marquee
  const topRowLogos = [...clientLogos, ...clientLogos, ...clientLogos];
  const bottomRowLogos = [...clientLogos.slice().reverse(), ...clientLogos.slice().reverse(), ...clientLogos.slice().reverse()];

  return (
    <section className="clientes-showcase-section" id="clientes">
      <div className="marquee-outer-container">
        {/* Top Row: Moves to LEFT */}
        <div className="marquee-row marquee-top">
          <div className="marquee-track track-left">
            {topRowLogos.map((item, idx) => (
              <a 
                key={`top-${idx}`} 
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="client-logo-item"
                title={`${item.name} (visitar site)`}
              >
                <img 
                  src={item.src} 
                  alt={item.name} 
                  className={`client-logo-img ${item.isWhite ? 'logo-white' : ''} ${item.isEmblem ? 'logo-emblem' : ''}`} 
                />
              </a>
            ))}
          </div>
        </div>

        {/* Center Circular Badge */}
        <div className="center-client-badge">
          <div className="center-badge-circle">
            <span className="center-badge-text">NOSSOS CLIENTES</span>
          </div>
        </div>

        {/* Bottom Row: Moves to RIGHT */}
        <div className="marquee-row marquee-bottom">
          <div className="marquee-track track-right">
            {bottomRowLogos.map((item, idx) => (
              <a 
                key={`bot-${idx}`} 
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="client-logo-item"
                title={`${item.name} (visitar site)`}
              >
                <img 
                  src={item.src} 
                  alt={item.name} 
                  className={`client-logo-img ${item.isWhite ? 'logo-white' : ''} ${item.isEmblem ? 'logo-emblem' : ''}`} 
                />
              </a>
            ))}
          </div>
        </div>

        {/* Side fade masks */}
        <div className="marquee-fade-left"></div>
        <div className="marquee-fade-right"></div>
      </div>
    </section>
  );
};

export default Clientes;

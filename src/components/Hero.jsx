import React, { useState, useEffect } from 'react';
import videoBanner from '../assets/video-banner.mp4';
import './Hero.css';

const Hero = () => {
  const words = ['CONECTIVIDADE', 'INTELIGÊNCIA', 'TRANSMISSÃO HD', 'SEGURANÇA'];
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  // Switch words
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((current) => (current + 1) % words.length);
      setDisplayedText('');
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentWord = words[wordIndex];
    if (displayedText.length < currentWord.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, displayedText.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [displayedText, wordIndex, words]);

  return (
    <section className="hero">
      {/* Background Video with continuous loop and enhanced visibility */}
      <video 
        src={videoBanner} 
        autoPlay 
        loop
        muted 
        playsInline 
        onEnded={(e) => {
          e.target.currentTime = 0;
          e.target.play();
        }}
        className="hero-video-bg" 
      />
      <div className="hero-overlay"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-prefix">O Futuro da Conexão e Inteligência Aeronáutica:</span>
            <span className="hero-typing-line">
              <span className="text-accent glow-text">{displayedText}</span>
              <span className="cursor">|</span>
            </span>
          </h1>

          <p className="hero-description">
            Soluções de engenharia avançada para <strong>helicópteros</strong>, <strong>aviões</strong> e <strong>CIACs</strong>. Transmissão ao vivo ininterrupta em qualquer altitude e ecossistema de dados para transformar voos em inteligência operacional.
          </p>

          <div className="hero-actions">
            <a href="#solucoes" className="btn-primary">
              Ver Nossas Soluções
            </a>
            <a 
              href="https://wa.me/553499793418?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20demonstra%C3%A7%C3%A3o%20da%20Flycast."
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-outline"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      </div>
      <div className="bottom-fade"></div>
    </section>
  );
};

export default Hero;

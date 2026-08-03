import React, { useState, useEffect, useRef } from 'react';
import flybox from '../assets/flybox-gg.png';
import videoBanner from '../assets/video-banner.mp4';
import './Hero.css';

const Hero = () => {
  const words = ['SEGURANÇA', 'TECNOLOGIA', 'INOVAÇÃO', 'CONTROLE'];
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  const videoRef = useRef(null);
  const overlayRef = useRef(null);
  const flyboxRef = useRef(null);

  // Timer to change word every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((current) => (current + 1) % words.length);
      setDisplayedText(''); // Reset text to restart typing effect
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Timer for the typing effect
  useEffect(() => {
    const currentWord = words[wordIndex];
    if (displayedText.length < currentWord.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, displayedText.length + 1));
      }, 100); // speed of typing each letter
      return () => clearTimeout(timeout);
    }
  }, [displayedText, wordIndex, words]);

  const handleTimeUpdate = () => {
    if (!videoRef.current || !overlayRef.current || !flyboxRef.current) return;
    const { currentTime, duration } = videoRef.current;
    if (!duration) return;

    // Fade gradually over the course of the video, reaching 100% at exactly 3 seconds before the end
    const fadeEnd = Math.max(0.1, duration - 3);
    const fadeProgress = Math.min(1, currentTime / fadeEnd);
    
    // Video fades to 100% (from 0.3)
    videoRef.current.style.opacity = 0.3 + (0.7 * fadeProgress);
    // Overlay fades out completely (to 0)
    overlayRef.current.style.opacity = 1 - fadeProgress;
    
    // In the last 3 seconds, the flybox slides up
    if (duration - currentTime <= 3) {
      const slideProgress = Math.min(1, 1 - ((duration - currentTime) / 3));
      flyboxRef.current.style.transform = `translateY(${100 - (100 * slideProgress)}%)`;
      flyboxRef.current.style.opacity = slideProgress;
    } else {
      flyboxRef.current.style.transform = 'translateY(100%)';
      flyboxRef.current.style.opacity = 0;
    }
  };

  return (
    <section className="hero">
      <video 
        ref={videoRef}
        src={videoBanner} 
        autoPlay 
        muted 
        playsInline 
        onTimeUpdate={handleTimeUpdate}
        className="hero-video-bg" 
        style={{ opacity: 0.6 }}
      />
      <div className="hero-overlay" ref={overlayRef}></div>
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="logo-placeholder">
            <div className="logo-icon"></div>
            <span>CONEXÃO GARANTIDA</span>
          </div>
          <h1 className="hero-title">
            O <strong>FUTURO</strong> DA <strong className="text-gradient">AVIAÇÃO</strong> ESTÁ AQUI!<br />
            <span className="text-accent glow-text typewriter-text" style={{ fontSize: '0.7em', fontWeight: '500' }}>+{displayedText}</span><span className="cursor" style={{ fontSize: '0.7em' }}>|</span>
          </h1>
          <p className="hero-description">
            Soluções desenvolvidas para atender aviões, helicópteros e operações em áreas remotas, garantindo comunicação estável, transmissão ao vivo e controle em tempo real - mesmo nas condições mais desafiadoras.
          </p>
          <button className="btn-primary" style={{ marginTop: '2rem' }}>
            Conheça nossas soluções aéreas
          </button>
        </div>
      </div>
      <div className="bottom-fade"></div>
    </section>
  );
};

export default Hero;

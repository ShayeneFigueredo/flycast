import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './InstalacaoCameras.css';
import helicopteroImg from '../assets/helicoptero.jpg';
import cameraImg from '../assets/camera.png';
import Header from './Header';

const InstalacaoCameras = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="instalacao-page pt-20">
        <div className="container">
          <Link to="/#solucoes" className="btn-back">
            <ArrowLeft size={20} /> Voltar
          </Link>
          
          <div className="instalacao-header mt-4 mb-5">
            <h1 className="hero-title text-center">
              Know-how em instalação de <strong className="text-accent glow-text">câmeras em helicópteros</strong>
            </h1>
            <p className="text-center subtitle-text mt-3">
              Sua cobertura aérea, sem interrupções: tecnologia que conecta cada imagem à história que você precisa contar.
            </p>
          </div>

          <div className="instalacao-intro mb-5">
            <h2 className="section-title mb-3">Líderes em Instalação de Câmeras Aéreas com mais de uma década de experiência</h2>
            <p>
              Nossa empresa se destaca no mercado com a instalação de câmeras em helicópteros, oferecendo soluções inovadoras para emissoras de televisão e repartições públicas. Nossa competência técnica é comprovada por uma equipe de especialistas altamente qualificados e uma história de projetos bem-sucedidos. Com tecnologia de ponta e um compromisso com a excelência, somos a escolha certa para levar suas capacidades de captação de imagens às alturas.
            </p>
          </div>

          <div className="instalacao-grid">
            <div className="instalacao-card">
              <div className="instalacao-image">
                <img src={helicopteroImg} alt="Helicóptero" />
              </div>
              <div className="instalacao-content">
                <h3 className="text-accent text-2xl mb-3">ALTA PERFORMANCE</h3>
                <p>
                  Nosso foco é entregar instalações de câmeras aéreas seguras, estáveis e de alta performance, projetadas para suportar as condições extremas de voo. Cada projeto é desenvolvido com engenharia de precisão e integração personalizada, garantindo imagens nítidas e confiáveis em qualquer operação. Combinamos experiência prática e inovação tecnológica para transformar cada helicóptero em uma verdadeira plataforma de captação aérea profissional.
                </p>
              </div>
            </div>

            <div className="instalacao-card">
              <div className="instalacao-image">
                <img src={cameraImg} alt="Câmera" />
              </div>
              <div className="instalacao-content">
                <h3 className="text-accent text-2xl mb-3">TECNOLOGIA DE PONTA</h3>
                <p>
                  Trabalhamos com os melhores equipamentos do mercado para assegurar que sua transmissão seja impecável. Desde a escolha da câmera ideal até a integração completa com sistemas de transmissão celular e satélite, nós cuidamos de cada detalhe para que você tenha a melhor experiência possível.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstalacaoCameras;

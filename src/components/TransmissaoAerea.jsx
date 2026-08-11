import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './TransmissaoAerea.css';
import livecastImg from '../assets/solucoes/livecast2.png';
import extenderImg from '../assets/solucoes/extender-1.png';
import Header from './Header';

const TransmissaoAerea = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="transmissao-page pt-20">
        <div className="container">
          <Link to="/#solucoes" className="btn-back">
            <ArrowLeft size={20} /> Voltar
          </Link>
          
          <div className="transmissao-header mt-4 mb-5">
            <h1 className="hero-title text-center">
              Transmissão Aérea de <strong className="text-accent glow-text">Alto Desempenho</strong>
            </h1>
            <p className="text-center subtitle-text mt-3">
              Sua cobertura aérea, sem interrupções: tecnologia que conecta cada imagem à história que você precisa contar.
            </p>
          </div>

          <div className="transmissao-intro mb-5">
            <h2 className="section-title mb-3">Solução eficiente em termos de custos e para transmissões em helicópteros</h2>
            <p>
              O Extender e o Livecast Pro combinam-se para criar um sistema de transmissão eficiente, ao vivo e em alta definição, mesmo em situações adversas como o movimento de um helicóptero. Este tipo de sistema celular onde são utilizados 2 (dois) extender, é ideal para helicópteros que trabalham em condições de grande diversidade e movimentos bruscos.
            </p>
          </div>

          <div className="transmissao-grid">
            <div className="transmissao-card">
              <div className="transmissao-image">
                <img src={livecastImg} alt="Livecast Pro" />
              </div>
              <div className="transmissao-content">
                <h3 className="text-accent text-2xl mb-3">LIVECAST PRO</h3>
                <p className="mb-3"><strong>Projetado para ser a solução mais robusta em transmissão móvel de vídeo.</strong></p>
                <p className="mb-3">
                  Possui 4 modens internos (3G/4G) de alta capacidade de transmissão com a possibilidade para mais 2 modens externos, conta também com 2 entradas de rede para internet fixa e/ou Extender(4 conexões extra 4G/3G por equipamento), tudo isso utilizando nossa tecnologia proprietária de Bonding Multi Homer para soma de banda conferindo a esse equipamento um alto poder de transmissão de vídeo.
                </p>
                <p>
                  Gabinete refrigerado produzido a partir de bloco maciço de alumínio o que eleva sua resistência contra choques mecânicos, vibração, temperatura, interferência eletromagnética e desgaste natural.
                </p>
              </div>
            </div>

            <div className="transmissao-card">
              <div className="transmissao-image">
                <img src={extenderImg} alt="Extender" />
              </div>
              <div className="transmissao-content">
                <h3 className="text-accent text-2xl mb-3">EXTENDER</h3>
                <p className="mb-3">
                  O Extender é uma unidade de modens com antenas externas de alta potência portátil que aumenta a recepção para transmissão de vídeo ao vivo em cenários extremos, como locais com muita gente, distante da cidade entre outros.
                </p>
                <p className="mb-3">
                  O Extender permite a recepção de torres de transmissão remotas que não eram acessíveis pelo Livecast em razão da distância ou visada.
                </p>
                <p>
                  Essas torres remotas podem estar menos congestionadas do que aquelas na área local, aumentando significativamente à largura de banda transmitida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransmissaoAerea;

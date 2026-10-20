import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Audience from './components/Audience';
import Benefits from './components/Benefits';
import TeamTimeline from './components/TeamTimeline';
import Solutions from './components/Solutions';
import CTABanner from './components/CTABanner';
import Comparison from './components/Comparison';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Login from './components/Login';
import TransmissaoAerea from './components/TransmissaoAerea';
import InstalacaoCameras from './components/InstalacaoCameras';
import FlyboxPage from './components/FlyboxPage';
import SobreNos from './components/SobreNos';
import SetoresAtendidos from './components/SetoresAtendidos';
import AvioesPage from './components/AvioesPage';
import SecretArchivePage from './components/SecretArchivePage';
import Footer from './components/Footer';

const LandingPage = () => (
  <>
    <Header />
    <main>
      <Hero />
      <TeamTimeline />
      <CTABanner />
      <Comparison />
      <Partners />
    </main>
  </>
);

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/login" element={<Login />} />
          
          {/* Helicópteros: Transmissão & Conectividade */}
          <Route path="/solucoes/transmissao-aerea" element={<TransmissaoAerea />} />
          <Route path="/transmissao-aerea" element={<TransmissaoAerea />} />
          <Route path="/solucoes/helicopteros" element={<TransmissaoAerea />} />
          <Route path="/helicopteros" element={<TransmissaoAerea />} />

          {/* Serviços Integrados */}
          <Route path="/solucoes/servicos-integrados" element={<InstalacaoCameras />} />
          <Route path="/servicos-integrados" element={<InstalacaoCameras />} />
          <Route path="/solucoes/instalacao-cameras" element={<InstalacaoCameras />} />
          <Route path="/instalacao-cameras" element={<InstalacaoCameras />} />

          {/* Setores Atendidos */}
          <Route path="/solucoes/setores-atendidos" element={<SetoresAtendidos />} />
          <Route path="/setores-atendidos" element={<SetoresAtendidos />} />

          {/* Aviões: Soluções para Aeronaves e Proprietários */}
          <Route path="/solucoes/avioes" element={<AvioesPage />} />
          <Route path="/avioes" element={<AvioesPage />} />

          {/* CIACs / Escolas de Aviação: Instrução, Flybox e FlyHub */}
          <Route path="/solucoes/escolas-de-aviacao" element={<FlyboxPage />} />
          <Route path="/escolas-de-aviacao" element={<FlyboxPage />} />
          <Route path="/solucoes/ciacs" element={<FlyboxPage />} />
          <Route path="/ciacs" element={<FlyboxPage />} />
          <Route path="/solucoes/flybox" element={<FlyboxPage />} />
          <Route path="/flybox" element={<FlyboxPage />} />
          <Route path="/solucoes/avioes-ciacs" element={<FlyboxPage />} />
          <Route path="/avioes-ciacs" element={<FlyboxPage />} />

          {/* Aba Secreta / Arquivo de Conteúdo da Home */}
          <Route path="/secret" element={<SecretArchivePage />} />

          {/* Fallback route */}
          <Route path="*" element={<LandingPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

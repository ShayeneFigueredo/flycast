import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Archive, ArrowLeft } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import Audience from './Audience';
import Solutions from './Solutions';
import Benefits from './Benefits';
import Process from './Process';
import FAQ from './FAQ';

const SecretArchivePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="secret-archive-page">
      <Header />
      <div style={{ paddingTop: '110px', backgroundColor: 'var(--bg-dark)', color: 'var(--text-primary)', minHeight: '100vh' }}>
        <div className="container" style={{ marginBottom: '30px' }}>
          <Link 
            to="/" 
            className="btn-back" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              marginBottom: '16px'
            }}
          >
            <ArrowLeft size={18} /> Voltar para a Home
          </Link>
          
          <div style={{
            background: 'linear-gradient(145deg, rgba(8, 47, 73, 0.4) 0%, rgba(2, 6, 23, 0.9) 100%)',
            border: '1px solid rgba(56, 189, 248, 0.35)',
            borderRadius: '20px',
            padding: '24px 30px',
            display: 'flex',
            alignItems: 'center',
            gap: '18px',
            boxShadow: '0 12px 35px rgba(0, 0, 0, 0.5)'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'rgba(56, 189, 248, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-blue)',
              flexShrink: 0
            }}>
              <Archive size={24} />
            </div>
            <div>
              <h1 style={{ fontSize: '1.35rem', fontWeight: '700', color: '#ffffff', margin: '0 0 4px 0' }}>
                Arquivo de Seções da Home (/secret)
              </h1>
              <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.92rem', lineHeight: '1.5' }}>
                Este espaço privado preserva todas as seções que foram retiradas da página inicial (Home), permitindo consulta ou reativação a qualquer momento.
              </p>
            </div>
          </div>
        </div>

        <main>
          {/* 1. Soluções inteligentes que conectam o céu ao solo */}
          <Audience />

          {/* 2. Nossas Soluções por Vertical */}
          <Solutions />

          {/* 3. Imagem / Diagrama Fonte de Dados (Benefits) */}
          <Benefits />

          {/* 4. Processo: Você quer a nossa equipe de desenvolvimento a seu dispor? */}
          <Process />

          {/* 5. Perguntas Frequentes (FAQ) */}
          <FAQ />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default SecretArchivePage;

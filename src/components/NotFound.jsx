import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import Header from './Header';
import './NotFound.css';

const NotFound = () => {
  useEffect(() => {
    // Título e noindex desta página são definidos em RouteMeta
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="notfound-page">
      <Header />

      <main className="container notfound-container">
        <div className="notfound-tag">
          <span className="notfound-dash"></span>
          <span>ERRO 404</span>
        </div>

        <h1 className="notfound-code">404</h1>
        <h2 className="notfound-title">Página não encontrada</h2>
        <p className="notfound-text">
          O endereço que você acessou não existe ou foi alterado. Volte para o início e
          continue navegando pelas soluções da Flycast.
        </p>

        <div className="notfound-actions">
          <Link to="/" className="btn-primary">
            <Home size={20} /> Voltar ao Início
          </Link>
          <a
            href="https://wa.me/5534999793418?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20a%20equipe%20da%20Flycast."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Falar com Especialista
          </a>
        </div>
      </main>
    </div>
  );
};

export default NotFound;

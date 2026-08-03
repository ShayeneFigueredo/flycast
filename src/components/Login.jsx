import React, { useState } from 'react';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import logo from '../assets/logo-simbolo.png';
import './Login.css';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="login-page">
      <div className="login-container glow-box">
        <div className="login-header">
          <img src={logo} alt="Flycast Logo" className="login-logo" />
          <h2 className="login-title text-accent">
            {isSignUp ? 'CRIAR CONTA' : 'BEM-VINDO DE VOLTA'}
          </h2>
          <p className="login-subtitle">
            {isSignUp 
              ? 'Junte-se à revolução na conectividade de aviação.' 
              : 'Acesse o painel inteligente da sua frota.'}
          </p>
        </div>

        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          {isSignUp && (
            <div className="input-group">
              <User className="input-icon text-accent" size={20} />
              <input type="text" placeholder="Nome completo" required />
            </div>
          )}
          
          <div className="input-group">
            <Mail className="input-icon text-accent" size={20} />
            <input type="email" placeholder="E-mail corporativo" required />
          </div>

          <div className="input-group">
            <Lock className="input-icon text-accent" size={20} />
            <input type="password" placeholder="Senha" required />
          </div>

          {!isSignUp && (
            <div className="forgot-password">
              <a href="#">Esqueceu sua senha?</a>
            </div>
          )}

          <button type="submit" className="btn-primary login-btn">
            {isSignUp ? 'CADASTRAR' : 'ENTRAR'} <ArrowRight size={18} />
          </button>
        </form>

        <div className="login-footer">
          <p>
            {isSignUp ? 'Já tem uma conta?' : 'Ainda não tem uma conta?'}
            <button 
              className="toggle-btn text-accent" 
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? 'Faça login' : 'Cadastre-se'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

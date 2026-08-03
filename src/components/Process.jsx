import React from 'react';
import './Process.css';

const Process = () => {
  const steps = [
    { num: '1.', title: 'Reunião de Alinhamento', desc: 'Alinhamento inicial para entender a fundo o seu negócio, histórico e objetivos.' },
    { num: '2.', title: 'Planejamento Estratégico', desc: 'Mapeamento das necessidades técnicas, definição dos equipamentos e estrutura do projeto.' },
    { num: '3.', title: 'Aprovação do Plano', desc: 'Apresentação detalhada da estratégia para sua validação antes da execução.' },
    { num: '4.', title: 'Implementação', desc: 'Colocamos a operação para rodar, iniciando a logística e integração dos sistemas na sua frota.' },
    { num: '5.', title: 'Instalação e Testes', desc: 'Realizamos a instalação dos equipamentos em seu avião ou helicóptero, seguida de testes rigorosos para assegurar estabilidade e segurança.' },
    { num: '6.', title: 'Treinamento', desc: 'Capacitamos sua equipe com um treinamento completo e prático, garantindo domínio da plataforma para monitoramento e análise de dados em tempo real.' }
  ];

  return (
    <section className="process section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <p className="process-subtitle">Você quer a nossa equipe de desenvolvimento a seu dispor?</p>
          <h2 className="section-title">
            Entenda o <span className="text-accent glow-text">nosso processo:</span>
          </h2>
        </div>

        <div className="process-grid">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{step.num}</div>
              <div className="step-content">
                <h3 className="step-title text-accent">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="bg-graph-line"></div>
    </section>
  );
};

export default Process;

import React from 'react';
import './TeamTimeline.css';

const TeamTimeline = () => {
  const roles = [
    { title: 'Incidentes sem explicação clara', desc: 'Sem a captura de vídeo, áudio e telemetria, investigar a causa raiz de um evento adverso torna-se um exercício de suposição. A ausência de provas concretas prolonga investigações e gera incertezas sobre a segurança.' },
    { title: 'Déficit na avaliação e treinamento', desc: 'A dificuldade em avaliar o desempenho real dos pilotos somada à falta de dados práticos de voo impede a criação de programas de capacitação eficientes. O treinamento acaba baseado em teoria e impressões, não em comportamento real.' },
    { title: 'Custos de manutenção inesperados', desc: 'O desgaste não monitorado da aeronave impede uma abordagem preventiva. O resultado são manutenções corretivas de alto custo, garantias acionadas indevidamente e o maior prejuízo de todos: a aeronave inoperante no solo.' },
    { title: 'Falta de rastreabilidade operacional', desc: 'Quando o avião decola, o controle central perde a visibilidade. Não saber exatamente como a aeronave foi operada e por onde passou tira o poder de decisão dos gestores e inviabiliza a otimização de rotas e o controle efetivo da frota.' }
  ];

  return (
    <section className="team-timeline section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">
            Trabalhamos para resolver<br/>
            <span className="text-accent glow-text">os maiores desafios da sua operação</span>
          </h2>
          <p className="section-subtitle">
            Identificamos e solucionamos as lacunas operacionais que colocam sua frota em risco e geram custos desnecessários.
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          <div className="timeline-items">
            {roles.map((role, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <h3 className="role-title text-accent">{role.title}</h3>
                <p className="role-desc">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamTimeline;

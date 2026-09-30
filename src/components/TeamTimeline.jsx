import React from 'react';
import { AlertCircle, HelpCircle, Wrench, ShieldAlert } from 'lucide-react';
import './TeamTimeline.css';

const TeamTimeline = () => {
  const roles = [
    { 
      icon: HelpCircle,
      title: 'Incidentes sem explicação clara', 
      desc: 'Sem a captura de vídeo, áudio e telemetria, investigar a causa raiz de um evento adverso torna-se um exercício de suposição que prolonga apurações.' 
    },
    { 
      icon: AlertCircle,
      title: 'Déficit na avaliação e instrução', 
      desc: 'A dificuldade em avaliar o desempenho real dos pilotos impede programas de capacitação objetivos. O treinamento acaba baseado apenas em impressões.' 
    },
    { 
      icon: Wrench,
      title: 'Custos de manutenção inesperados', 
      desc: 'O desgaste não monitorado da aeronave impede uma abordagem preditiva, gerando manutenções corretivas emergenciais e aeronaves paradas no solo.' 
    },
    { 
      icon: ShieldAlert,
      title: 'Falta de rastreabilidade operacional', 
      desc: 'Não saber exatamente como e onde a aeronave foi operada reduz o poder de decisão dos gestores e inviabiliza auditorias e controle de risco de seguro.' 
    }
  ];

  return (
    <section className="team-timeline section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">
            Trabalhamos para resolver<br/>
            <span className="text-accent glow-text">os maiores desafios da sua frota</span>
          </h2>
          <p className="section-subtitle">
            Identificamos e solucionamos as lacunas operacionais que colocam sua frota em risco e geram custos desnecessários.
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-items">
            {roles.map((role, index) => {
              const IconComp = role.icon;
              return (
                <div key={index} className="timeline-item glow-box">
                  <div className="timeline-icon">
                    <IconComp size={28} className="text-accent" />
                  </div>
                  <h3 className="role-title text-accent">{role.title}</h3>
                  <p className="role-desc">{role.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamTimeline;

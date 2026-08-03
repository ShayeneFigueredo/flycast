import React from 'react';
import { Activity, Mic, Cloud, Monitor, Database, Video, Camera, Radio, Link, Brain, Shield, Check, Minus } from 'lucide-react';
import './Comparison.css';

const Comparison = () => {
  const features = [
    { name: 'Telemetria em tempo real', icon: Activity, airbind: true, flybox: true },
    { name: 'Áudio da cabine', icon: Mic, airbind: true, flybox: true },
    { name: 'Plataforma FlyHub', icon: Cloud, airbind: true, flybox: true },
    { name: 'Monitoramento remoto', icon: Monitor, airbind: true, flybox: true },
    { name: 'Histórico operacional', icon: Database, airbind: true, flybox: true },
    { name: 'Vídeo de cockpit', icon: Video, airbind: false, flybox: true },
    { name: 'Câmeras embarcadas', icon: Camera, airbind: false, flybox: true },
    { name: 'Transmissão ao vivo de vídeo', icon: Radio, airbind: false, flybox: true },
    { name: 'Correlação entre áudio, vídeo e dados', icon: Link, airbind: false, flybox: true },
    { name: 'Análise avançada de ocorrências', icon: Brain, airbind: false, flybox: true },
    { name: 'Inteligência operacional completa', icon: Shield, airbind: false, flybox: true },
  ];

  return (
    <section className="comparison section-padding">
      <div className="container">
        <div className="comparison-content-wrapper">
          
          <div className="comparison-text-side">
            <h2 className="section-title" style={{ textTransform: 'uppercase' }}>
              ESCOLHA O NÍVEL DE INTELIGÊNCIA <br/>
              <span className="text-accent glow-text">QUE A SUA OPERAÇÃO EXIGE.</span>
            </h2>
            <p className="comparison-paragraph">
              Enquanto o Air Bind garante a base essencial de conectividade com transmissão de telemetria e áudio em tempo real, a Flybox eleva a sua gestão ao nível máximo. Como uma solução mais robusta e completa, a Flybox adiciona a camada visual com vídeo de cockpit, câmeras embarcadas e análise avançada para uma correlação total de dados e ocorrências. Compare os módulos abaixo e descubra qual se adapta melhor à sua frota.
            </p>
          </div>

          <div className="comparison-table-side">
            <div className="table-container glow-box">
              <div className="table-header">
                <div className="col-feature text-accent">RECURSOS</div>
                <div className="col-airbind text-accent">AIR BIND</div>
                <div className="col-flybox text-accent">FLYBOX</div>
              </div>
              
              <div className="table-body">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="table-row">
                      <div className="col-feature">
                        <IconComponent className="feature-icon" />
                        <span>{feature.name}</span>
                      </div>
                      <div className="col-airbind">
                        {feature.airbind ? <Check className="check-icon" /> : <Minus className="minus-icon" />}
                      </div>
                      <div className="col-flybox">
                        {feature.flybox ? <Check className="check-icon" /> : <Minus className="minus-icon" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "O que é a FLYCAST e como ela ajuda a minha frota?",
      answer: "A FLYCAST desenvolve tecnologias inovadoras para garantir transmissão de vídeo ao vivo e conectividade híbrida em aeronaves. Nossas soluções proporcionam comunicação estável e segura para operações críticas no setor aéreo."
    },
    {
      question: "Qual a diferença principal entre o Air Bind e a Flybox?",
      answer: "O Air Bind foca na telemetria e áudio em tempo real para conectividade essencial. Já a Flybox é nossa solução premium que adiciona inteligência operacional avançada, vídeo de cockpit e câmeras embarcadas."
    },
    {
      question: "A instalação dos equipamentos é demorada?",
      answer: "Não. Nossa equipe realiza a implementação de forma ágil e segura, seguida de testes rigorosos, minimizando o tempo que sua aeronave fica inoperante no solo."
    },
    {
      question: "Como funciona o monitoramento remoto?",
      answer: "Através da nossa plataforma FlyHub, os gestores conseguem acompanhar telemetria, rotas, vídeos e métricas de toda a frota em tempo real de qualquer lugar."
    },
    {
      question: "Os sistemas funcionam em áreas remotas?",
      answer: "Sim! Nossas soluções de conectividade híbrida são projetadas para ambientes extremos e áreas remotas, garantindo comunicação estável mesmo nas condições mais desafiadoras."
    }
  ];

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="faq section-padding">
      <div className="container faq-container">
        <h2 className="section-title text-accent glow-text">Perguntas Frequentes:</h2>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item glow-box ${openIndex === index ? 'open' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="text-accent" />
                ) : (
                  <ChevronDown className="text-accent" />
                )}
              </button>
              <div
                className="faq-answer-wrapper"
                style={{ maxHeight: openIndex === index ? '200px' : '0px' }}
              >
                <div className="faq-answer">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: '4rem' }}>
          <a 
            href="https://wa.me/553499793418" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
          >
            FALE COM O CEO - JOÃO PAULO CRUZ ARAUJO
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

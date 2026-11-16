/**
 * Traduz a mensagem pré-preenchida dos links de WhatsApp quando o visitante
 * troca o idioma do site (EN/ES via Google Tradutor). O Google traduz o texto
 * da página, mas não o parâmetro ?text= da URL — por isso fazemos aqui.
 */

const MESSAGES = {
  'Olá! Gostaria de falar com a equipe da Flycast.': {
    en: 'Hello! I would like to talk to the Flycast team.',
    es: '¡Hola! Me gustaría hablar con el equipo de Flycast.',
  },
  'Olá! Gostaria de solicitar uma demonstração da Flycast.': {
    en: 'Hello! I would like to request a Flycast demo.',
    es: '¡Hola! Me gustaría solicitar una demostración de Flycast.',
  },
  'Olá! Gostaria de tirar dúvidas sobre as soluções da Flycast.': {
    en: 'Hello! I have some questions about Flycast solutions.',
    es: '¡Hola! Me gustaría resolver algunas dudas sobre las soluciones de Flycast.',
  },
  'Olá! Gostaria de conhecer a solução Flycast para meu avião.': {
    en: 'Hello! I would like to learn about the Flycast solution for my aircraft.',
    es: '¡Hola! Me gustaría conocer la solución Flycast para mi avión.',
  },
  'Olá! Gostaria de consultar uma demonstração dos Dados de Voo.': {
    en: 'Hello! I would like to see a demo of the Flight Data solution.',
    es: '¡Hola! Me gustaría ver una demostración de los Datos de Vuelo.',
  },
  'Olá! Gostaria de falar com um consultor sobre o Inpaer Colt com FlyBox.': {
    en: 'Hello! I would like to talk to a consultant about the Inpaer Colt with FlyBox.',
    es: '¡Hola! Me gustaría hablar con un consultor sobre el Inpaer Colt con FlyBox.',
  },
  'Olá! Gostaria de falar com um consultor Flycast sobre meu avião.': {
    en: 'Hello! I would like to talk to a Flycast consultant about my aircraft.',
    es: '¡Hola! Me gustaría hablar con un consultor de Flycast sobre mi avión.',
  },
  'Olá! Gostaria de solicitar uma demonstração do FlyHub.': {
    en: 'Hello! I would like to request a FlyHub demo.',
    es: '¡Hola! Me gustaría solicitar una demostración de FlyHub.',
  },
  'Olá! Gostaria de levar o FlyHub para minha escola.': {
    en: 'Hello! I would like to bring FlyHub to my flight school.',
    es: '¡Hola! Me gustaría llevar FlyHub a mi escuela de aviación.',
  },
  'Olá! Gostaria da ficha técnica em PDF do Livecast PRO e Extender.': {
    en: 'Hello! I would like the PDF datasheet for Livecast PRO and Extender.',
    es: '¡Hola! Me gustaría recibir la ficha técnica en PDF de Livecast PRO y Extender.',
  },
  'Olá! Gostaria de saber mais sobre o Livecast IA.': {
    en: 'Hello! I would like to know more about Livecast AI.',
    es: '¡Hola! Me gustaría saber más sobre Livecast IA.',
  },
  'Olá! Gostaria de saber mais sobre o Air Bind para helicópteros.': {
    en: 'Hello! I would like to know more about Air Bind for helicopters.',
    es: '¡Hola! Me gustaría saber más sobre Air Bind para helicópteros.',
  },
};

const FALLBACK = {
  en: 'Hello! I would like to talk to the Flycast team.',
  es: '¡Hola! Me gustaría hablar con el equipo de Flycast.',
};

// Idioma atual escolhido no seletor (cookie do Google Tradutor: "/pt/en")
const currentLang = () => {
  const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/);
  const fromCookie = match ? decodeURIComponent(match[1]).split('/').pop() : '';
  const lang = (fromCookie || document.documentElement.lang || 'pt').slice(0, 2).toLowerCase();
  return lang === 'en' || lang === 'es' ? lang : 'pt';
};

const handleClick = (event) => {
  const link = event.target.closest?.('a[href*="wa.me/"]');
  if (!link) return;

  // Guarda o link original (PT) na primeira vez, para poder voltar a ele
  if (!link.dataset.waOriginal) link.dataset.waOriginal = link.href;
  const originalHref = link.dataset.waOriginal;

  const lang = currentLang();
  if (lang === 'pt') {
    link.href = originalHref;
    return;
  }

  const url = new URL(originalHref);
  const original = url.searchParams.get('text');
  url.searchParams.set('text', (original && MESSAGES[original]?.[lang]) || FALLBACK[lang]);
  link.href = url.toString();
};

export const setupWhatsappI18n = () => {
  // Fase de captura: altera o href antes do navegador seguir o link
  document.addEventListener('click', handleClick, true);
};

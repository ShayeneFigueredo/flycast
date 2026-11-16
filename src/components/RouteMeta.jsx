import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://flycast.com.br';

const DEFAULT_META = {
  title: 'Flycast | Transmissão aérea ao vivo e dados de voo',
  description:
    'A Flycast desenvolve soluções de transmissão aérea ao vivo para helicópteros e de captura e análise de dados de voo para aviões e escolas de aviação. Uberlândia – MG.',
};

// Cada página tem um caminho "oficial" (canonical); os aliases apontam para ele.
const PAGES = [
  {
    paths: ['/'],
    canonical: '/',
    ...DEFAULT_META,
  },
  {
    paths: ['/sobre-nos'],
    canonical: '/sobre-nos',
    title: 'Sobre nós – Tecnologia que conecta a aviação | Flycast',
    description:
      'Conheça a Flycast: mais de 10 anos de experiência em transmissão aérea, integração de câmeras e dados de voo para emissoras, segurança pública e aviação civil.',
  },
  {
    paths: ['/solucoes/transmissao-aerea', '/transmissao-aerea', '/solucoes/helicopteros', '/helicopteros'],
    canonical: '/solucoes/transmissao-aerea',
    title: 'Livecast Pro e Extender – Transmissão aérea ao vivo | Flycast',
    description:
      'Livecast Pro e Extender: transmissão de vídeo ao vivo em alta definição para helicópteros, com soma de banda 5G, baixa latência e maior alcance em voo.',
  },
  {
    paths: ['/solucoes/servicos-integrados', '/servicos-integrados', '/solucoes/instalacao-cameras', '/instalacao-cameras'],
    canonical: '/solucoes/servicos-integrados',
    title: 'Serviços integrados – Câmeras e transmissão em helicópteros | Flycast',
    description:
      'Integração e homologação de câmeras em helicópteros, engenharia aeronáutica e suporte técnico para emissoras de TV e operações de segurança pública.',
  },
  {
    paths: ['/solucoes/setores-atendidos', '/setores-atendidos'],
    canonical: '/solucoes/setores-atendidos',
    title: 'Setores atendidos – Governo, segurança pública e aviação executiva | Flycast',
    description:
      'Conectividade e transmissão aérea para operações governamentais, militares e de segurança pública, e para a aviação executiva e o setor privado.',
  },
  {
    paths: ['/solucoes/avioes', '/avioes'],
    canonical: '/solucoes/avioes',
    title: 'FlyBox e FlyHub – Dados de voo para aviões | Flycast',
    description:
      'FlyBox e FlyHub registram telemetria, vídeo e áudio do voo e reúnem tudo em uma plataforma com replay 3D e análise com IA para proprietários de aviões.',
  },
  {
    paths: [
      '/solucoes/escolas-de-aviacao', '/escolas-de-aviacao', '/solucoes/ciacs', '/ciacs',
      '/solucoes/flybox', '/flybox', '/solucoes/avioes-ciacs', '/avioes-ciacs',
    ],
    canonical: '/solucoes/escolas-de-aviacao',
    title: 'FlyHub para escolas de aviação – Instrução baseada em dados | Flycast',
    description:
      'FlyBox, Fly Record e FlyHub levam dados de voo, debriefing com IA e gestão de alunos e frotas para escolas de aviação e CIACs.',
  },
  {
    paths: ['/login'],
    canonical: '/login',
    title: 'Login FlyHub | Flycast',
    description: 'Acesse a plataforma FlyHub para ver telemetria, rotas e métricas da sua aeronave.',
    noindex: true,
  },
  {
    paths: ['/secret'],
    canonical: '/secret',
    title: 'Arquivo | Flycast',
    description: DEFAULT_META.description,
    noindex: true,
  },
];

const NOT_FOUND = {
  title: 'Página não encontrada | Flycast',
  description: DEFAULT_META.description,
  noindex: true,
};

const setMeta = (attr, key, content) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const setCanonical = (href) => {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!href) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement('link');
    el.rel = 'canonical';
    document.head.appendChild(el);
  }
  el.href = href;
};

/**
 * Atualiza título, description, canonical, robots e Open Graph a cada troca de rota.
 * Obs.: robôs de prévia (WhatsApp, LinkedIn) não executam JS e leem as tags
 * padrão do index.html; o Google executa JS e lê as tags por página.
 */
const RouteMeta = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
    const page = PAGES.find((p) => p.paths.includes(path));
    const meta = page || NOT_FOUND;
    const url = page ? `${SITE_URL}${page.canonical === '/' ? '/' : page.canonical}` : null;

    document.title = meta.title;
    setMeta('name', 'description', meta.description);
    setMeta('name', 'robots', meta.noindex ? 'noindex, nofollow' : 'index, follow');
    setMeta('property', 'og:title', meta.title);
    setMeta('property', 'og:description', meta.description);
    setMeta('name', 'twitter:title', meta.title);
    setMeta('name', 'twitter:description', meta.description);
    if (url) setMeta('property', 'og:url', url);
    setCanonical(url);
  }, [pathname]);

  return null;
};

export default RouteMeta;

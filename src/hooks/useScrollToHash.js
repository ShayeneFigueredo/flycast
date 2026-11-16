import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Ao abrir a página: se a URL tiver âncora (#id), rola até o elemento;
 * caso contrário, volta ao topo. O deslocamento do header fixo é tratado
 * via `scroll-margin-top` no CSS global.
 */
const useScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return undefined;
    }

    const id = decodeURIComponent(hash.slice(1));
    // Aguarda o render/layout (imagens e vídeos podem mudar a altura)
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      else window.scrollTo(0, 0);
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname, hash]);
};

export default useScrollToHash;

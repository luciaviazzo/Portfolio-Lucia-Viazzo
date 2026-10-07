import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { en } from './en';
import { es, type Dict } from './es';
import type { Lang } from './types';

export type { Lang };

const dictionaries: Record<Lang, Dict> = { es, en };
const STORAGE_KEY = 'lang';

interface I18n {
  lang: Lang;
  t: Dict;
  toggle: () => void;
}

const I18nContext = createContext<I18n | null>(null);

/** Idioma guardado; si no hay, el del navegador; por defecto español. */
function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'es' || saved === 'en') return saved;
  } catch {
    /* localStorage no disponible */
  }
  return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'es';
}

function setMeta(selector: string, content: string) {
  document.querySelector(selector)?.setAttribute('content', content);
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang);
  const t = dictionaries[lang];

  // Mantiene sincronizados el idioma del documento, el título y los metadatos.
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    setMeta('meta[name="description"]', t.meta.description);
    setMeta('meta[property="og:title"]', t.meta.title);
    setMeta('meta[property="og:description"]', t.meta.description);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignorar */
    }
  }, [lang, t]);

  const toggle = useCallback(() => setLang((l) => (l === 'es' ? 'en' : 'es')), []);
  const value = useMemo(() => ({ lang, t, toggle }), [lang, t, toggle]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18n {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n debe usarse dentro de <I18nProvider>');
  return ctx;
}

/** Renderiza texto con **resaltados**. */
export function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split('**').map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part))}
    </>
  );
}

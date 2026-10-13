import { createContext, useContext, useEffect, useState } from 'react';
import { DEFAULT_LANG } from './config.js';

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState(DEFAULT_LANG);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === 'mn' ? 'en' : 'mn'));

  return <LangContext.Provider value={{ lang, toggleLang }}>{children}</LangContext.Provider>;
}

/**
 * const { t, lang, toggleLang } = useLang();
 * t({ mn: 'Сайн уу', en: 'Hello' })  →  current language's value
 */
export function useLang() {
  const { lang, toggleLang } = useContext(LangContext);
  const t = (text) => (text && typeof text === 'object' && lang in text ? text[lang] : text);
  return { lang, t, toggleLang };
}

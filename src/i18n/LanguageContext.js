import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from 'react';
import { translations } from './translations';

const LanguageContext = createContext(undefined);

const STORAGE_KEY = 'portfolio-language';

const getInitialLanguage = () => {
  if (typeof window !== 'undefined') {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'fr' || stored === 'en') {
      return stored;
    }
    const navLang = (window.navigator.language || '').toLowerCase();
    if (navLang.startsWith('en')) {
      return 'en';
    }
  }
  return 'fr';
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(getInitialLanguage);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, language);
      document.documentElement.lang = language;
    }
  }, [language]);

  const setLanguage = useCallback((lang) => {
    if (lang === 'fr' || lang === 'en') {
      setLanguageState(lang);
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => (prev === 'fr' ? 'en' : 'fr'));
  }, []);

  const t = useCallback(
    (key) => {
      const dict = translations[language] || {};
      const resolved = key
        .split('.')
        .reduce(
          (acc, part) =>
            acc && acc[part] !== undefined ? acc[part] : undefined,
          dict
        );
      return resolved !== undefined ? resolved : key;
    },
    [language]
  );

  const value = useMemo(
    () => ({ language, setLanguage, toggleLanguage, t }),
    [language, setLanguage, toggleLanguage, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

/**
 * Resolve a possibly-bilingual value.
 * If value is an object shaped like { fr, en }, returns the string for the
 * given language. Otherwise returns the value unchanged.
 */
export const pick = (value, language) => {
  if (
    value &&
    typeof value === 'object' &&
    !Array.isArray(value) &&
    ('fr' in value || 'en' in value)
  ) {
    return value[language] ?? value.fr ?? value.en;
  }
  return value;
};

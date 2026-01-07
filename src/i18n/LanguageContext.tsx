import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import translations, { Language, Translations, languages } from './translations';

const STORAGE_KEY = 'aion-xp-calc-language';
const DEFAULT_LANGUAGE: Language = 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getSystemLocaleLanguage(): Language | null {
  try {
    // Get user's preferred languages from browser
    const browserLocales = navigator.languages?.length 
      ? navigator.languages 
      : [navigator.language];
    
    for (const locale of browserLocales) {
      // Check for exact match first (e.g., 'pt-BR')
      const exactMatch = languages.find(l => l.code.toLowerCase() === locale.toLowerCase());
      if (exactMatch) {
        return exactMatch.code;
      }
      
      // Check for language code match (e.g., 'en-US' -> 'en')
      const langCode = locale.split('-')[0].toLowerCase();
      const langMatch = languages.find(l => l.code.toLowerCase() === langCode);
      if (langMatch) {
        return langMatch.code;
      }
    }
  } catch {
    // navigator not available (SSR)
  }
  return null;
}

function getInitialLanguage(): Language {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && languages.some(l => l.code === stored)) {
      return stored as Language;
    }
  } catch {
    // localStorage not available
  }
  
  // Try to detect system locale
  const systemLanguage = getSystemLocaleLanguage();
  if (systemLanguage) {
    return systemLanguage;
  }
  
  return DEFAULT_LANGUAGE;
}

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // localStorage not available
    }
  };

  // Sync with localStorage on mount (handles SSR hydration)
  useEffect(() => {
    const stored = getInitialLanguage();
    if (stored !== language) {
      setLanguageState(stored);
    }
  }, []);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export function useTranslation() {
  return useLanguage().t;
}

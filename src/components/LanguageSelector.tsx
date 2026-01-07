import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { languages, Language } from '../i18n/translations';
import './LanguageSelector.css';

export default function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, right: 0 });
  const selectorRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const currentLang = languages.find(l => l.code === language)!;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (selectorRef.current && !selectorRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + 8,
        right: window.innerWidth - rect.right,
      });
    }
  }, [isOpen]);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="language-selector" ref={selectorRef}>
      <span className="language-label">{t.language}</span>
      <button 
        ref={buttonRef}
        className={`language-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="language-flag">{currentLang.flag}</span>
        <span className="language-native">{currentLang.nativeName}</span>
        <span className={`language-arrow ${isOpen ? 'open' : ''}`}>▾</span>
      </button>
      
      {isOpen && (
        <ul 
          className="language-dropdown"
          style={{ top: dropdownPos.top, right: dropdownPos.right }}
        >
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                className={`language-option ${lang.code === language ? 'active' : ''}`}
                onClick={() => handleSelect(lang.code)}
              >
                <span className="language-flag">{lang.flag}</span>
                <span className="language-native">{lang.nativeName}</span>
                <span className="language-name">({lang.name})</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

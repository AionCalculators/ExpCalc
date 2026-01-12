import { useState, useMemo, useEffect } from 'react';
import { 
  AionVersion, 
  getXPForLevel, 
  calculateXPNeeded, 
  calculateIterations,
  getMaxLevel,
  MIN_LEVEL
} from './data/xpData';
import { useTranslation } from './i18n/LanguageContext';
import VersionSelector from './components/VersionSelector';
import LevelInput from './components/LevelInput';
import XPBar from './components/XPBar';
import IterationInput from './components/IterationInput';
import ResultDisplay from './components/ResultDisplay';
import LanguageSelector from './components/LanguageSelector';
import './App.css';

const STORAGE_KEYS = {
  currentLevel: 'aion-exp-calc-current-level',
  targetLevel: 'aion-exp-calc-target-level',
  currentXP: 'aion-exp-calc-current-xp',
} as const;

function getStoredNumber(key: string, defaultValue: number): number {
  const stored = localStorage.getItem(key);
  if (stored === null) return defaultValue;
  const parsed = parseInt(stored, 10);
  return isNaN(parsed) ? defaultValue : parsed;
}

function App() {
  const t = useTranslation();
  const [version, setVersion] = useState<AionVersion>('1.0');
  const [currentLevel, setCurrentLevel] = useState(() => 
    getStoredNumber(STORAGE_KEYS.currentLevel, 1)
  );
  const [currentXP, setCurrentXP] = useState(() => 
    getStoredNumber(STORAGE_KEYS.currentXP, 0)
  );
  const [targetLevel, setTargetLevel] = useState(() => 
    getStoredNumber(STORAGE_KEYS.targetLevel, 10)
  );
  const [xpPerIteration, setXpPerIteration] = useState(0);

  // Persist to localStorage when values change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.currentLevel, String(currentLevel));
  }, [currentLevel]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.targetLevel, String(targetLevel));
  }, [targetLevel]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.currentXP, String(currentXP));
  }, [currentXP]);

  // Get XP required for current level
  const currentLevelMaxXP = useMemo(() => {
    return getXPForLevel(version, currentLevel);
  }, [version, currentLevel]);

  // Calculate total XP needed to reach target
  const xpNeeded = useMemo(() => {
    return calculateXPNeeded(version, currentLevel, currentXP, targetLevel);
  }, [version, currentLevel, currentXP, targetLevel]);

  // Calculate iterations if XP per iteration is set
  const iterations = useMemo(() => {
    if (xpPerIteration <= 0) return null;
    return calculateIterations(version, currentLevel, currentXP, targetLevel, xpPerIteration);
  }, [version, currentLevel, currentXP, targetLevel, xpPerIteration]);

  // Get max level for current version
  const maxLevel = useMemo(() => getMaxLevel(version), [version]);

  // Validation errors
  const levelError = useMemo(() => {
    if (currentLevel < MIN_LEVEL || currentLevel > maxLevel - 1) {
      return { field: 'current', message: `${t.levelMustBeBetween} ${MIN_LEVEL} - ${maxLevel - 1}` };
    }
    if (targetLevel < MIN_LEVEL + 1 || targetLevel > maxLevel) {
      return { field: 'target', message: `${t.levelMustBeBetween} ${MIN_LEVEL + 1} - ${maxLevel}` };
    }
    if (targetLevel <= currentLevel) {
      return { field: 'target', message: t.targetMustBeGreater };
    }
    return null;
  }, [currentLevel, targetLevel, maxLevel, t]);

  // Handle level change - reset XP when level changes
  const handleCurrentLevelChange = (newLevel: number) => {
    setCurrentLevel(newLevel);
    setCurrentXP(0);
  };

  // Handle target level change
  const handleTargetLevelChange = (newLevel: number) => {
    setTargetLevel(newLevel);
  };

  // Handle current level increment (with validation)
  const handleCurrentLevelIncrement = (newLevel: number) => {
    if (newLevel >= MIN_LEVEL && newLevel <= maxLevel - 1) {
      setCurrentLevel(newLevel);
      setCurrentXP(0);
    }
  };

  // Handle target level increment (with validation)
  const handleTargetLevelIncrement = (newLevel: number) => {
    if (newLevel > currentLevel && newLevel <= maxLevel) {
      setTargetLevel(newLevel);
    }
  };

  // Handle version change - clamp levels to new max and reset XP
  const handleVersionChange = (newVersion: AionVersion) => {
    const newMaxLevel = getMaxLevel(newVersion);
    setVersion(newVersion);
    // Clamp levels if they exceed new max
    if (currentLevel > newMaxLevel - 1) {
      setCurrentLevel(newMaxLevel - 1);
    }
    if (targetLevel > newMaxLevel) {
      setTargetLevel(newMaxLevel);
    }
    // Reset current XP since XP requirements differ between versions
    setCurrentXP(0);
  };

  return (
    <div className="app">
      <div className="background-effects">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>
      
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">
            <span className="title-accent">{t.titleAccent}</span> {t.appTitle}
          </h1>
          <div className="header-controls">
            <VersionSelector version={version} onVersionChange={handleVersionChange} />
            <LanguageSelector />
          </div>
        </div>
      </header>

      <main className="app-main">
        <section className="input-section">
          <div className="level-inputs">
            <LevelInput
              label={t.currentLevel}
              value={currentLevel}
              onChange={handleCurrentLevelChange}
              onButtonChange={handleCurrentLevelIncrement}
              min={MIN_LEVEL}
              max={maxLevel - 1}
              error={levelError?.field === 'current' ? levelError.message : undefined}
            />
            <LevelInput
              label={t.targetLevel}
              value={targetLevel}
              onChange={handleTargetLevelChange}
              onButtonChange={handleTargetLevelIncrement}
              min={currentLevel + 1}
              max={maxLevel}
              error={levelError?.field === 'target' ? levelError.message : undefined}
            />
          </div>

          <div className="xp-section">
            <h2 className="section-title">{t.currentXPProgress}</h2>
            <XPBar
              totalXP={currentLevelMaxXP}
              currentXP={currentXP}
              onXPChange={setCurrentXP}
            />
          </div>

          <IterationInput
            value={xpPerIteration}
            onChange={setXpPerIteration}
          />
        </section>

        <ResultDisplay
          xpNeeded={xpNeeded}
          iterations={iterations}
          currentLevel={currentLevel}
          targetLevel={targetLevel}
        />
      </main>

      <footer className="app-footer">
        <p>
          {t.xpDataSourced}{' '}
          <a 
            href="https://aionpowerbook.com/powerbook/XP_Requirements" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Aion PowerBook
          </a>
        </p>
        <a 
          href="https://github.com/AionCalculators/ExpCalc" 
          target="_blank" 
          rel="noopener noreferrer"
          className="github-link"
          aria-label="View source on GitHub"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
      </footer>
    </div>
  );
}

export default App;

import { useState, useMemo, useEffect } from 'react';
import { 
  AionVersion, 
  getXPForLevel, 
  calculateXPNeeded, 
  calculateIterations,
  MAX_LEVEL,
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

  // Validation errors
  const levelError = useMemo(() => {
    if (currentLevel < MIN_LEVEL || currentLevel > MAX_LEVEL - 1) {
      return { field: 'current', message: `${t.levelMustBeBetween} ${MIN_LEVEL} - ${MAX_LEVEL - 1}` };
    }
    if (targetLevel < MIN_LEVEL + 1 || targetLevel > MAX_LEVEL) {
      return { field: 'target', message: `${t.levelMustBeBetween} ${MIN_LEVEL + 1} - ${MAX_LEVEL}` };
    }
    if (targetLevel <= currentLevel) {
      return { field: 'target', message: t.targetMustBeGreater };
    }
    return null;
  }, [currentLevel, targetLevel, t]);

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
    if (newLevel >= MIN_LEVEL && newLevel <= MAX_LEVEL - 1) {
      setCurrentLevel(newLevel);
      setCurrentXP(0);
    }
  };

  // Handle target level increment (with validation)
  const handleTargetLevelIncrement = (newLevel: number) => {
    if (newLevel > currentLevel && newLevel <= MAX_LEVEL) {
      setTargetLevel(newLevel);
    }
  };

  // Handle version change - keep levels but reset XP
  const handleVersionChange = (newVersion: AionVersion) => {
    setVersion(newVersion);
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
              max={MAX_LEVEL - 1}
              error={levelError?.field === 'current' ? levelError.message : undefined}
            />
            <LevelInput
              label={t.targetLevel}
              value={targetLevel}
              onChange={handleTargetLevelChange}
              onButtonChange={handleTargetLevelIncrement}
              min={currentLevel + 1}
              max={MAX_LEVEL}
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
      </footer>
    </div>
  );
}

export default App;

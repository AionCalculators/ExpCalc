import { useTranslation } from '../i18n/LanguageContext';
import './ResultDisplay.css';

interface ResultDisplayProps {
  xpNeeded: number;
  iterations: number | null;
  currentLevel: number;
  targetLevel: number;
}

export default function ResultDisplay({ 
  xpNeeded, 
  iterations, 
  currentLevel, 
  targetLevel 
}: ResultDisplayProps) {
  const t = useTranslation();
  const showIterations = iterations !== null && iterations !== Infinity && iterations > 0;
  const noXPNeeded = xpNeeded === 0;
  const alreadyAtTarget = currentLevel >= targetLevel;

  return (
    <div className="result-display">
      <div className="result-header">
        <span className="result-icon">⚔</span>
        <span className="result-title">{t.xpRequired}</span>
        <span className="result-icon">⚔</span>
      </div>
      
      {alreadyAtTarget ? (
        <div className="result-message">
          <span className="result-emoji">✓</span>
          <span>{t.alreadyReached} {targetLevel}!</span>
        </div>
      ) : (
        <>
          <div className="result-main">
            <div className="result-journey">
              <span className="level-badge current">{currentLevel}</span>
              <span className="arrow">→</span>
              <span className="level-badge target">{targetLevel}</span>
            </div>
            <div className="xp-needed">
              <span className="xp-value">{xpNeeded.toLocaleString()}</span>
              <span className="xp-label">{t.xp}</span>
            </div>
          </div>

          {showIterations && (
            <div className="iterations-result">
              <div className="iterations-count">
                <span className="iterations-value">{iterations!.toLocaleString()}</span>
                <span className="iterations-label">{t.iterationsNeeded}</span>
              </div>
            </div>
          )}

          {noXPNeeded && !alreadyAtTarget && (
            <div className="result-note">
              {t.setHigherTarget}
            </div>
          )}
        </>
      )}
    </div>
  );
}

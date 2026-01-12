import { useRef, useState, useCallback } from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import './XPBar.css';

interface XPBarProps {
  totalXP: number;
  currentXP: number;
  onXPChange: (xp: number) => void;
}

const SEGMENTS = 20;

export default function XPBar({ totalXP, currentXP, onXPChange }: XPBarProps) {
  const t = useTranslation();
  const barRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const calculateXPFromPosition = useCallback((clientX: number) => {
    if (!barRef.current) return currentXP;
    
    const rect = barRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));
    return Math.round(percentage * totalXP);
  }, [totalXP, currentXP]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    const newXP = calculateXPFromPosition(e.clientX);
    onXPChange(newXP);
  };

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    const newXP = calculateXPFromPosition(e.clientX);
    onXPChange(newXP);
  }, [isDragging, calculateXPFromPosition, onXPChange]);

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow empty or numeric input
    if (value === '' || /^\d+$/.test(value)) {
      setInputValue(value);
    }
  };

  const handleInputBlur = () => {
    if (inputValue !== '') {
      const parsed = parseInt(inputValue, 10);
      if (!isNaN(parsed)) {
        // Clamp value between 0 and totalXP
        const clampedValue = Math.max(0, Math.min(parsed, totalXP));
        onXPChange(clampedValue);
      }
    }
    setInputValue('');
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleInputBlur();
      (e.target as HTMLInputElement).blur();
    }
  };

  const percentage = totalXP > 0 ? (currentXP / totalXP) * 100 : 0;
  const xpPerSegment = totalXP / SEGMENTS;

  return (
    <div className="xp-bar-container">
      <div 
        className="xp-bar"
        ref={barRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          className="xp-bar-fill" 
          style={{ width: `${percentage}%` }}
        />
        <div className="xp-bar-segments">
          {Array.from({ length: SEGMENTS - 1 }).map((_, i) => (
            <div 
              key={i} 
              className="xp-bar-segment-line"
              style={{ left: `${((i + 1) / SEGMENTS) * 100}%` }}
            />
          ))}
        </div>
        <div className="xp-bar-glow" style={{ width: `${percentage}%` }} />
      </div>
      <div className="xp-bar-labels">
        <span className="xp-current">{currentXP.toLocaleString()}</span>
        <span className="xp-divider">/</span>
        <span className="xp-total">{totalXP.toLocaleString()}</span>
      </div>
      <div className="xp-input-container">
        <label className="xp-input-label">{t.enterXPManually}</label>
        <input
          type="text"
          className="xp-input"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleInputKeyDown}
          placeholder={currentXP.toLocaleString()}
        />
      </div>
      <div className="xp-bar-percentage">
        {percentage.toFixed(1)}%
      </div>
      <div className="xp-bar-hint">
        {t.xpBarHint} ({Math.round(xpPerSegment).toLocaleString()} {t.xpPerSegment})
      </div>
    </div>
  );
}

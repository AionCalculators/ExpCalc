import { MAX_LEVEL, MIN_LEVEL } from '../data/xpData';
import { useTranslation } from '../i18n/LanguageContext';
import './LevelInput.css';

interface LevelInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  onButtonChange: (value: number) => void;
  min?: number;
  max?: number;
  error?: string;
}

export default function LevelInput({ 
  label, 
  value, 
  onChange,
  onButtonChange,
  min = MIN_LEVEL, 
  max = MAX_LEVEL,
  error
}: LevelInputProps) {
  const t = useTranslation();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue)) {
      onChange(newValue);
    }
  };

  const handleDecrement = () => {
    if (value > min) {
      onButtonChange(value - 1);
    }
  };

  const handleIncrement = () => {
    if (value < max) {
      onButtonChange(value + 1);
    }
  };

  return (
    <div className="level-input">
      <label className="level-label">{label}</label>
      <div className="level-controls">
        <button 
          className="level-btn"
          onClick={handleDecrement}
          disabled={value <= min}
          aria-label={t.decreaseLevel}
        >
          −
        </button>
        <input
          type="number"
          className={`level-value ${error ? 'level-value--error' : ''}`}
          value={value}
          onChange={handleChange}
        />
        <button 
          className="level-btn"
          onClick={handleIncrement}
          disabled={value >= max}
          aria-label={t.increaseLevel}
        >
          +
        </button>
      </div>
      {error && <span className="level-error">{error}</span>}
    </div>
  );
}

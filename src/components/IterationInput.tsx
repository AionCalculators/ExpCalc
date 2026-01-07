import { useTranslation } from '../i18n/LanguageContext';
import './IterationInput.css';

interface IterationInputProps {
  value: number;
  onChange: (value: number) => void;
}

export default function IterationInput({ value, onChange }: IterationInputProps) {
  const t = useTranslation();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue >= 0) {
      onChange(newValue);
    } else if (e.target.value === '') {
      onChange(0);
    }
  };

  return (
    <div className="iteration-input">
      <label className="iteration-label">{t.xpPerIteration}</label>
      <div className="iteration-description">
        {t.iterationDescription}
      </div>
      <input
        type="number"
        className="iteration-value"
        value={value || ''}
        onChange={handleChange}
        placeholder={t.iterationPlaceholder}
        min={0}
      />
    </div>
  );
}

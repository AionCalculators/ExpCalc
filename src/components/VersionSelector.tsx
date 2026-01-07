import { AionVersion } from '../data/xpData';
import { useTranslation } from '../i18n/LanguageContext';
import './VersionSelector.css';

interface VersionSelectorProps {
  version: AionVersion;
  onVersionChange: (version: AionVersion) => void;
}

export default function VersionSelector({ version, onVersionChange }: VersionSelectorProps) {
  const t = useTranslation();
  
  return (
    <div className="version-selector">
      <span className="version-label">{t.aionVersion}</span>
      <div className="version-buttons">
        <button
          className={`version-btn ${version === '1.0' ? 'active' : ''}`}
          onClick={() => onVersionChange('1.0')}
        >
          1.0
        </button>
        <button
          className={`version-btn ${version === '4.0' ? 'active' : ''}`}
          onClick={() => onVersionChange('4.0')}
        >
          4.0+
        </button>
      </div>
    </div>
  );
}

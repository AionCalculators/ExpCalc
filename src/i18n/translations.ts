export type Language = 'en' | 'ko' | 'de' | 'fr' | 'ru' | 'zh' | 'ja' | 'pt-BR';

export interface LanguageInfo {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
}

export const languages: LanguageInfo[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'pt-BR', name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷' },
];

export interface Translations {
  // Header
  appTitle: string;
  titleAccent: string;
  
  // Version Selector
  aionVersion: string;
  
  // Level Input
  currentLevel: string;
  targetLevel: string;
  decreaseLevel: string;
  increaseLevel: string;
  
  // XP Bar
  currentXPProgress: string;
  xpBarHint: string;
  xpPerSegment: string;
  
  // Iteration Input
  xpPerIteration: string;
  iterationDescription: string;
  iterationPlaceholder: string;
  
  // Result Display
  xpRequired: string;
  alreadyReached: string;
  xp: string;
  iterationsNeeded: string;
  setHigherTarget: string;
  
  // Validation errors
  levelMustBeBetween: string;
  targetMustBeGreater: string;
  
  // Footer
  xpDataSourced: string;
  
  // Language selector
  language: string;
}

const translations: Record<Language, Translations> = {
  en: {
    appTitle: 'XP Calculator',
    titleAccent: 'Aion',
    aionVersion: 'Aion Version',
    currentLevel: 'Current Level',
    targetLevel: 'Target Level',
    decreaseLevel: 'Decrease level',
    increaseLevel: 'Increase level',
    currentXPProgress: 'Current XP Progress',
    xpBarHint: 'Click or drag on the bar to set your current XP',
    xpPerSegment: 'XP per segment',
    xpPerIteration: 'XP Per Iteration',
    iterationDescription: 'Enter XP gained per quest, kill, or action',
    iterationPlaceholder: 'e.g., 50000',
    xpRequired: 'XP Required',
    alreadyReached: "You've already reached level",
    xp: 'XP',
    iterationsNeeded: 'iterations needed',
    setHigherTarget: 'Set a higher target level to calculate XP',
    levelMustBeBetween: 'Level must be between',
    targetMustBeGreater: 'Target level must be greater than current level',
    xpDataSourced: 'XP data sourced from',
    language: 'Language',
  },
  ko: {
    appTitle: '경험치 계산기',
    titleAccent: '아이온',
    aionVersion: '아이온 버전',
    currentLevel: '현재 레벨',
    targetLevel: '목표 레벨',
    decreaseLevel: '레벨 감소',
    increaseLevel: '레벨 증가',
    currentXPProgress: '현재 경험치 진행',
    xpBarHint: '바를 클릭하거나 드래그하여 현재 경험치를 설정하세요',
    xpPerSegment: '세그먼트당 경험치',
    xpPerIteration: '반복당 경험치',
    iterationDescription: '퀘스트, 처치, 또는 행동당 획득 경험치 입력',
    iterationPlaceholder: '예: 50000',
    xpRequired: '필요 경험치',
    alreadyReached: '이미 레벨에 도달했습니다',
    xp: '경험치',
    iterationsNeeded: '반복 필요',
    setHigherTarget: '경험치를 계산하려면 더 높은 목표 레벨을 설정하세요',
    levelMustBeBetween: '레벨은 다음 범위여야 합니다',
    targetMustBeGreater: '목표 레벨은 현재 레벨보다 높아야 합니다',
    xpDataSourced: '경험치 데이터 출처',
    language: '언어',
  },
  de: {
    appTitle: 'EP-Rechner',
    titleAccent: 'Aion',
    aionVersion: 'Aion Version',
    currentLevel: 'Aktuelles Level',
    targetLevel: 'Ziellevel',
    decreaseLevel: 'Level verringern',
    increaseLevel: 'Level erhöhen',
    currentXPProgress: 'Aktueller EP-Fortschritt',
    xpBarHint: 'Klicken oder ziehen Sie auf die Leiste, um Ihre aktuellen EP einzustellen',
    xpPerSegment: 'EP pro Segment',
    xpPerIteration: 'EP pro Durchgang',
    iterationDescription: 'EP pro Quest, Kill oder Aktion eingeben',
    iterationPlaceholder: 'z.B. 50000',
    xpRequired: 'Benötigte EP',
    alreadyReached: 'Sie haben bereits Level erreicht',
    xp: 'EP',
    iterationsNeeded: 'Durchgänge benötigt',
    setHigherTarget: 'Setzen Sie ein höheres Ziellevel, um EP zu berechnen',
    levelMustBeBetween: 'Level muss zwischen sein',
    targetMustBeGreater: 'Ziellevel muss größer als aktuelles Level sein',
    xpDataSourced: 'EP-Daten stammen von',
    language: 'Sprache',
  },
  fr: {
    appTitle: "Calculateur d'XP",
    titleAccent: 'Aion',
    aionVersion: "Version d'Aion",
    currentLevel: 'Niveau actuel',
    targetLevel: 'Niveau cible',
    decreaseLevel: 'Diminuer le niveau',
    increaseLevel: 'Augmenter le niveau',
    currentXPProgress: "Progression d'XP actuelle",
    xpBarHint: 'Cliquez ou faites glisser sur la barre pour définir votre XP actuelle',
    xpPerSegment: 'XP par segment',
    xpPerIteration: 'XP par itération',
    iterationDescription: 'Entrez les XP gagnés par quête, kill ou action',
    iterationPlaceholder: 'ex: 50000',
    xpRequired: 'XP requise',
    alreadyReached: 'Vous avez déjà atteint le niveau',
    xp: 'XP',
    iterationsNeeded: 'itérations nécessaires',
    setHigherTarget: 'Définissez un niveau cible plus élevé pour calculer les XP',
    levelMustBeBetween: 'Le niveau doit être compris entre',
    targetMustBeGreater: 'Le niveau cible doit être supérieur au niveau actuel',
    xpDataSourced: 'Données XP provenant de',
    language: 'Langue',
  },
  ru: {
    appTitle: 'Калькулятор опыта',
    titleAccent: 'Aion',
    aionVersion: 'Версия Aion',
    currentLevel: 'Текущий уровень',
    targetLevel: 'Целевой уровень',
    decreaseLevel: 'Уменьшить уровень',
    increaseLevel: 'Увеличить уровень',
    currentXPProgress: 'Текущий прогресс опыта',
    xpBarHint: 'Нажмите или перетащите по полосе, чтобы установить текущий опыт',
    xpPerSegment: 'Опыта за сегмент',
    xpPerIteration: 'Опыт за итерацию',
    iterationDescription: 'Введите опыт за квест, убийство или действие',
    iterationPlaceholder: 'напр. 50000',
    xpRequired: 'Требуется опыта',
    alreadyReached: 'Вы уже достигли уровня',
    xp: 'Опыт',
    iterationsNeeded: 'итераций необходимо',
    setHigherTarget: 'Установите более высокий целевой уровень для расчёта опыта',
    levelMustBeBetween: 'Уровень должен быть между',
    targetMustBeGreater: 'Целевой уровень должен быть выше текущего',
    xpDataSourced: 'Данные опыта взяты из',
    language: 'Язык',
  },
  zh: {
    appTitle: '经验计算器',
    titleAccent: '永恒之塔',
    aionVersion: '游戏版本',
    currentLevel: '当前等级',
    targetLevel: '目标等级',
    decreaseLevel: '降低等级',
    increaseLevel: '提升等级',
    currentXPProgress: '当前经验进度',
    xpBarHint: '点击或拖动进度条来设置当前经验值',
    xpPerSegment: '每段经验',
    xpPerIteration: '每次获得经验',
    iterationDescription: '输入每次任务、击杀或行动获得的经验',
    iterationPlaceholder: '例如：50000',
    xpRequired: '所需经验',
    alreadyReached: '您已达到等级',
    xp: '经验',
    iterationsNeeded: '次完成',
    setHigherTarget: '设置更高的目标等级来计算经验',
    levelMustBeBetween: '等级必须在以下范围内',
    targetMustBeGreater: '目标等级必须高于当前等级',
    xpDataSourced: '经验数据来源于',
    language: '语言',
  },
  ja: {
    appTitle: '経験値計算機',
    titleAccent: 'タワー オブ アイオン',
    aionVersion: 'ゲームバージョン',
    currentLevel: '現在のレベル',
    targetLevel: '目標レベル',
    decreaseLevel: 'レベルを下げる',
    increaseLevel: 'レベルを上げる',
    currentXPProgress: '現在の経験値進捗',
    xpBarHint: 'バーをクリックまたはドラッグして現在の経験値を設定',
    xpPerSegment: 'セグメントあたりの経験値',
    xpPerIteration: '1回あたりの経験値',
    iterationDescription: 'クエスト、討伐、アクションで得られる経験値を入力',
    iterationPlaceholder: '例：50000',
    xpRequired: '必要経験値',
    alreadyReached: 'すでにレベルに到達しています',
    xp: '経験値',
    iterationsNeeded: '回必要',
    setHigherTarget: '経験値を計算するには、より高い目標レベルを設定してください',
    levelMustBeBetween: 'レベルは次の範囲である必要があります',
    targetMustBeGreater: '目標レベルは現在のレベルより高くなければなりません',
    xpDataSourced: '経験値データの出典',
    language: '言語',
  },
  'pt-BR': {
    appTitle: 'Calculadora de XP',
    titleAccent: 'Aion',
    aionVersion: 'Versão do Aion',
    currentLevel: 'Nível Atual',
    targetLevel: 'Nível Alvo',
    decreaseLevel: 'Diminuir nível',
    increaseLevel: 'Aumentar nível',
    currentXPProgress: 'Progresso de XP Atual',
    xpBarHint: 'Clique ou arraste na barra para definir seu XP atual',
    xpPerSegment: 'XP por segmento',
    xpPerIteration: 'XP por Iteração',
    iterationDescription: 'Digite o XP ganho por quest, kill ou ação',
    iterationPlaceholder: 'ex: 50000',
    xpRequired: 'XP Necessário',
    alreadyReached: 'Você já alcançou o nível',
    xp: 'XP',
    iterationsNeeded: 'iterações necessárias',
    setHigherTarget: 'Defina um nível alvo maior para calcular XP',
    levelMustBeBetween: 'O nível deve estar entre',
    targetMustBeGreater: 'O nível alvo deve ser maior que o nível atual',
    xpDataSourced: 'Dados de XP obtidos de',
    language: 'Idioma',
  },
};

export default translations;

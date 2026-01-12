// XP requirements for each level in Aion
// Source: https://aionpowerbook.com/powerbook/XP_Requirements
// These are the XP values needed to advance FROM the level TO the next level

export type AionVersion = '1.0' | '4.0';

export interface XPTableEntry {
  level: number;
  xpToNext: number;
}

// XP data for Aion version 1.0+ (levels 1-59, max level 60)
const xpDataV1_0: XPTableEntry[] = [
  { level: 1, xpToNext: 650 },
  { level: 2, xpToNext: 1917 },
  { level: 3, xpToNext: 4230 },
  { level: 4, xpToNext: 8693 },
  { level: 5, xpToNext: 14583 },
  { level: 6, xpToNext: 22885 },
  { level: 7, xpToNext: 34936 },
  { level: 8, xpToNext: 52435 },
  { level: 9, xpToNext: 73125 },
  { level: 10, xpToNext: 94104 },
  { level: 11, xpToNext: 130995 },
  { level: 12, xpToNext: 169608 },
  { level: 13, xpToNext: 217175 },
  { level: 14, xpToNext: 266649 },
  { level: 15, xpToNext: 326185 },
  { level: 16, xpToNext: 392297 },
  { level: 17, xpToNext: 522080 },
  { level: 18, xpToNext: 669712 },
  { level: 19, xpToNext: 817822 },
  { level: 20, xpToNext: 1000147 },
  { level: 21, xpToNext: 1235094 },
  { level: 22, xpToNext: 1609877 },
  { level: 23, xpToNext: 2001924 },
  { level: 24, xpToNext: 2348658 },
  { level: 25, xpToNext: 2686741 },
  { level: 26, xpToNext: 3117416 },
  { level: 27, xpToNext: 3602261 },
  { level: 28, xpToNext: 4012536 },
  { level: 29, xpToNext: 4676472 },
  { level: 30, xpToNext: 5828232 },
  { level: 31, xpToNext: 6808242 },
  { level: 32, xpToNext: 8091124 },
  { level: 33, xpToNext: 9689407 },
  { level: 34, xpToNext: 12669129 },
  { level: 35, xpToNext: 16124465 },
  { level: 36, xpToNext: 19742022 },
  { level: 37, xpToNext: 26021841 },
  { level: 38, xpToNext: 29936163 },
  { level: 39, xpToNext: 36147970 },
  { level: 40, xpToNext: 42173920 },
  { level: 41, xpToNext: 49355480 },
  { level: 42, xpToNext: 57959880 },
  { level: 43, xpToNext: 64372369 },
  { level: 44, xpToNext: 70382402 },
  { level: 45, xpToNext: 73867010 },
  { level: 46, xpToNext: 84015992 },
  { level: 47, xpToNext: 97114886 },
  { level: 48, xpToNext: 111277471 },
  { level: 49, xpToNext: 123808218 },
  { level: 50, xpToNext: 134758442 },
  { level: 51, xpToNext: 149524359 },
  { level: 52, xpToNext: 161368983 },
  { level: 53, xpToNext: 171124204 },
  { level: 54, xpToNext: 178312539 },
  { level: 55, xpToNext: 186211811 },
  { level: 56, xpToNext: 193586498 },
  { level: 57, xpToNext: 197345498 },
  { level: 58, xpToNext: 203000668 },
  { level: 59, xpToNext: 202483220 },
];

// XP data for Aion version 4.0 (levels 1-64, max level 65)
const xpDataV4_0: XPTableEntry[] = [
  { level: 1, xpToNext: 400 },
  { level: 2, xpToNext: 1033 },
  { level: 3, xpToNext: 2387 },
  { level: 4, xpToNext: 5234 },
  { level: 5, xpToNext: 8601 },
  { level: 6, xpToNext: 13323 },
  { level: 7, xpToNext: 21032 },
  { level: 8, xpToNext: 30972 },
  { level: 9, xpToNext: 43087 },
  { level: 10, xpToNext: 56183 },
  { level: 11, xpToNext: 78370 },
  { level: 12, xpToNext: 100203 },
  { level: 13, xpToNext: 129506 },
  { level: 14, xpToNext: 158838 },
  { level: 15, xpToNext: 195209 },
  { level: 16, xpToNext: 238640 },
  { level: 17, xpToNext: 318338 },
  { level: 18, xpToNext: 407257 },
  { level: 19, xpToNext: 506158 },
  { level: 20, xpToNext: 627122 },
  { level: 21, xpToNext: 827364 },
  { level: 22, xpToNext: 1041897 },
  { level: 23, xpToNext: 1299044 },
  { level: 24, xpToNext: 1522142 },
  { level: 25, xpToNext: 1745386 },
  { level: 26, xpToNext: 2017917 },
  { level: 27, xpToNext: 2336082 },
  { level: 28, xpToNext: 2607688 },
  { level: 29, xpToNext: 3039136 },
  { level: 30, xpToNext: 3784200 },
  { level: 31, xpToNext: 4423094 },
  { level: 32, xpToNext: 5255354 },
  { level: 33, xpToNext: 6286020 },
  { level: 34, xpToNext: 8223545 },
  { level: 35, xpToNext: 10478922 },
  { level: 36, xpToNext: 12824678 },
  { level: 37, xpToNext: 16916703 },
  { level: 38, xpToNext: 19447692 },
  { level: 39, xpToNext: 22796975 },
  { level: 40, xpToNext: 27395550 },
  { level: 41, xpToNext: 32060906 },
  { level: 42, xpToNext: 37661563 },
  { level: 43, xpToNext: 40313649 },
  { level: 44, xpToNext: 42806525 },
  { level: 45, xpToNext: 45761278 },
  { level: 46, xpToNext: 49008484 },
  { level: 47, xpToNext: 51861666 },
  { level: 48, xpToNext: 54998404 },
  { level: 49, xpToNext: 58478318 },
  { level: 50, xpToNext: 62106470 },
  { level: 51, xpToNext: 69317277 },
  { level: 52, xpToNext: 75246001 },
  { level: 53, xpToNext: 80259032 },
  { level: 54, xpToNext: 90030075 },
  { level: 55, xpToNext: 104225345 },
  { level: 56, xpToNext: 124225345 },
  { level: 57, xpToNext: 142978501 },
  { level: 58, xpToNext: 165540035 },
  { level: 59, xpToNext: 189974648 },
  { level: 60, xpToNext: 239209928 },
  { level: 61, xpToNext: 248865663 },
  { level: 62, xpToNext: 257678943 },
  { level: 63, xpToNext: 281111621 },
  { level: 64, xpToNext: 508568274 },
];

export const xpData: Record<AionVersion, XPTableEntry[]> = {
  '1.0': xpDataV1_0,
  '4.0': xpDataV4_0,
};

// Max level per version
export const MAX_LEVEL: Record<AionVersion, number> = {
  '1.0': 60,
  '4.0': 65,
};

export const MIN_LEVEL = 1;

// Get max level for a specific version
export function getMaxLevel(version: AionVersion): number {
  return MAX_LEVEL[version];
}

// Get XP required to advance from a specific level
export function getXPForLevel(version: AionVersion, level: number): number {
  const entry = xpData[version].find(e => e.level === level);
  return entry?.xpToNext ?? 0;
}

// Calculate total XP needed to reach targetLevel from currentLevel with currentXP progress
export function calculateXPNeeded(
  version: AionVersion,
  currentLevel: number,
  currentXP: number,
  targetLevel: number
): number {
  if (currentLevel >= targetLevel) return 0;
  
  let totalXPNeeded = 0;
  
  // XP remaining for current level
  const currentLevelXP = getXPForLevel(version, currentLevel);
  totalXPNeeded += Math.max(0, currentLevelXP - currentXP);
  
  // XP for all levels in between
  for (let level = currentLevel + 1; level < targetLevel; level++) {
    totalXPNeeded += getXPForLevel(version, level);
  }
  
  return totalXPNeeded;
}

// Calculate number of iterations needed given XP per iteration
export function calculateIterations(
  version: AionVersion,
  currentLevel: number,
  currentXP: number,
  targetLevel: number,
  xpPerIteration: number
): number {
  if (xpPerIteration <= 0) return Infinity;
  const totalXP = calculateXPNeeded(version, currentLevel, currentXP, targetLevel);
  return Math.ceil(totalXP / xpPerIteration);
}

// Get cumulative XP up to a level (total XP from level 1)
export function getCumulativeXP(version: AionVersion, level: number): number {
  let total = 0;
  for (let l = 1; l < level; l++) {
    total += getXPForLevel(version, l);
  }
  return total;
}

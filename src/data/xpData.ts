// XP requirements for each level in Aion
// Source: https://aionpowerbook.com/powerbook/XP_Requirements
// These are the XP values needed to advance FROM the level TO the next level

export type AionVersion = '1.0' | '4.0';

export interface XPTableEntry {
  level: number;
  xpToNext: number;
}

// XP data for Aion version 1.0 (levels 1-65)
const xpDataV1_0: XPTableEntry[] = [
  { level: 1, xpToNext: 650 },
  { level: 2, xpToNext: 1917 },
  { level: 3, xpToNext: 4230 },
  { level: 4, xpToNext: 7888 },
  { level: 5, xpToNext: 13121 },
  { level: 6, xpToNext: 20130 },
  { level: 7, xpToNext: 29120 },
  { level: 8, xpToNext: 40278 },
  { level: 9, xpToNext: 65026 },
  { level: 10, xpToNext: 82130 },
  { level: 11, xpToNext: 101530 },
  { level: 12, xpToNext: 123431 },
  { level: 13, xpToNext: 148000 },
  { level: 14, xpToNext: 175360 },
  { level: 15, xpToNext: 205680 },
  { level: 16, xpToNext: 239110 },
  { level: 17, xpToNext: 275802 },
  { level: 18, xpToNext: 315899 },
  { level: 19, xpToNext: 459380 },
  { level: 20, xpToNext: 522840 },
  { level: 21, xpToNext: 591740 },
  { level: 22, xpToNext: 666260 },
  { level: 23, xpToNext: 746620 },
  { level: 24, xpToNext: 833040 },
  { level: 25, xpToNext: 1025610 },
  { level: 26, xpToNext: 1137130 },
  { level: 27, xpToNext: 1257960 },
  { level: 28, xpToNext: 1388480 },
  { level: 29, xpToNext: 1529060 },
  { level: 30, xpToNext: 1680130 },
  { level: 31, xpToNext: 1842100 },
  { level: 32, xpToNext: 2015410 },
  { level: 33, xpToNext: 2200530 },
  { level: 34, xpToNext: 2397920 },
  { level: 35, xpToNext: 2608070 },
  { level: 36, xpToNext: 2831480 },
  { level: 37, xpToNext: 3068680 },
  { level: 38, xpToNext: 3320210 },
  { level: 39, xpToNext: 3586640 },
  { level: 40, xpToNext: 3868520 },
  { level: 41, xpToNext: 4166460 },
  { level: 42, xpToNext: 4481080 },
  { level: 43, xpToNext: 4813060 },
  { level: 44, xpToNext: 5163060 },
  { level: 45, xpToNext: 5531850 },
  { level: 46, xpToNext: 5920160 },
  { level: 47, xpToNext: 6328800 },
  { level: 48, xpToNext: 6758600 },
  { level: 49, xpToNext: 7210430 },
  { level: 50, xpToNext: 11042770 },
  { level: 51, xpToNext: 11779600 },
  { level: 52, xpToNext: 12564390 },
  { level: 53, xpToNext: 13399620 },
  { level: 54, xpToNext: 14287950 },
  { level: 55, xpToNext: 23789470 },
  { level: 56, xpToNext: 32174798 },
  { level: 57, xpToNext: 43515618 },
  { level: 58, xpToNext: 58849688 },
  { level: 59, xpToNext: 79594230 },
  { level: 60, xpToNext: 107622178 },
  { level: 61, xpToNext: 145588528 },
  { level: 62, xpToNext: 196933208 },
  { level: 63, xpToNext: 266389308 },
  { level: 64, xpToNext: 360346728 },
];

// XP data for Aion version 4.0 (levels 1-65) - reduced XP requirements
const xpDataV4_0: XPTableEntry[] = [
  { level: 1, xpToNext: 400 },
  { level: 2, xpToNext: 1033 },
  { level: 3, xpToNext: 2387 },
  { level: 4, xpToNext: 4473 },
  { level: 5, xpToNext: 7303 },
  { level: 6, xpToNext: 11287 },
  { level: 7, xpToNext: 16389 },
  { level: 8, xpToNext: 22693 },
  { level: 9, xpToNext: 36640 },
  { level: 10, xpToNext: 42200 },
  { level: 11, xpToNext: 52180 },
  { level: 12, xpToNext: 63450 },
  { level: 13, xpToNext: 76070 },
  { level: 14, xpToNext: 90132 },
  { level: 15, xpToNext: 105726 },
  { level: 16, xpToNext: 122900 },
  { level: 17, xpToNext: 141787 },
  { level: 18, xpToNext: 162376 },
  { level: 19, xpToNext: 236132 },
  { level: 20, xpToNext: 268756 },
  { level: 21, xpToNext: 304180 },
  { level: 22, xpToNext: 342489 },
  { level: 23, xpToNext: 383803 },
  { level: 24, xpToNext: 428233 },
  { level: 25, xpToNext: 527234 },
  { level: 26, xpToNext: 584568 },
  { level: 27, xpToNext: 646896 },
  { level: 28, xpToNext: 714050 },
  { level: 29, xpToNext: 786355 },
  { level: 30, xpToNext: 864045 },
  { level: 31, xpToNext: 947348 },
  { level: 32, xpToNext: 1036418 },
  { level: 33, xpToNext: 1131628 },
  { level: 34, xpToNext: 1233115 },
  { level: 35, xpToNext: 1341200 },
  { level: 36, xpToNext: 1456091 },
  { level: 37, xpToNext: 1578006 },
  { level: 38, xpToNext: 1707248 },
  { level: 39, xpToNext: 1844147 },
  { level: 40, xpToNext: 1989012 },
  { level: 41, xpToNext: 2142182 },
  { level: 42, xpToNext: 2304000 },
  { level: 43, xpToNext: 2474718 },
  { level: 44, xpToNext: 2654674 },
  { level: 45, xpToNext: 2844227 },
  { level: 46, xpToNext: 3043878 },
  { level: 47, xpToNext: 3254024 },
  { level: 48, xpToNext: 3475068 },
  { level: 49, xpToNext: 3707521 },
  { level: 50, xpToNext: 5678495 },
  { level: 51, xpToNext: 6057470 },
  { level: 52, xpToNext: 6461405 },
  { level: 53, xpToNext: 6891365 },
  { level: 54, xpToNext: 7348633 },
  { level: 55, xpToNext: 12233893 },
  { level: 56, xpToNext: 16545844 },
  { level: 57, xpToNext: 22378135 },
  { level: 58, xpToNext: 30264934 },
  { level: 59, xpToNext: 40933998 },
  { level: 60, xpToNext: 55352607 },
  { level: 61, xpToNext: 74894227 },
  { level: 62, xpToNext: 101298395 },
  { level: 63, xpToNext: 137014398 },
  { level: 64, xpToNext: 185328459 },
];

export const xpData: Record<AionVersion, XPTableEntry[]> = {
  '1.0': xpDataV1_0,
  '4.0': xpDataV4_0,
};

export const MAX_LEVEL = 65;
export const MIN_LEVEL = 1;

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

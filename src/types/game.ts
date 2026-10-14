export type IslandRegion =
  | 'Semua'
  | 'Sumatra'
  | 'Jawa'
  | 'Bali & Nusa Tenggara'
  | 'Kalimantan'
  | 'Sulawesi'
  | 'Maluku & Papua';

export type CulturalCategory =
  | 'all'
  | 'rumah_adat'
  | 'tarian'
  | 'makanan'
  | 'suku'
  | 'bahasa'
  | 'provinsi_budaya'; // matching Province name with its culture

export interface ProvinceData {
  id: string;
  name: string;
  capital: string;
  island: IslandRegion;
  ethnicGroups: string;
  languages: string;
  traditionalFood: string;
  traditionalDance: string;
  traditionalHouse: string;
  funFact: string;
  color: string;
}

export type DifficultyLevel = 'easy' | 'medium' | 'hard' | 'master';

export interface DifficultyConfig {
  id: DifficultyLevel;
  label: string;
  rows: number;
  cols: number;
  pairs: number;
  description: string;
  timeLimitSec: number;
  maxMistakes: number;
}

export type GameMode = 'learn' | 'challenge' | 'duel';

export interface MemoryCard {
  id: string;
  pairId: string;
  provinceId: string;
  provinceName: string;
  island: IslandRegion;
  category: CulturalCategory;
  categoryLabel: string;
  title: string;
  subtitle: string;
  details?: string;
  isProvinceCard?: boolean;
  isFlipped: boolean;
  isMatched: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt?: number;
}

export interface PlayerStats {
  gamesPlayed: number;
  gamesWon: number;
  totalMatches: number;
  bestTimeEasy: number | null;
  bestTimeMedium: number | null;
  bestTimeHard: number | null;
  bestTimeMaster: number | null;
  achievements: string[];
}

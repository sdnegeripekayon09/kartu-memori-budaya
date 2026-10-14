import { PlayerStats, DifficultyLevel } from '../types/game';

const STATS_KEY = 'budaya_memori_stats';
const SOUND_KEY = 'budaya_memori_sound_muted';

const defaultStats: PlayerStats = {
  gamesPlayed: 0,
  gamesWon: 0,
  totalMatches: 0,
  bestTimeEasy: null,
  bestTimeMedium: null,
  bestTimeHard: null,
  bestTimeMaster: null,
  achievements: []
};

export function getPlayerStats(): PlayerStats {
  try {
    const raw = localStorage.getItem(STATS_KEY);
    if (!raw) return defaultStats;
    return { ...defaultStats, ...JSON.parse(raw) };
  } catch {
    return defaultStats;
  }
}

export function savePlayerStats(stats: PlayerStats) {
  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch {
    // storage fallback
  }
}

export function recordGameWin(
  difficulty: DifficultyLevel,
  timeTakenSec: number,
  isFlawless: boolean,
  islandFilter: string,
  categoryFilter: string,
  isDuel: boolean
): { newlyUnlocked: string[] } {
  const stats = getPlayerStats();
  stats.gamesPlayed += 1;
  stats.gamesWon += 1;

  // Best times update
  if (difficulty === 'easy') {
    if (stats.bestTimeEasy === null || timeTakenSec < stats.bestTimeEasy) {
      stats.bestTimeEasy = timeTakenSec;
    }
  } else if (difficulty === 'medium') {
    if (stats.bestTimeMedium === null || timeTakenSec < stats.bestTimeMedium) {
      stats.bestTimeMedium = timeTakenSec;
    }
  } else if (difficulty === 'hard') {
    if (stats.bestTimeHard === null || timeTakenSec < stats.bestTimeHard) {
      stats.bestTimeHard = timeTakenSec;
    }
  } else if (difficulty === 'master') {
    if (stats.bestTimeMaster === null || timeTakenSec < stats.bestTimeMaster) {
      stats.bestTimeMaster = timeTakenSec;
    }
  }

  const newlyUnlocked: string[] = [];

  const unlock = (id: string) => {
    if (!stats.achievements.includes(id)) {
      stats.achievements.push(id);
      newlyUnlocked.push(id);
    }
  };

  // Check achievements
  unlock('first_win');
  if (isFlawless) unlock('perfect_memory');
  if (timeTakenSec <= 40) unlock('speed_demon');
  if (islandFilter === 'Sumatra') unlock('sumatra_explorer');
  if (islandFilter === 'Jawa') unlock('java_master');
  if (categoryFilter === 'rumah_adat') unlock('house_detective');
  if (categoryFilter === 'tarian') unlock('dance_expert');
  if (categoryFilter === 'makanan') unlock('food_lover');
  if (isDuel) unlock('duel_champion');
  if (difficulty === 'master') unlock('master_conqueror');

  savePlayerStats(stats);
  return { newlyUnlocked };
}

export function isAudioMuted(): boolean {
  try {
    return localStorage.getItem(SOUND_KEY) === 'true';
  } catch {
    return false;
  }
}

export function setAudioMuted(muted: boolean) {
  try {
    localStorage.setItem(SOUND_KEY, muted ? 'true' : 'false');
  } catch {
    // fallback
  }
}

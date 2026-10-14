import { ProvinceData, CulturalCategory, IslandRegion, DifficultyLevel, MemoryCard } from '../types/game';
import { PROVINCES_DATA, DIFFICULTY_CONFIGS } from '../data/provincesData';

// Fisher-Yates shuffle
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function generateCardDeck(
  difficulty: DifficultyLevel,
  islandFilter: IslandRegion,
  categoryFilter: CulturalCategory
): MemoryCard[] {
  const config = DIFFICULTY_CONFIGS[difficulty];
  const requiredPairs = config.pairs;

  // Filter pool by island if specified
  let pool = PROVINCES_DATA;
  if (islandFilter !== 'Semua') {
    pool = pool.filter(p => p.island === islandFilter);
  }

  // If pool has fewer provinces than requiredPairs, fallback to all provinces
  if (pool.length < requiredPairs) {
    pool = PROVINCES_DATA;
  }

  // Randomly select provinces
  const selectedProvinces = shuffleArray(pool).slice(0, requiredPairs);

  const cards: MemoryCard[] = [];

  const availableCategories: Array<'rumah_adat' | 'tarian' | 'makanan' | 'suku' | 'bahasa'> = [
    'rumah_adat',
    'tarian',
    'makanan',
    'suku',
    'bahasa'
  ];

  selectedProvinces.forEach((province: ProvinceData, idx: number) => {
    const pairId = `pair_${province.id}_${idx}`;

    let resolvedCategory: 'rumah_adat' | 'tarian' | 'makanan' | 'suku' | 'bahasa' | 'provinsi_budaya' = 'rumah_adat';
    if (categoryFilter === 'all') {
      resolvedCategory = availableCategories[idx % availableCategories.length];
    } else if (categoryFilter === 'provinsi_budaya') {
      resolvedCategory = 'provinsi_budaya';
    } else {
      resolvedCategory = categoryFilter;
    }

    let cultureTitle = '';
    let cultureLabel = '';
    let cultureDesc = '';

    if (resolvedCategory === 'rumah_adat') {
      cultureTitle = province.traditionalHouse.split('(')[0].trim();
      cultureLabel = 'Rumah Adat';
      cultureDesc = 'Arsitektur Tradisional';
    } else if (resolvedCategory === 'tarian') {
      cultureTitle = province.traditionalDance.split(',')[0].trim();
      cultureLabel = 'Tarian Daerah';
      cultureDesc = 'Tarian Adat Pusaka';
    } else if (resolvedCategory === 'makanan') {
      cultureTitle = province.traditionalFood.split(',')[0].trim();
      cultureLabel = 'Makanan Khas';
      cultureDesc = 'Kuliner Tradisional';
    } else if (resolvedCategory === 'suku') {
      cultureTitle = `Suku ${province.ethnicGroups.split(',')[0].trim()}`;
      cultureLabel = 'Suku Daerah';
      cultureDesc = 'Masyarakat Adat';
    } else if (resolvedCategory === 'bahasa') {
      cultureTitle = province.languages.split(',')[0].trim();
      cultureLabel = 'Bahasa Daerah';
      cultureDesc = 'Bahasa Tradisional';
    } else {
      // provinsi_budaya
      cultureTitle = province.traditionalHouse.split('(')[0].trim();
      cultureLabel = 'Aset Budaya';
      cultureDesc = 'Warisan Kebudayaan';
    }

    // Card A: Cultural Category Card (Tanpa Nama Provinsi)
    const cardA: MemoryCard = {
      id: `${pairId}_A`,
      pairId,
      provinceId: province.id,
      provinceName: province.name,
      island: province.island,
      category: resolvedCategory as CulturalCategory,
      categoryLabel: cultureLabel,
      title: cultureTitle,
      subtitle: cultureDesc,
      details: cultureDesc,
      isProvinceCard: false,
      isFlipped: false,
      isMatched: false
    };

    // Card B: Province Card (Satu-satunya yang memuat nama provinsi)
    const cardB: MemoryCard = {
      id: `${pairId}_B`,
      pairId,
      provinceId: province.id,
      provinceName: province.name,
      island: province.island,
      category: resolvedCategory as CulturalCategory,
      categoryLabel: 'Provinsi Indonesia',
      title: province.name,
      subtitle: `Ibu Kota: ${province.capital}`,
      details: `${province.island} · Ibu Kota: ${province.capital}`,
      isProvinceCard: true,
      isFlipped: false,
      isMatched: false
    };

    cards.push(cardA, cardB);
  });

  return shuffleArray(cards);
}

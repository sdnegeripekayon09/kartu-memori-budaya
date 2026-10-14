import React from 'react';
import {
  DifficultyLevel,
  IslandRegion,
  CulturalCategory,
  GameMode
} from '../types/game';
import {
  DIFFICULTY_CONFIGS,
  ISLANDS,
  CATEGORIES_CONFIG
} from '../data/provincesData';
import {
  Play,
  Clock,
  Heart,
  Users,
  Smile,
  ShieldAlert,
  Sparkles
} from 'lucide-react';

interface GameSetupProps {
  difficulty: DifficultyLevel;
  setDifficulty: (d: DifficultyLevel) => void;
  island: IslandRegion;
  setIsland: (i: IslandRegion) => void;
  category: CulturalCategory;
  setCategory: (c: CulturalCategory) => void;
  gameMode: GameMode;
  setGameMode: (m: GameMode) => void;
  onStartGame: () => void;
}

export const GameSetup: React.FC<GameSetupProps> = ({
  difficulty,
  setDifficulty,
  island,
  setIsland,
  category,
  setCategory,
  gameMode,
  setGameMode,
  onStartGame
}) => {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-6 space-y-6">
      <div className="border-b border-stone-200 pb-4">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          Pengaturan Permainan Memori
        </h1>
        <p className="text-sm text-stone-600 mt-1">
          Sesuaikan tingkat kesulitan, fokus materi budaya nusantara, dan mode tantangan yang kamu inginkan.
        </p>
      </div>

      {/* 1. Pilih Mode Permainan */}
      <div className="space-y-3">
        <label className="text-xs font-bold text-stone-500 uppercase tracking-wider block">
          1. Pilih Mode Permainan
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Mode Santai / Belajar */}
          <button
            type="button"
            onClick={() => setGameMode('learn')}
            className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
              gameMode === 'learn'
                ? 'bg-amber-50/80 border-amber-600 ring-2 ring-amber-600/20'
                : 'bg-white border-stone-200 hover:border-stone-300'
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 rounded-lg bg-emerald-100 text-emerald-800">
                <Smile className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-stone-900 text-sm">Mode Belajar</h3>
                <span className="text-[11px] text-emerald-700 font-medium">Santai & Edukatif</span>
              </div>
            </div>
            <p className="text-xs text-stone-600">
              Tanpa batasan waktu atau batas salah. Pop-up edukasi muncul di setiap pasangan cocok.
            </p>
          </button>

          {/* Mode Tantangan */}
          <button
            type="button"
            onClick={() => setGameMode('challenge')}
            className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
              gameMode === 'challenge'
                ? 'bg-amber-50/80 border-amber-600 ring-2 ring-amber-600/20'
                : 'bg-white border-stone-200 hover:border-stone-300'
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 rounded-lg bg-amber-100 text-amber-800">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-stone-900 text-sm">Mode Tantangan</h3>
                <span className="text-[11px] text-amber-700 font-medium">Waktu & Nyawa</span>
              </div>
            </div>
            <p className="text-xs text-stone-600">
              Batas waktu mundur ketat dan batas kesalahan (nyawa). Buktikan ketajaman memorimu!
            </p>
          </button>

          {/* Mode Duel 2 Pemain */}
          <button
            type="button"
            onClick={() => setGameMode('duel')}
            className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
              gameMode === 'duel'
                ? 'bg-amber-50/80 border-amber-600 ring-2 ring-amber-600/20'
                : 'bg-white border-stone-200 hover:border-stone-300'
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 rounded-lg bg-blue-100 text-blue-800">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-stone-900 text-sm">Mode Duel 2P</h3>
                <span className="text-[11px] text-blue-700 font-medium">Satu Layar Gantian</span>
              </div>
            </div>
            <p className="text-xs text-stone-600">
              Tanding asah ingatan bergantian dengan teman atau murid di kelas. Siapa kumpulkan pasang terbanyak!
            </p>
          </button>
        </div>
      </div>

      {/* 2. Pilih Tingkat Kesulitan / Grid Size */}
      <div className="space-y-3">
        <label className="text-xs font-bold text-stone-500 uppercase tracking-wider block">
          2. Ukuran Papan & Kesulitan
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {(Object.keys(DIFFICULTY_CONFIGS) as DifficultyLevel[]).map((lvl) => {
            const conf = DIFFICULTY_CONFIGS[lvl];
            const isSelected = difficulty === lvl;

            return (
              <button
                key={lvl}
                type="button"
                onClick={() => setDifficulty(lvl)}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-amber-50/90 border-amber-600 ring-2 ring-amber-600/20'
                    : 'bg-white border-stone-200 hover:border-stone-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-stone-900 text-sm">{conf.label}</span>
                  <span className="text-xs font-semibold text-amber-800">{conf.rows}×{conf.cols}</span>
                </div>
                <div className="text-xs text-stone-600 font-medium">
                  {conf.pairs} Pasangan ({conf.pairs * 2} Kartu)
                </div>
                <div className="text-[11px] text-stone-400 mt-1 flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-stone-400" />
                  <span>{conf.timeLimitSec}s</span>
                  <span>·</span>
                  <Heart className="w-3 h-3 text-red-500" />
                  <span>{conf.maxMistakes}x</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Filter Kategori Budaya */}
      <div className="space-y-3">
        <label className="text-xs font-bold text-stone-500 uppercase tracking-wider block">
          3. Fokus Materi Budaya
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {CATEGORIES_CONFIG.map((cat) => {
            const isSelected = category === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setCategory(cat.id as CulturalCategory)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-amber-800 text-white border-amber-800 shadow-sm'
                    : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300'
                }`}
              >
                <div className="font-semibold text-xs truncate">{cat.label}</div>
                <div
                  className={`text-[11px] mt-0.5 truncate ${
                    isSelected ? 'text-amber-100' : 'text-stone-400'
                  }`}
                >
                  {cat.desc}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Filter Wilayah Pulau */}
      <div className="space-y-3">
        <label className="text-xs font-bold text-stone-500 uppercase tracking-wider block">
          4. Wilayah Kepulauan Indonesia
        </label>
        <div className="flex flex-wrap gap-2">
          {ISLANDS.map((isl) => {
            const isSelected = island === isl;

            return (
              <button
                key={isl}
                type="button"
                onClick={() => setIsland(isl)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-stone-900 text-white shadow-sm'
                    : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
                }`}
              >
                {isl}
              </button>
            );
          })}
        </div>
      </div>

      {/* Ready Button */}
      <div className="pt-4 border-t border-stone-200 flex justify-end">
        <button
          onClick={onStartGame}
          className="w-full sm:w-auto px-8 py-3.5 text-base font-bold text-white bg-amber-700 hover:bg-amber-800 active:scale-98 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <Play className="w-5 h-5 fill-current" />
          <span>Mulai Membuka Kartu</span>
        </button>
      </div>
    </div>
  );
};

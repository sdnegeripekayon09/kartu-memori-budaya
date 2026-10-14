import React from 'react';
import { ACHIEVEMENTS_LIST } from '../data/provincesData';
import { getPlayerStats } from '../utils/storage';
import { Trophy, Award, Clock, Flame, CheckCircle2, Lock, ArrowLeft } from 'lucide-react';

export const AchievementsView: React.FC<{ onBackToHome: () => void; onPlayGame: () => void }> = ({
  onBackToHome,
  onPlayGame
}) => {
  const stats = getPlayerStats();

  const formatTime = (sec: number | null) => {
    if (sec === null) return '-';
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const unlockedCount = stats.achievements.length;
  const totalCount = ACHIEVEMENTS_LIST.length;
  const progressPercent = Math.round((unlockedCount / totalCount) * 100);

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-8 space-y-8">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-6">
        <div>
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-stone-800 transition-colors mb-2 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali ke Beranda</span>
          </button>
          <h1 className="text-3xl font-extrabold text-stone-900 tracking-tight">
            Lencana & Rekor Budaya
          </h1>
          <p className="text-sm text-stone-600 mt-1">
            Kumpulkan penghargaan dari petualanganmu menjelajahi warisan 38 provinsi Indonesia.
          </p>
        </div>

        <button
          onClick={onPlayGame}
          className="px-5 py-2.5 text-sm font-semibold text-white bg-amber-700 hover:bg-amber-800 active:scale-98 rounded-xl shadow-sm transition-all whitespace-nowrap self-start sm:self-auto cursor-pointer"
        >
          Main untuk Raih Lencana
        </button>
      </div>

      {/* Progress & Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-stone-200">
          <div className="flex items-center text-amber-700 mb-1">
            <Trophy className="w-4 h-4 mr-1.5" />
            <span className="text-xs text-stone-500">Lencana Terbuka</span>
          </div>
          <div className="text-2xl font-extrabold text-stone-900 tabular-nums">
            {unlockedCount} / {totalCount}
          </div>
          <div className="w-full bg-stone-100 rounded-full h-1.5 mt-2 overflow-hidden">
            <div
              className="bg-amber-600 h-full rounded-full transition-all"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-stone-200">
          <div className="flex items-center text-amber-700 mb-1">
            <Flame className="w-4 h-4 mr-1.5" />
            <span className="text-xs text-stone-500">Permainan Dimenangkan</span>
          </div>
          <div className="text-2xl font-extrabold text-stone-900 tabular-nums">
            {stats.gamesWon} Ronde
          </div>
          <span className="text-[11px] text-stone-400">Total main: {stats.gamesPlayed} kali</span>
        </div>

        <div className="bg-white p-4 rounded-xl border border-stone-200">
          <div className="flex items-center text-amber-700 mb-1">
            <Clock className="w-4 h-4 mr-1.5" />
            <span className="text-xs text-stone-500">Rekor Terbaik (Mudah)</span>
          </div>
          <div className="text-2xl font-extrabold text-stone-900 tabular-nums">
            {formatTime(stats.bestTimeEasy)}
          </div>
          <span className="text-[11px] text-stone-400">Sedang: {formatTime(stats.bestTimeMedium)}</span>
        </div>

        <div className="bg-white p-4 rounded-xl border border-stone-200">
          <div className="flex items-center text-amber-700 mb-1">
            <Award className="w-4 h-4 mr-1.5" />
            <span className="text-xs text-stone-500">Rekor Terbaik (Sulit)</span>
          </div>
          <div className="text-2xl font-extrabold text-stone-900 tabular-nums">
            {formatTime(stats.bestTimeHard)}
          </div>
          <span className="text-[11px] text-stone-400">Master: {formatTime(stats.bestTimeMaster)}</span>
        </div>
      </div>

      {/* Badges Grid */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-stone-900 tracking-tight">
          Daftar Koleksi Lencana
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {ACHIEVEMENTS_LIST.map((badge) => {
            const isUnlocked = stats.achievements.includes(badge.id);

            return (
              <div
                key={badge.id}
                className={`p-4 rounded-xl border flex items-start gap-4 transition-all ${
                  isUnlocked
                    ? 'bg-white border-amber-300 shadow-xs'
                    : 'bg-stone-50 border-stone-200 opacity-60'
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                    isUnlocked
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-stone-200 text-stone-400'
                  }`}
                >
                  {isUnlocked ? (
                    <Trophy className="w-5 h-5" />
                  ) : (
                    <Lock className="w-5 h-5" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-stone-900 truncate">
                      {badge.title}
                    </h3>
                    {isUnlocked && (
                      <span className="inline-flex items-center text-emerald-600 text-xs font-medium shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                        Terbuka
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                    {badge.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

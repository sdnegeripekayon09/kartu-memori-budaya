import React from 'react';
import { Star, RotateCcw, Home, Trophy, Clock, Target, Award, HeartCrack } from 'lucide-react';
import { GameMode, DifficultyLevel } from '../types/game';
import { ACHIEVEMENTS_LIST } from '../data/provincesData';

interface VictoryModalProps {
  isVictory: boolean;
  gameMode: GameMode;
  difficulty: DifficultyLevel;
  timeTakenSec: number;
  moves: number;
  mistakes: number;
  score: number;
  duelScores?: { player1: number; player2: number };
  newlyUnlockedAchievements: string[];
  onPlayAgain: () => void;
  onGoHome: () => void;
}

export const VictoryModal: React.FC<VictoryModalProps> = ({
  isVictory,
  gameMode,
  timeTakenSec,
  moves,
  mistakes,
  score,
  duelScores,
  newlyUnlockedAchievements,
  onPlayAgain,
  onGoHome
}) => {
  // Calculate 1 to 3 stars based on performance
  const calculateStars = (): number => {
    if (!isVictory) return 0;
    if (mistakes === 0) return 3;
    if (mistakes <= 3) return 2;
    return 1;
  };

  const stars = calculateStars();

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  // Duel winner message
  const getDuelMessage = () => {
    if (!duelScores) return '';
    if (duelScores.player1 > duelScores.player2) {
      return '🎉 Pemain 1 Memenangkan Duel!';
    }
    if (duelScores.player2 > duelScores.player1) {
      return '🎉 Pemain 2 Memenangkan Duel!';
    }
    return '🤝 Hasil Seri! Keduanya Hebat!';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-2xl max-w-md w-full border border-stone-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Banner */}
        <div
          className={`px-6 py-6 text-center text-white ${
            isVictory
              ? 'bg-gradient-to-b from-amber-600 via-amber-700 to-amber-800'
              : 'bg-gradient-to-b from-stone-700 to-stone-800'
          }`}
        >
          {isVictory ? (
            <>
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-amber-500/30 border border-amber-300 flex items-center justify-center text-amber-200 shadow-inner">
                <Trophy className="w-8 h-8 text-amber-200" />
              </div>

              {/* Stars animation */}
              <div className="flex items-center justify-center gap-2 mb-2">
                {[1, 2, 3].map((starIdx) => (
                  <Star
                    key={starIdx}
                    className={`w-7 h-7 transition-all ${
                      starIdx <= stars
                        ? 'text-amber-300 fill-amber-300 drop-shadow'
                        : 'text-amber-900/40 fill-amber-950/20'
                    }`}
                  />
                ))}
              </div>

              <h2 className="text-2xl font-bold tracking-tight">
                {gameMode === 'duel' ? getDuelMessage() : 'Luar Biasa! Ronde Selesai'}
              </h2>
              <p className="text-xs text-amber-100/90 mt-1">
                Kamu telah berhasil mencocokkan warisan budaya Indonesia!
              </p>
            </>
          ) : (
            <>
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-stone-600/50 border border-stone-500 flex items-center justify-center text-stone-300">
                <HeartCrack className="w-8 h-8 text-red-400" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight">Permainan Berakhir</h2>
              <p className="text-xs text-stone-300 mt-1">
                Jangan patah semangat, coba lagi dan asah ingatan budayamu!
              </p>
            </>
          )}
        </div>

        {/* Stats grid */}
        <div className="p-6 space-y-4">
          {gameMode === 'duel' && duelScores ? (
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl">
                <span className="text-xs text-blue-600 font-medium block">Pemain 1</span>
                <span className="text-2xl font-extrabold text-blue-900">{duelScores.player1} Pasang</span>
              </div>
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl">
                <span className="text-xs text-red-600 font-medium block">Pemain 2</span>
                <span className="text-2xl font-extrabold text-red-900">{duelScores.player2} Pasang</span>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-2.5 text-center">
              <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200/60">
                <div className="flex items-center justify-center text-stone-400 mb-1">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] text-stone-500 block">Waktu</span>
                <span className="font-bold text-stone-800 text-sm tabular-nums">
                  {formatTime(timeTakenSec)}
                </span>
              </div>

              <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200/60">
                <div className="flex items-center justify-center text-stone-400 mb-1">
                  <Target className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] text-stone-500 block">Langkah</span>
                <span className="font-bold text-stone-800 text-sm tabular-nums">
                  {moves} kali
                </span>
              </div>

              <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200/60">
                <div className="flex items-center justify-center text-stone-400 mb-1">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] text-stone-500 block">Skor</span>
                <span className="font-bold text-amber-700 text-sm tabular-nums">
                  {score}
                </span>
              </div>
            </div>
          )}

          {/* Newly unlocked badges alert */}
          {newlyUnlockedAchievements.length > 0 && (
            <div className="p-3 bg-amber-50 border border-amber-300/80 rounded-xl">
              <span className="text-xs font-semibold text-amber-900 block mb-1.5 flex items-center gap-1.5">
                <Trophy className="w-3.5 h-3.5 text-amber-600" />
                Lencana Baru Terbuka!
              </span>
              <div className="space-y-1">
                {newlyUnlockedAchievements.map((achId) => {
                  const ach = ACHIEVEMENTS_LIST.find((a) => a.id === achId);
                  if (!ach) return null;
                  return (
                    <div key={achId} className="text-xs text-amber-800 flex items-center gap-2">
                      <span className="font-medium">• {ach.title}:</span>
                      <span className="text-amber-700/80">{ach.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="px-6 pb-6 pt-2 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={onPlayAgain}
            className="w-full py-2.5 px-4 text-sm font-semibold text-white bg-amber-700 hover:bg-amber-800 active:scale-98 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Main Lagi</span>
          </button>
          <button
            onClick={onGoHome}
            className="w-full py-2.5 px-4 text-sm font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 active:scale-98 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Menu Utama</span>
          </button>
        </div>
      </div>
    </div>
  );
};

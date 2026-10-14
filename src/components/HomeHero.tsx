import React from 'react';
import { Play, BookOpen, Trophy, Users, ShieldAlert, Sparkles, Compass } from 'lucide-react';
import { GarudaMascotBadge } from './BatikDecorations';
import { GameMode } from '../types/game';
import { getPlayerStats } from '../utils/storage';

interface HomeHeroProps {
  onStartGame: (mode?: GameMode) => void;
  onOpenEncyclopedia: () => void;
  onOpenAchievements: () => void;
}

export const HomeHero: React.FC<HomeHeroProps> = ({
  onStartGame,
  onOpenEncyclopedia,
  onOpenAchievements
}) => {
  const stats = getPlayerStats();

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 space-y-10">
      {/* Hero Banner Section */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-900 via-amber-800 to-red-950 text-white p-6 sm:p-10 shadow-lg border border-amber-900/40">
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-red-600/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-300 uppercase tracking-widest bg-amber-950/60 px-3 py-1 rounded-full border border-amber-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Edukasi Warisan 38 Provinsi Nusantara</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Permainan Memori Budaya Indonesia
            </h1>

            <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed">
              Asah daya ingatmu sembari mengenali kekayaan rumah adat, tarian tradisional, kuliner legendaris, suku bangsa, dan bahasa daerah dari Sabang sampai Merauke!
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <button
                onClick={() => onStartGame('learn')}
                className="px-6 py-3 text-sm font-bold text-amber-950 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 hover:from-amber-200 hover:to-amber-300 active:scale-98 rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Mulai Bermain</span>
              </button>

              <button
                onClick={onOpenEncyclopedia}
                className="px-5 py-3 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 active:scale-98 border border-white/20 rounded-xl transition-all flex items-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Katalog 38 Provinsi</span>
              </button>
            </div>
          </div>

          {/* Mascot Seal Lockup */}
          <div className="flex flex-col items-center shrink-0">
            <div className="relative">
              <GarudaMascotBadge size={140} className="shadow-2xl ring-4 ring-amber-400/30" />
            </div>
            <div className="text-center mt-3">
              <span className="font-bold text-sm tracking-wide text-amber-200 block">
                Si Garuda Nusantara
              </span>
              <span className="text-[11px] text-amber-300/80">
                Maskot Sahabat Belajar
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Feature / Game Mode Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-stone-900 tracking-tight">
              Pilihan Mode Permainan
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              Pilih gaya bermain sesuai suasana belajarmu
            </p>
          </div>
          <button
            onClick={onOpenAchievements}
            className="flex items-center gap-1.5 text-xs font-semibold text-amber-800 hover:text-amber-900 cursor-pointer"
          >
            <Trophy className="w-4 h-4 text-amber-600" />
            <span>Koleksi Lencana ({stats.achievements.length}/10)</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: Mode Belajar */}
          <div
            onClick={() => onStartGame('learn')}
            className="bg-white rounded-2xl border border-stone-200 p-5 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                Mode Belajar Santai
              </h3>
              <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                Bermain tanpa tekanan waktu. Setiap kartu yang cocok akan memunculkan fakta budaya dan narasi audio yang kaya wawasan.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-medium text-emerald-700">
              <span>Mulai Santai</span>
              <span>&rarr;</span>
            </div>
          </div>

          {/* Card 2: Mode Tantangan */}
          <div
            onClick={() => onStartGame('challenge')}
            className="bg-white rounded-2xl border border-stone-200 p-5 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-3">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                Mode Tantangan Waktu
              </h3>
              <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                Tantang ketajaman memori dengan batas detik mundur dan batas kesalahan (nyawa). Buktikan kamu yang tercepat!
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-medium text-amber-700">
              <span>Uji Kecepatan</span>
              <span>&rarr;</span>
            </div>
          </div>

          {/* Card 3: Mode Duel 2 Pemain */}
          <div
            onClick={() => onStartGame('duel')}
            className="bg-white rounded-2xl border border-stone-200 p-5 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center mb-3">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                Mode Duel 2 Pemain
              </h3>
              <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                Cocok untuk ice-breaking di kelas atau bersaing seru dengan kawan di satu perangkat. Kumpulkan pasangan terbanyak!
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-medium text-blue-700">
              <span>Mulai Duel</span>
              <span>&rarr;</span>
            </div>
          </div>
        </div>
      </div>

      {/* 5 Cultural Pillars Overview */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-4">
        <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider">
          5 Pilar Materi Budaya yang Dipelajari
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
          <div className="p-3 rounded-xl bg-stone-50 border border-stone-100">
            <span className="text-base block mb-0.5">🏠</span>
            <span className="font-bold text-xs text-stone-800 block">Rumah Adat</span>
            <span className="text-[10px] text-stone-400">38 Bentuk Arsitektur</span>
          </div>
          <div className="p-3 rounded-xl bg-stone-50 border border-stone-100">
            <span className="text-base block mb-0.5">💃</span>
            <span className="font-bold text-xs text-stone-800 block">Tarian Daerah</span>
            <span className="text-[10px] text-stone-400">Koreografi Pusaka</span>
          </div>
          <div className="p-3 rounded-xl bg-stone-50 border border-stone-100">
            <span className="text-base block mb-0.5">🍲</span>
            <span className="font-bold text-xs text-stone-800 block">Makanan Khas</span>
            <span className="text-[10px] text-stone-400">Kuliner Khas Daerah</span>
          </div>
          <div className="p-3 rounded-xl bg-stone-50 border border-stone-100">
            <span className="text-base block mb-0.5">👥</span>
            <span className="font-bold text-xs text-stone-800 block">Suku Bangsa</span>
            <span className="text-[10px] text-stone-400">Etnis Nusantara</span>
          </div>
          <div className="p-3 rounded-xl bg-stone-50 border border-stone-100 col-span-2 sm:col-span-1">
            <span className="text-base block mb-0.5">🗣️</span>
            <span className="font-bold text-xs text-stone-800 block">Bahasa Daerah</span>
            <span className="text-[10px] text-stone-400">Ragam Dialek Lokal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Volume2, VolumeX, Maximize, Minimize } from 'lucide-react';

interface HeaderProps {
  currentView: 'home' | 'game' | 'encyclopedia' | 'achievements';
  onNavigate: (view: 'home' | 'game' | 'encyclopedia' | 'achievements') => void;
  isMuted: boolean;
  onToggleMute: () => void;
  onQuickPlay: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  isMuted,
  onToggleMute,
  onQuickPlay,
  isFullscreen,
  onToggleFullscreen
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-900/10 px-4 md:px-8 py-3.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2.5 text-left text-stone-900 hover:text-amber-700 transition-colors whitespace-nowrap shrink-0 group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-600 to-red-600 flex items-center justify-center text-white shadow-sm font-bold text-sm tracking-wider">
            ID
          </div>
          <span className="text-base md:text-lg font-bold tracking-tight">
            Kartu Budaya Nusantara
          </span>
        </button>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
          <button
            onClick={() => onNavigate('home')}
            className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              currentView === 'home'
                ? 'text-amber-800 font-semibold border-b-2 border-amber-600 pb-0.5'
                : 'hover:text-stone-900'
            }`}
          >
            Beranda
          </button>
          <button
            onClick={() => onNavigate('game')}
            className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              currentView === 'game'
                ? 'text-amber-800 font-semibold border-b-2 border-amber-600 pb-0.5'
                : 'hover:text-stone-900'
            }`}
          >
            Mulai Main
          </button>
          <button
            onClick={() => onNavigate('encyclopedia')}
            className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              currentView === 'encyclopedia'
                ? 'text-amber-800 font-semibold border-b-2 border-amber-600 pb-0.5'
                : 'hover:text-stone-900'
            }`}
          >
            Katalog 38 Provinsi
          </button>
          <button
            onClick={() => onNavigate('achievements')}
            className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              currentView === 'achievements'
                ? 'text-amber-800 font-semibold border-b-2 border-amber-600 pb-0.5'
                : 'hover:text-stone-900'
            }`}
          >
            Lencana Budaya
          </button>
        </nav>

        {/* Zone 3: 1 primary action with subtle mute utility and fullscreen button */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onToggleFullscreen}
            aria-label={isFullscreen ? 'Keluar Layar Penuh' : 'Layar Penuh (Fullscreen)'}
            className="p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer"
            title={isFullscreen ? 'Keluar Layar Penuh' : 'Layar Penuh (Fullscreen PID)'}
          >
            {isFullscreen ? (
              <Minimize className="w-4 h-4 text-amber-700" />
            ) : (
              <Maximize className="w-4 h-4 text-stone-600" />
            )}
          </button>
          <button
            onClick={onToggleMute}
            aria-label={isMuted ? 'Nyalakan Suara' : 'Matikan Suara'}
            className="p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer"
            title={isMuted ? 'Nyalakan Audio' : 'Matikan Audio'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-stone-400" /> : <Volume2 className="w-4 h-4 text-amber-700" />}
          </button>
          <button
            onClick={onQuickPlay}
            className="px-4 py-2 text-xs md:text-sm font-semibold text-white bg-amber-700 hover:bg-amber-800 active:scale-98 rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            Main Sekarang
          </button>
        </div>
      </div>
    </header>
  );
};

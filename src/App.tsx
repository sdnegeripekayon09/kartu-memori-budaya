import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HomeHero } from './components/HomeHero';
import { GameSetup } from './components/GameSetup';
import { GameBoard } from './components/GameBoard';
import { EncyclopediaView } from './components/EncyclopediaView';
import { AchievementsView } from './components/AchievementsView';
import { BatikPatternDef } from './components/BatikDecorations';
import {
  DifficultyLevel,
  IslandRegion,
  CulturalCategory,
  GameMode
} from './types/game';
import { isAudioMuted, setAudioMuted } from './utils/storage';
import { sound } from './utils/audio';
import { useFullscreen } from './utils/useFullscreen';

type ActiveView = 'home' | 'setup' | 'board' | 'encyclopedia' | 'achievements';

export default function App() {
  const [view, setView] = useState<ActiveView>('home');
  const [muted, setMuted] = useState<boolean>(() => isAudioMuted());
  const { isFullscreen, toggleFullscreen } = useFullscreen();

  // Game configuration
  const [difficulty, setDifficulty] = useState<DifficultyLevel>('easy');
  const [island, setIsland] = useState<IslandRegion>('Semua');
  const [category, setCategory] = useState<CulturalCategory>('all');
  const [gameMode, setGameMode] = useState<GameMode>('learn');

  useEffect(() => {
    sound.isMuted = muted;
    setAudioMuted(muted);
  }, [muted]);

  const handleToggleMute = () => {
    setMuted((prev) => !prev);
  };

  const handleStartGameFlow = (mode?: GameMode) => {
    if (mode) {
      setGameMode(mode);
    }
    setView('setup');
  };

  const handleLaunchBoard = () => {
    sound.playClick();
    setView('board');
  };

  const handleQuickPlay = () => {
    setDifficulty('easy');
    setIsland('Semua');
    setCategory('all');
    setGameMode('learn');
    sound.playClick();
    setView('board');
  };

  // If currently in GameBoard mode, optimize display for PID:
  // Occupy 100vh with no scroll bars, zero body overflow, and direct card board view.
  if (view === 'board') {
    return (
      <div className="h-screen max-h-screen w-screen overflow-hidden flex flex-col bg-amber-50/40 text-stone-900 select-none overscroll-none touch-manipulation">
        <BatikPatternDef />
        <main className="flex-1 min-h-0 w-full overflow-hidden flex flex-col">
          <GameBoard
            difficulty={difficulty}
            island={island}
            category={category}
            gameMode={gameMode}
            onExitGame={() => setView('home')}
            isFullscreen={isFullscreen}
            onToggleFullscreen={toggleFullscreen}
            isMuted={muted}
            onToggleMute={handleToggleMute}
          />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-amber-50/40 text-stone-900 selection:bg-amber-600 selection:text-white">
      {/* SVG Definitions for Batik & Patterns */}
      <BatikPatternDef />

      {/* Top Bar Header */}
      <Header
        currentView={
          view === 'setup'
            ? 'game'
            : view === 'encyclopedia'
            ? 'encyclopedia'
            : view === 'achievements'
            ? 'achievements'
            : 'home'
        }
        onNavigate={(target) => {
          if (target === 'game') {
            setView('setup');
          } else {
            setView(target);
          }
        }}
        isMuted={muted}
        onToggleMute={handleToggleMute}
        onQuickPlay={handleQuickPlay}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {view === 'home' && (
          <HomeHero
            onStartGame={handleStartGameFlow}
            onOpenEncyclopedia={() => setView('encyclopedia')}
            onOpenAchievements={() => setView('achievements')}
          />
        )}

        {view === 'setup' && (
          <GameSetup
            difficulty={difficulty}
            setDifficulty={setDifficulty}
            island={island}
            setIsland={setIsland}
            category={category}
            setCategory={setCategory}
            gameMode={gameMode}
            setGameMode={setGameMode}
            onStartGame={handleLaunchBoard}
          />
        )}

        {view === 'encyclopedia' && (
          <EncyclopediaView />
        )}

        {view === 'achievements' && (
          <AchievementsView
            onBackToHome={() => setView('home')}
            onPlayGame={() => setView('setup')}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-amber-900/10 bg-white/70 py-6 px-4 text-center text-xs text-stone-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-stone-800">Kartu Memori Budaya Indonesia</span>
            <span>·</span>
            <span>38 Provinsi Nusantara</span>
          </div>
          <div className="text-stone-400">
            Dirancang untuk sarana edukasi interaktif siswa, guru, dan layar sentuh PID kelas.
          </div>
        </div>
      </footer>
    </div>
  );
}

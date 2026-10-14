import React, { useState, useEffect, useRef } from 'react';
import {
  DifficultyLevel,
  IslandRegion,
  CulturalCategory,
  GameMode,
  MemoryCard,
  ProvinceData
} from '../types/game';
import { DIFFICULTY_CONFIGS, PROVINCES_DATA } from '../data/provincesData';
import { generateCardDeck } from '../utils/cardGenerator';
import { CardItem } from './CardItem';
import { MatchFactModal } from './MatchFactModal';
import { VictoryModal } from './VictoryModal';
import { recordGameWin } from '../utils/storage';
import { sound } from '../utils/audio';
import {
  Clock,
  Target,
  Heart,
  Pause,
  Play,
  RotateCcw,
  Sparkles,
  Users,
  Lightbulb,
  Maximize,
  Minimize,
  Volume2,
  VolumeX
} from 'lucide-react';

interface GameBoardProps {
  difficulty: DifficultyLevel;
  island: IslandRegion;
  category: CulturalCategory;
  gameMode: GameMode;
  onExitGame: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
}

export const GameBoard: React.FC<GameBoardProps> = ({
  difficulty,
  island,
  category,
  gameMode,
  onExitGame,
  isFullscreen,
  onToggleFullscreen,
  isMuted,
  onToggleMute
}) => {
  const config = DIFFICULTY_CONFIGS[difficulty];

  // Game state
  const [cards, setCards] = useState<MemoryCard[]>([]);
  const [flippedCards, setFlippedCards] = useState<MemoryCard[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [moves, setMoves] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [score, setScore] = useState(0);
  const [matchedPairsCount, setMatchedPairsCount] = useState(0);

  // Timer states
  const [elapsedSec, setElapsedSec] = useState(0);
  const [remainingSec, setRemainingSec] = useState(config.timeLimitSec);
  const [isPaused, setIsPaused] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isVictory, setIsVictory] = useState(false);

  // Hints
  const [hintsRemaining, setHintsRemaining] = useState(2);

  // Duel states
  const [currentTurn, setCurrentTurn] = useState<1 | 2>(1);
  const [duelScores, setDuelScores] = useState<{ player1: number; player2: number }>({
    player1: 0,
    player2: 0
  });

  // Fact modal
  const [matchedProvinceFact, setMatchedProvinceFact] = useState<ProvinceData | null>(null);

  // End game summary
  const [newlyUnlocked, setNewlyUnlocked] = useState<string[]>([]);

  const timerRef = useRef<number | null>(null);

  // Initialize Board
  const initGame = () => {
    const deck = generateCardDeck(difficulty, island, category);
    setCards(deck);
    setFlippedCards([]);
    setIsProcessing(false);
    setMoves(0);
    setMistakes(0);
    setScore(0);
    setMatchedPairsCount(0);
    setElapsedSec(0);
    setRemainingSec(config.timeLimitSec);
    setIsPaused(false);
    setIsGameOver(false);
    setIsVictory(false);
    setCurrentTurn(1);
    setDuelScores({ player1: 0, player2: 0 });
    setMatchedProvinceFact(null);
    setNewlyUnlocked([]);
    setHintsRemaining(2);
  };

  useEffect(() => {
    initGame();
  }, [difficulty, island, category, gameMode]);

  // Timer loop
  useEffect(() => {
    if (isPaused || isGameOver || isVictory || matchedProvinceFact !== null) return;

    timerRef.current = window.setInterval(() => {
      setElapsedSec((prev) => prev + 1);

      if (gameMode === 'challenge') {
        setRemainingSec((prev) => {
          if (prev <= 1) {
            handleGameOver(false);
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, isGameOver, isVictory, matchedProvinceFact, gameMode]);

  const handleGameOver = (won: boolean) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsGameOver(true);
    setIsVictory(won);

    if (won) {
      sound.playVictory();
      const isFlawless = mistakes === 0;
      const { newlyUnlocked: unlocked } = recordGameWin(
        difficulty,
        elapsedSec,
        isFlawless,
        island,
        category,
        gameMode === 'duel'
      );
      setNewlyUnlocked(unlocked);
    } else {
      sound.playMismatch();
    }
  };

  // Card click handler
  const handleCardClick = (clickedCard: MemoryCard) => {
    if (isProcessing || isPaused || isGameOver || isVictory) return;
    if (clickedCard.isFlipped || clickedCard.isMatched) return;

    sound.playFlip();

    const updatedCards = cards.map((c) =>
      c.id === clickedCard.id ? { ...c, isFlipped: true } : c
    );
    setCards(updatedCards);

    const newFlipped = [...flippedCards, clickedCard];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setIsProcessing(true);
      setMoves((prev) => prev + 1);

      const [firstCard, secondCard] = newFlipped;
      const isMatch = firstCard.pairId === secondCard.pairId;

      if (isMatch) {
        // MATCH!
        setTimeout(() => {
          sound.playMatch();

          setCards((prev) =>
            prev.map((c) =>
              c.pairId === firstCard.pairId
                ? { ...c, isFlipped: true, isMatched: true }
                : c
            )
          );

          const newScore = score + 100 + Math.max(0, 30 - elapsedSec);
          setScore(newScore);

          const newMatchedCount = matchedPairsCount + 1;
          setMatchedPairsCount(newMatchedCount);

          if (gameMode === 'duel') {
            setDuelScores((prev) => ({
              ...prev,
              [currentTurn === 1 ? 'player1' : 'player2']:
                prev[currentTurn === 1 ? 'player1' : 'player2'] + 1
            }));
            // In duel, matching gets you another turn!
          }

          // Trigger Cultural Fact pop-up
          const provinceData = PROVINCES_DATA.find((p) => p.id === firstCard.provinceId);
          if (provinceData) {
            setMatchedProvinceFact(provinceData);
          }

          setFlippedCards([]);
          setIsProcessing(false);

          // Check if all pairs matched
          if (newMatchedCount >= config.pairs) {
            setTimeout(() => {
              handleGameOver(true);
            }, 500);
          }
        }, 300);
      } else {
        // MISMATCH
        setTimeout(() => {
          sound.playMismatch();

          setMistakes((prevMistakes) => {
            const nextMistakes = prevMistakes + 1;
            // In challenge mode, check heart limits
            if (gameMode === 'challenge' && nextMistakes >= config.maxMistakes) {
              handleGameOver(false);
            }
            return nextMistakes;
          });

          // Switch turn in duel
          if (gameMode === 'duel') {
            setCurrentTurn((prev) => (prev === 1 ? 2 : 1));
          }

          // Flip back after 1 second per PRD specification
          setCards((prev) =>
            prev.map((c) =>
              c.id === firstCard.id || c.id === secondCard.id
                ? { ...c, isFlipped: false }
                : c
            )
          );

          setFlippedCards([]);
          setIsProcessing(false);
        }, 1000);
      }
    }
  };

  // Hint feature
  const handleUseHint = () => {
    if (hintsRemaining <= 0 || isProcessing || isPaused || isGameOver) return;

    // Find first unmatched pair
    const unmatched = cards.filter((c) => !c.isMatched);
    if (unmatched.length < 2) return;

    const targetPairId = unmatched[0].pairId;
    setHintsRemaining((prev) => prev - 1);
    sound.playClick();

    // Temporarily flash them
    setCards((prev) =>
      prev.map((c) =>
        c.pairId === targetPairId ? { ...c, isFlipped: true } : c
      )
    );

    setTimeout(() => {
      setCards((prev) =>
        prev.map((c) =>
          c.pairId === targetPairId && !c.isMatched
            ? { ...c, isFlipped: false }
            : c
        )
      );
    }, 900);
  };

  const formatTimer = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  // Grid classes according to difficulty
  const getGridColsClass = () => {
    if (config.cols === 6) return 'grid-cols-4 sm:grid-cols-6';
    if (config.cols === 5) return 'grid-cols-4 sm:grid-cols-5';
    return 'grid-cols-3 sm:grid-cols-4';
  };

  return (
    <div className="w-full h-full max-h-screen flex flex-col justify-between overflow-hidden p-2 sm:p-3 select-none overscroll-none touch-manipulation">
      {/* Top HUD Strip */}
      <div className="shrink-0 bg-white rounded-xl border border-stone-200 shadow-xs px-2.5 sm:px-4 py-1.5 sm:py-2 flex items-center justify-between gap-2 mb-1.5 sm:mb-2">
        {/* Left: Mode / Player indicator */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {gameMode === 'duel' ? (
            <div className="flex items-center gap-1.5 bg-stone-100 p-1 rounded-lg">
              <div
                className={`px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-bold transition-all ${
                  currentTurn === 1
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-stone-600'
                }`}
              >
                P1: {duelScores.player1}
              </div>
              <div
                className={`px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-bold transition-all ${
                  currentTurn === 2
                    ? 'bg-red-600 text-white shadow-xs'
                    : 'text-stone-600'
                }`}
              >
                P2: {duelScores.player2}
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-xs">
              <span className="font-bold text-stone-900">
                {config.label}
              </span>
              <span className="text-stone-300" aria-hidden="true">·</span>
              <span className="text-stone-500 font-medium">
                {matchedPairsCount}/{config.pairs} Pasang
              </span>
            </div>
          )}
        </div>

        {/* Center: Live Meters */}
        <div className="flex items-center gap-2 sm:gap-3 text-xs font-medium text-stone-600">
          {/* Timer */}
          <div className="flex items-center gap-1 bg-stone-50 px-2 py-1 rounded-lg border border-stone-200">
            <Clock className="w-3.5 h-3.5 text-stone-500" />
            <span className="tabular-nums font-bold text-stone-800">
              {gameMode === 'challenge'
                ? formatTimer(remainingSec)
                : formatTimer(elapsedSec)}
            </span>
          </div>

          {/* Moves */}
          <div className="flex items-center gap-1 bg-stone-50 px-2 py-1 rounded-lg border border-stone-200">
            <Target className="w-3.5 h-3.5 text-stone-500" />
            <span className="tabular-nums font-bold text-stone-800">{moves} Langkah</span>
          </div>

          {/* Hearts / Mistakes (In Challenge Mode) */}
          {gameMode === 'challenge' && (
            <div className="flex items-center gap-1 bg-red-50 px-2 py-1 rounded-lg border border-red-200">
              <Heart className="w-3.5 h-3.5 text-red-600 fill-red-600" />
              <span className="tabular-nums font-bold text-red-700">
                {Math.max(0, config.maxMistakes - mistakes)} Sisa
              </span>
            </div>
          )}
        </div>

        {/* Right: Actions (Hint, Fullscreen, Audio, Pause, Reset, Exit) */}
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          {/* Hint button */}
          <button
            onClick={handleUseHint}
            disabled={hintsRemaining <= 0 || isProcessing || isPaused}
            className={`p-1.5 sm:p-2 rounded-lg text-xs font-medium transition-colors flex items-center gap-1 cursor-pointer ${
              hintsRemaining > 0
                ? 'text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200'
                : 'text-stone-300 bg-stone-100 cursor-not-allowed'
            }`}
            title={`Bantuan kilat (sisa ${hintsRemaining})`}
          >
            <Lightbulb className="w-3.5 h-3.5" />
            <span className="text-[11px] font-bold">{hintsRemaining}</span>
          </button>

          {/* Fullscreen Button on HUD */}
          <button
            onClick={onToggleFullscreen}
            className="p-1.5 sm:p-2 text-stone-700 hover:text-amber-800 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
            title={isFullscreen ? 'Keluar Layar Penuh' : 'Layar Penuh (Fullscreen PID)'}
            aria-label="Layar Penuh"
          >
            {isFullscreen ? (
              <Minimize className="w-4 h-4 text-amber-700" />
            ) : (
              <Maximize className="w-4 h-4" />
            )}
          </button>

          {/* Audio Mute Toggle */}
          <button
            onClick={onToggleMute}
            className="p-1.5 sm:p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
            title={isMuted ? 'Nyalakan Audio' : 'Matikan Audio'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-stone-400" /> : <Volume2 className="w-4 h-4 text-amber-700" />}
          </button>

          {/* Pause Toggle */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-1.5 sm:p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
            title={isPaused ? 'Lanjutkan' : 'Jeda Permainan'}
          >
            {isPaused ? <Play className="w-4 h-4 fill-current" /> : <Pause className="w-4 h-4" />}
          </button>

          {/* Reset */}
          <button
            onClick={initGame}
            className="p-1.5 sm:p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
            title="Kocok Ulang Papan"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Exit */}
          <button
            onClick={onExitGame}
            className="px-2.5 py-1.5 text-xs font-semibold text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
          >
            Keluar
          </button>
        </div>
      </div>

      {/* Duel Turn Notification Strip */}
      {gameMode === 'duel' && (
        <div
          className={`shrink-0 py-1 px-3 rounded-lg text-center text-xs font-bold mb-1.5 transition-all ${
            currentTurn === 1
              ? 'bg-blue-600 text-white'
              : 'bg-red-600 text-white'
          }`}
        >
          Giliran Pemain {currentTurn}! Buka 2 kartu yang cocok.
        </div>
      )}

      {/* Active Card Matrix Grid - 100% fills remaining height with ZERO scrolling */}
      <div className="flex-1 min-h-0 w-full overflow-hidden flex items-center justify-center">
        <div
          className="w-full h-full grid gap-1.5 sm:gap-2.5 max-h-full"
          style={{
            gridTemplateRows: `repeat(${config.rows}, minmax(0, 1fr))`,
            gridTemplateColumns: `repeat(${config.cols}, minmax(0, 1fr))`
          }}
        >
          {cards.map((card) => (
            <CardItem
              key={card.id}
              card={card}
              onClick={handleCardClick}
              disabled={isProcessing || isPaused || isGameOver}
              gridCols={config.cols}
            />
          ))}
        </div>
      </div>

      {/* Paused Overlay */}
      {isPaused && (
        <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-xs w-full text-center shadow-xl border border-stone-200">
            <h3 className="text-lg font-bold text-stone-900">Permainan Dijeda</h3>
            <p className="text-xs text-stone-600 mt-1 mb-5">
              Waktu berhenti. Tekan tombol untuk kembali melanjutkan permainan.
            </p>
            <button
              onClick={() => setIsPaused(false)}
              className="w-full py-2.5 text-sm font-semibold text-white bg-amber-700 hover:bg-amber-800 rounded-xl transition-colors cursor-pointer"
            >
              Lanjutkan Permainan
            </button>
          </div>
        </div>
      )}

      {/* Pop-up Cultural Fun Fact Modal on Match */}
      {matchedProvinceFact && (
        <MatchFactModal
          province={matchedProvinceFact}
          onClose={() => setMatchedProvinceFact(null)}
        />
      )}

      {/* Victory / Game Over Modal */}
      {isGameOver && (
        <VictoryModal
          isVictory={isVictory}
          gameMode={gameMode}
          difficulty={difficulty}
          timeTakenSec={elapsedSec}
          moves={moves}
          mistakes={mistakes}
          score={score}
          duelScores={gameMode === 'duel' ? duelScores : undefined}
          newlyUnlockedAchievements={newlyUnlocked}
          onPlayAgain={initGame}
          onGoHome={onExitGame}
        />
      )}
    </div>
  );
};

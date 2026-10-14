import React from 'react';
import { MemoryCard } from '../types/game';
import { CategoryIcon } from './BatikDecorations';
import { Check } from 'lucide-react';

interface CardItemProps {
  card: MemoryCard;
  onClick: (card: MemoryCard) => void;
  disabled: boolean;
  gridCols: number;
}

export const CardItem: React.FC<CardItemProps> = ({
  card,
  onClick,
  disabled
}) => {
  const isRevealed = card.isFlipped || card.isMatched;

  return (
    <div
      className="relative w-full h-full min-h-0 min-w-0 select-none [perspective:1000px] cursor-pointer touch-manipulation"
      onClick={() => {
        if (!disabled && !card.isFlipped && !card.isMatched) {
          onClick(card);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Kartu ${isRevealed ? `${card.categoryLabel}: ${card.title}` : 'tertutup'}`}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && !disabled && !card.isFlipped && !card.isMatched) {
          e.preventDefault();
          onClick(card);
        }
      }}
    >
      <div
        className={`w-full h-full relative transition-transform duration-300 [transform-style:preserve-3d] rounded-xl shadow-xs ${
          isRevealed ? '[transform:rotateY(180deg)]' : ''
        } ${card.isMatched ? 'ring-2 ring-amber-500/80 shadow-md ring-offset-1' : 'hover:scale-[1.01]'}`}
      >
        {/* === CARD BACK (Cover: Authentic Indonesian Batik Motif) === */}
        <div
          className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-xl overflow-hidden border border-amber-900/20 bg-stone-900 flex flex-col items-center justify-center p-1.5 sm:p-2"
          style={{
            backgroundImage: 'url(#batik-card-back), radial-gradient(circle, #7f1d1d 0%, #450a0a 100%)',
            backgroundBlendMode: 'overlay'
          }}
        >
          {/* Subtle geometric border frame */}
          <div className="w-full h-full border border-amber-400/40 rounded-lg flex flex-col items-center justify-center p-1 bg-black/30 backdrop-blur-[1px]">
            {/* Center Garuda/Batik seal icon */}
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full border border-amber-300/60 bg-amber-950/80 flex items-center justify-center shadow-inner text-amber-300 shrink-0">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 sm:w-4 sm:h-4">
                <path d="M12 2L15 8L22 9L17 14L18 21L12 17.5L6 21L7 14L2 9L9 8L12 2Z" />
              </svg>
            </div>
            <span className="text-[9px] sm:text-[11px] font-semibold tracking-wider text-amber-200/90 mt-0.5 uppercase text-center line-clamp-1">
              Nusantara
            </span>
          </div>
        </div>

        {/* === CARD FRONT (Revealed: Culture / Province Data) === */}
        <div
          className={`absolute inset-0 w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-xl bg-white border border-stone-200 p-1.5 sm:p-2.5 flex flex-col justify-between overflow-hidden shadow-xs ${
            card.isMatched ? 'bg-amber-50/70' : ''
          }`}
        >
          {/* Top metadata strip (clean unboxed text, no pills) */}
          <div className="flex items-center justify-between gap-1 text-[10px] sm:text-xs text-stone-500 border-b border-stone-100 pb-1 shrink-0">
            <span className="font-medium text-amber-800 truncate flex items-center gap-1">
              <CategoryIcon category={card.category} className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0 text-amber-600" />
              <span className="truncate max-w-[90px] sm:max-w-none">{card.categoryLabel}</span>
            </span>
            {card.isMatched ? (
              <span className="inline-flex items-center text-emerald-600 shrink-0 font-medium text-[9px] sm:text-[10px]">
                <Check className="w-3 h-3 mr-0.5" />
                Cocok
              </span>
            ) : (
              <span className="text-stone-400 text-[9px] sm:text-[10px] truncate shrink-0">
                {card.isProvinceCard ? card.island : 'Warisan'}
              </span>
            )}
          </div>

          {/* Central Title & Subtitle */}
          <div className="my-auto py-0.5 text-center px-1 overflow-hidden">
            <h4 className="font-bold text-stone-900 leading-tight text-xs sm:text-sm md:text-base line-clamp-2">
              {card.title}
            </h4>
            <p className="text-[10px] sm:text-xs text-stone-600 mt-0.5 line-clamp-1">
              {card.subtitle}
            </p>
          </div>

          {/* Bottom strip: Only show island/region on Province card, never province name on category card */}
          <div className="text-[9px] sm:text-[10px] text-stone-400 text-center truncate pt-0.5 border-t border-stone-100 shrink-0">
            {card.isProvinceCard ? (
              <span className="text-stone-600 font-medium">{card.island}</span>
            ) : (
              <span className="text-stone-400">Warisan Budaya</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

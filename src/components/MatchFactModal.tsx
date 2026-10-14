import React, { useEffect } from 'react';
import { ProvinceData } from '../types/game';
import { Volume2, X, ArrowRight, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';

interface MatchFactModalProps {
  province: ProvinceData | null;
  onClose: () => void;
  autoClose?: boolean;
}

export const MatchFactModal: React.FC<MatchFactModalProps> = ({
  province,
  onClose
}) => {
  useEffect(() => {
    if (!province) return;

    // Optional keyboard escape or enter to continue
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [province, onClose]);

  if (!province) return null;

  const handleReadAloud = () => {
    const textToSpeak = `${province.name}. Ibu kota: ${province.capital}. Rumah adat: ${province.traditionalHouse}. Tarian: ${province.traditionalDance}. Makanan khas: ${province.traditionalFood}. Fakta menarik: ${province.funFact}`;
    sound.speak(textToSpeak);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-lg w-full border border-stone-200 shadow-xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="fact-modal-title"
      >
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 text-white px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span className="text-xs uppercase tracking-wider font-semibold text-amber-200">
              Pasangan Cocok · Fakta Budaya
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-amber-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 space-y-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-stone-500 mb-1">
              <span>{province.island}</span>
              <span aria-hidden="true">·</span>
              <span>Ibu Kota: {province.capital}</span>
            </div>
            <div className="flex items-center justify-between gap-2">
              <h3 id="fact-modal-title" className="text-2xl font-bold text-stone-900 tracking-tight">
                {province.name}
              </h3>
              <button
                onClick={handleReadAloud}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-amber-800 bg-amber-50 hover:bg-amber-100 rounded-lg transition-colors cursor-pointer shrink-0"
                title="Dengarkan pengucapan audio"
              >
                <Volume2 className="w-3.5 h-3.5 text-amber-700" />
                <span>Dengar Audio</span>
              </button>
            </div>
          </div>

          {/* Quick Cultural Snapshot Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
            <div className="bg-stone-50 p-2.5 rounded-lg border border-stone-200/60">
              <span className="text-stone-400 font-medium block">Rumah Adat</span>
              <span className="font-semibold text-stone-800 line-clamp-1">{province.traditionalHouse}</span>
            </div>
            <div className="bg-stone-50 p-2.5 rounded-lg border border-stone-200/60">
              <span className="text-stone-400 font-medium block">Tarian Daerah</span>
              <span className="font-semibold text-stone-800 line-clamp-1">{province.traditionalDance}</span>
            </div>
            <div className="bg-stone-50 p-2.5 rounded-lg border border-stone-200/60">
              <span className="text-stone-400 font-medium block">Makanan Khas</span>
              <span className="font-semibold text-stone-800 line-clamp-1">{province.traditionalFood}</span>
            </div>
            <div className="bg-stone-50 p-2.5 rounded-lg border border-stone-200/60">
              <span className="text-stone-400 font-medium block">Suku & Bahasa</span>
              <span className="font-semibold text-stone-800 line-clamp-1">{province.ethnicGroups.split(',')[0]} · {province.languages.split(',')[0]}</span>
            </div>
          </div>

          {/* Fun Fact Box */}
          <div className="bg-amber-50/70 border border-amber-200/80 p-3.5 rounded-xl">
            <span className="text-xs font-semibold text-amber-900 block mb-1">
              Tahukah Kamu?
            </span>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              {province.funFact}
            </p>
          </div>
        </div>

        {/* Action Footer */}
        <div className="px-5 py-3.5 bg-stone-50 border-t border-stone-200 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-amber-700 hover:bg-amber-800 active:scale-98 rounded-lg transition-all cursor-pointer shadow-sm"
          >
            <span>Lanjut Bermain</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

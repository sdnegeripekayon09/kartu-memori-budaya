import React, { useState, useMemo } from 'react';
import { PROVINCES_DATA, ISLANDS } from '../data/provincesData';
import { ProvinceData, IslandRegion } from '../types/game';
import { Search, Volume2, BookOpen, MapPin, Sparkles, X } from 'lucide-react';
import { sound } from '../utils/audio';

export const EncyclopediaView: React.FC<{ onStartGameWithProvince?: (provinceId: string) => void }> = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIsland, setSelectedIsland] = useState<IslandRegion>('Semua');
  const [activeProvinceModal, setActiveProvinceModal] = useState<ProvinceData | null>(null);

  const filteredProvinces = useMemo(() => {
    return PROVINCES_DATA.filter((p) => {
      const matchIsland = selectedIsland === 'Semua' || p.island === selectedIsland;
      if (!matchIsland) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        p.name.toLowerCase().includes(q) ||
        p.capital.toLowerCase().includes(q) ||
        p.traditionalHouse.toLowerCase().includes(q) ||
        p.traditionalDance.toLowerCase().includes(q) ||
        p.traditionalFood.toLowerCase().includes(q) ||
        p.ethnicGroups.toLowerCase().includes(q) ||
        p.languages.toLowerCase().includes(q)
      );
    });
  }, [searchQuery, selectedIsland]);

  const handleSpeak = (p: ProvinceData, e?: React.MouseEvent) => {
    e?.stopPropagation();
    const narration = `Provinsi ${p.name}. Ibu kota: ${p.capital}. Rumah adat: ${p.traditionalHouse}. Tarian: ${p.traditionalDance}. Kuliner khas: ${p.traditionalFood}. Suku: ${p.ethnicGroups}. Bahasa daerah: ${p.languages}. Fakta penting: ${p.funFact}`;
    sound.speak(narration);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-6">
      {/* Title & Description */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200/80 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs text-amber-800 font-semibold tracking-wide uppercase mb-1">
            <BookOpen className="w-4 h-4 text-amber-600" />
            <span>Katalog Ensiklopedia Kebudayaan</span>
          </div>
          <h1 className="text-3xl font-extrabold text-stone-900 tracking-tight">
            Kekayaan 38 Provinsi Nusantara
          </h1>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl">
            Jelajahi ragam rumah adat, tarian tradisional, kuliner khas, suku bangsa, dan bahasa daerah dari Sabang sampai Merauke.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type="text"
            placeholder="Cari provinsi, tarian, makanan..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 shadow-sm transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Filter Tabs (Functional segmented buttons per design constitution) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
        {ISLANDS.map((island) => (
          <button
            key={island}
            onClick={() => setSelectedIsland(island)}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              selectedIsland === island
                ? 'bg-amber-800 text-white shadow-sm'
                : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
            }`}
          >
            {island}
          </button>
        ))}
      </div>

      {/* Result Count Info */}
      <div className="flex items-center justify-between text-xs text-stone-500">
        <div>
          <span>Menampilkan {filteredProvinces.length} dari 38 Provinsi</span>
          {selectedIsland !== 'Semua' && (
            <>
              <span className="mx-1.5" aria-hidden="true">·</span>
              <span>Wilayah {selectedIsland}</span>
            </>
          )}
        </div>
        <span className="text-stone-400 hidden sm:inline">Klik kartu untuk melihat rincian & fakta menarik</span>
      </div>

      {/* Provinces Grid */}
      {filteredProvinces.length === 0 ? (
        <div className="bg-white rounded-2xl border border-stone-200 p-12 text-center">
          <Search className="w-8 h-8 text-stone-400 mx-auto mb-2" />
          <h3 className="text-base font-semibold text-stone-800">Tidak ada provinsi yang cocok</h3>
          <p className="text-xs text-stone-500 mt-1">Coba kata kunci lain atau pilih filter wilayah yang berbeda.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProvinces.map((province) => (
            <div
              key={province.id}
              onClick={() => setActiveProvinceModal(province)}
              className="bg-white rounded-xl border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all p-5 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {/* Header card */}
                <div className="flex items-start justify-between gap-2 border-b border-stone-100 pb-3 mb-3">
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] text-stone-500">
                      <span>{province.island}</span>
                      <span aria-hidden="true">·</span>
                      <span>Ibu Kota: {province.capital}</span>
                    </div>
                    <h3 className="text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                      {province.name}
                    </h3>
                  </div>

                  <button
                    onClick={(e) => handleSpeak(province, e)}
                    className="p-2 text-stone-400 hover:text-amber-700 hover:bg-amber-50 rounded-lg transition-colors cursor-pointer shrink-0"
                    title="Dengar pengucapan audio"
                    aria-label={`Dengar pengucapan budaya ${province.name}`}
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Cultural items snapshot */}
                <div className="space-y-2 text-xs">
                  <div>
                    <span className="text-stone-400 text-[11px] block">Rumah Adat:</span>
                    <span className="font-semibold text-stone-800 line-clamp-1">{province.traditionalHouse}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 text-[11px] block">Tarian Daerah:</span>
                    <span className="font-semibold text-stone-800 line-clamp-1">{province.traditionalDance}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 text-[11px] block">Makanan Khas:</span>
                    <span className="font-semibold text-stone-800 line-clamp-1">{province.traditionalFood}</span>
                  </div>
                </div>
              </div>

              {/* Bottom footer */}
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                <span className="truncate max-w-[200px]">
                  Suku: {province.ethnicGroups.split(',')[0]}
                </span>
                <span className="text-amber-700 font-medium group-hover:underline">
                  Rincian &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Detailed Modal for clicked province */}
      {activeProvinceModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in"
          onClick={() => setActiveProvinceModal(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-xl w-full border border-stone-200 shadow-2xl overflow-hidden animate-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 text-white p-6 relative">
              <button
                onClick={() => setActiveProvinceModal(null)}
                className="absolute top-4 right-4 p-1 rounded-lg text-amber-200 hover:text-white hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2 text-xs text-amber-200 mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{activeProvinceModal.island}</span>
                <span aria-hidden="true">·</span>
                <span>Ibu Kota: {activeProvinceModal.capital}</span>
              </div>
              <h2 className="text-2xl font-extrabold tracking-tight">
                {activeProvinceModal.name}
              </h2>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
              <div className="flex justify-between items-center pb-2 border-b border-stone-100">
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                  5 Elemen Kebudayaan Utama
                </span>
                <button
                  onClick={() => handleSpeak(activeProvinceModal)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-amber-800 bg-amber-50 hover:bg-amber-100 rounded-lg transition-colors cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5 text-amber-700" />
                  <span>Dengar Narasi Suara</span>
                </button>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="bg-stone-50 p-3 rounded-xl border border-stone-200/60">
                  <span className="text-stone-500 text-xs block font-medium">Rumah Adat</span>
                  <span className="font-bold text-stone-900">{activeProvinceModal.traditionalHouse}</span>
                </div>
                <div className="bg-stone-50 p-3 rounded-xl border border-stone-200/60">
                  <span className="text-stone-500 text-xs block font-medium">Tarian Tradisional</span>
                  <span className="font-bold text-stone-900">{activeProvinceModal.traditionalDance}</span>
                </div>
                <div className="bg-stone-50 p-3 rounded-xl border border-stone-200/60">
                  <span className="text-stone-500 text-xs block font-medium">Makanan Khas</span>
                  <span className="font-bold text-stone-900">{activeProvinceModal.traditionalFood}</span>
                </div>
                <div className="bg-stone-50 p-3 rounded-xl border border-stone-200/60">
                  <span className="text-stone-500 text-xs block font-medium">Suku Bangsa Adat</span>
                  <span className="font-bold text-stone-900">{activeProvinceModal.ethnicGroups}</span>
                </div>
                <div className="bg-stone-50 p-3 rounded-xl border border-stone-200/60">
                  <span className="text-stone-500 text-xs block font-medium">Bahasa Daerah</span>
                  <span className="font-bold text-stone-900">{activeProvinceModal.languages}</span>
                </div>
              </div>

              {/* Fun Fact Section */}
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                  <span>Fakta Unik & Sejarah</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {activeProvinceModal.funFact}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-stone-50 border-t border-stone-200 flex justify-end">
              <button
                onClick={() => setActiveProvinceModal(null)}
                className="px-4 py-2 text-xs sm:text-sm font-semibold text-stone-700 bg-white border border-stone-300 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

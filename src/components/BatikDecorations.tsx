import React from 'react';

/**
 * Traditional Indonesian Batik SVG Patterns and Crests
 */

export const BatikPatternDef: React.FC = () => (
  <svg width="0" height="0" className="absolute hidden">
    <defs>
      {/* Batik Kawung Pattern */}
      <pattern id="batik-kawung" width="36" height="36" patternUnits="userSpaceOnUse">
        <rect width="36" height="36" fill="#1e293b" />
        {/* Central diamond */}
        <path d="M18 4 L32 18 L18 32 L4 18 Z" fill="#0f172a" />
        {/* Ellipses forming the kawung palm fruit */}
        <ellipse cx="18" cy="9" rx="5" ry="8" fill="#d97706" opacity="0.45" />
        <ellipse cx="18" cy="27" rx="5" ry="8" fill="#d97706" opacity="0.45" />
        <ellipse cx="9" cy="18" rx="8" ry="5" fill="#d97706" opacity="0.45" />
        <ellipse cx="27" cy="18" rx="8" ry="5" fill="#d97706" opacity="0.45" />
        {/* Core highlight dot */}
        <circle cx="18" cy="18" r="3.5" fill="#fbbf24" />
        <circle cx="18" cy="18" r="1.5" fill="#92400e" />
        {/* Corner dots */}
        <circle cx="0" cy="0" r="2.5" fill="#fbbf24" opacity="0.6" />
        <circle cx="36" cy="0" r="2.5" fill="#fbbf24" opacity="0.6" />
        <circle cx="0" cy="36" r="2.5" fill="#fbbf24" opacity="0.6" />
        <circle cx="36" cy="36" r="2.5" fill="#fbbf24" opacity="0.6" />
      </pattern>

      {/* Luxury Red & Gold Batik for Card Back */}
      <pattern id="batik-card-back" width="40" height="40" patternUnits="userSpaceOnUse">
        <rect width="40" height="40" fill="#7f1d1d" />
        <path d="M0 0 L40 40 M40 0 L0 40" stroke="#991b1b" strokeWidth="1" />
        <path d="M20 0 L40 20 L20 40 L0 20 Z" fill="#450a0a" stroke="#d97706" strokeWidth="0.75" />
        <circle cx="20" cy="20" r="6" fill="#b45309" stroke="#fef08a" strokeWidth="0.8" />
        <circle cx="20" cy="20" r="2.5" fill="#fef08a" />
        {/* Quarter circles at corners */}
        <path d="M0 0 Q 10 10 0 20 Z" fill="#991b1b" opacity="0.4" />
        <path d="M40 0 Q 30 10 40 20 Z" fill="#991b1b" opacity="0.4" />
        <path d="M0 40 Q 10 30 0 20 Z" fill="#991b1b" opacity="0.4" />
        <path d="M40 40 Q 30 30 40 20 Z" fill="#991b1b" opacity="0.4" />
      </pattern>
    </defs>
  </svg>
);

export const GarudaMascotBadge: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = '' }) => (
  <div
    style={{ width: size, height: size }}
    className={`relative shrink-0 flex items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 via-amber-600 to-red-600 shadow-md p-2.5 text-white ${className}`}
  >
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow">
      {/* Stylized Indonesian Garuda Emblem & Headpiece */}
      {/* Golden Wings */}
      <path
        d="M50 24 C38 10 18 16 10 36 C24 38 36 34 46 38 C40 50 26 56 16 66 C32 64 42 56 48 50 C44 64 34 76 22 84 C40 80 50 68 50 60 C50 68 60 80 78 84 C66 76 56 64 52 50 C58 56 68 64 84 66 C74 56 60 50 54 38 C64 34 76 38 90 36 C82 16 62 10 50 24 Z"
        fill="#FDE047"
        stroke="#B45309"
        strokeWidth="2"
      />
      {/* Central Shield (Merah Putih) */}
      <path
        d="M50 40 L62 46 C62 62 50 72 50 72 C50 72 38 62 38 46 Z"
        fill="#DC2626"
        stroke="#FEF08A"
        strokeWidth="2"
      />
      <path
        d="M50 56 L62 56 C61 63 50 72 50 72 C50 72 39 63 38 56 Z"
        fill="#FFFFFF"
      />
      {/* Golden Star in Heart */}
      <polygon
        points="50,45 52,51 58,51 53,54 55,60 50,56 45,60 47,54 42,51 48,51"
        fill="#FBBF24"
      />
      {/* Crown / Headdress */}
      <polygon points="50,14 44,24 56,24" fill="#FBBF24" stroke="#92400E" strokeWidth="1" />
      <circle cx="50" cy="14" r="3" fill="#EF4444" />
    </svg>
  </div>
);

export const CategoryIcon: React.FC<{ category: string; className?: string }> = ({ category, className = 'w-5 h-5' }) => {
  switch (category) {
    case 'rumah_adat':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {/* Traditional House Roof (Gonjong / Joglo silhouette) */}
          <path d="M3 11 L12 3 L21 11" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 10 L1 8" strokeLinecap="round" />
          <path d="M20 10 L23 8" strokeLinecap="round" />
          <path d="M5 11 V20 H19 V11" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 20 V14 H14 V20" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'tarian':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {/* Dancer figure with graceful arms & fan */}
          <circle cx="12" cy="5" r="2.5" />
          <path d="M12 8 V16" strokeLinecap="round" />
          <path d="M5 11 C8 9 10 11 12 11 C14 11 17 8 20 6" strokeLinecap="round" />
          <path d="M9 21 L12 16 L15 21" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 6 C20 7 21 9 20 10" strokeLinecap="round" />
        </svg>
      );
    case 'makanan':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {/* Food bowl with steam / spoon & fork */}
          <path d="M4 11 C4 16 7.5 19 12 19 C16.5 19 20 16 20 11 H4 Z" strokeLinejoin="round" />
          <path d="M7 6 C7 4 8 3 8 3" strokeLinecap="round" />
          <path d="M12 6 C12 4 13 3 13 3" strokeLinecap="round" />
          <path d="M17 6 C17 4 18 3 18 3" strokeLinecap="round" />
          <line x1="8" y1="21" x2="16" y2="21" strokeLinecap="round" />
        </svg>
      );
    case 'suku':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {/* People / Community */}
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case 'bahasa':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {/* Dialogue / Languages */}
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinejoin="round" />
          <path d="M8 9h8" strokeLinecap="round" />
          <path d="M8 13h5" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {/* Map Pin / Indonesia */}
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
  }
};

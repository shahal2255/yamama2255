import React from 'react';

interface YamamaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const YamamaLogo: React.FC<YamamaLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const sizeMap = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24 sm:w-28 sm:h-28',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Exact Circular Mascot Logo Emblem */}
      <div
        className={`relative ${sizeMap[size]} shrink-0 rounded-full overflow-hidden border-2 border-amber-400/80 shadow-lg shadow-red-950/60 bg-[#16171d] ring-2 ring-red-600/40`}
      >
        <img
          src="/src/assets/images/yamama_shawaya_logo_1790144539774.jpg"
          alt="Yamama Shawaya Logo - Refill Your Energy"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105"
        />
      </div>

      {showText && (
        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-1.5">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-display">
              Yamama <span className="text-red-500 font-extrabold">Shawaya</span>
            </span>
          </div>
          <span className="text-[10px] sm:text-[11px] font-bold text-amber-400 tracking-wider uppercase">
            Refill Your Energy
          </span>
        </div>
      )}
    </div>
  );
};

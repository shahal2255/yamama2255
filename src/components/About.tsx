import React from 'react';
import { Flame, Sparkles, UtensilsCrossed, GlassWater } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { YamamaLogo } from './YamamaLogo';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0e0f14] relative border-t border-zinc-900 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-red-500 font-bold uppercase tracking-widest text-xs sm:text-sm mb-3">
            About Our Restaurant
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Delicious Flavours Crafted with Passion
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950 group">
              <img
                src="/src/assets/images/yamama_dining_ambiance_1790145016631.jpg"
                alt="Yamama Shawaya Restaurant Dining Ambiance"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-red-400">
                  {RESTAURANT_INFO.category}
                </span>
                <p className="text-lg font-bold text-white mt-0.5">
                  Yamama Shawaya — Oradampalam, Perinthalmanna
                </p>
                <p className="text-xs text-zinc-300 mt-1">
                  Open every day 12:30 PM to 12:00 AM midnight
                </p>
              </div>
            </div>

            {/* Accent badge */}
            <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-red-600 text-white px-5 py-3 rounded-xl shadow-xl border border-red-400/40 hidden sm:block">
              <p className="text-xs font-medium text-red-100">Everyday Price Range</p>
              <p className="text-xl font-black text-white">{RESTAURANT_INFO.priceRange}</p>
            </div>
          </div>

          {/* Right Column: Narrative & Specialties */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            <div className="flex items-center gap-3">
              <YamamaLogo size="sm" showText={false} />
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
                  Signature Motto
                </span>
                <span className="text-sm font-extrabold text-white">
                  "Refill Your Energy"
                </span>
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              Authentic Shawaya &amp; Kerala Grills at Oradampalam
            </h3>

            <p className="text-base text-zinc-300 leading-relaxed">
              Yamama Shawaya is a welcoming restaurant located in Oradampalam-Valiyavitilpadi, Tirurkad, Perinthalmanna, Kerala. We specialize in serving mouth-watering rotisserie grilled Shawaya chicken, flavorful Al Faham grills, fragrant Bishawari rice combos, soft kubus, and refreshing chilled mojitos.
            </p>

            <p className="text-base text-zinc-300 leading-relaxed">
              Whether you are stopping by for a hearty lunch with family, picking up takeaway dinner, or enjoying late-night grills with friends, our kitchen is dedicated to serving fresh, piping-hot meals packed with robust spices and delicious authentic taste.
            </p>

            {/* Specialties grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 flex items-start gap-3 hover:border-red-900/50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-red-600/15 border border-red-500/20 flex items-center justify-center text-red-500 shrink-0">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Rotisserie Shawaya</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Golden rotisserie chicken served with signature dips and rice.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 flex items-start gap-3 hover:border-red-900/50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-red-600/15 border border-red-500/20 flex items-center justify-center text-red-500 shrink-0">
                  <UtensilsCrossed className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Al Faham Varieties</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Normal, spicy Kondattam, and zesty Peri Peri grills.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 flex items-start gap-3 hover:border-red-900/50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-red-600/15 border border-red-500/20 flex items-center justify-center text-red-500 shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Bishawari Combos</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Aromatic spiced long-grain rice combos &amp; fresh kubus.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 flex items-start gap-3 hover:border-red-900/50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-red-600/15 border border-red-500/20 flex items-center justify-center text-red-500 shrink-0">
                  <GlassWater className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Bene Tibi Mojitos</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">9 refreshing chilled fruit mocktails at just ₹120 each.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

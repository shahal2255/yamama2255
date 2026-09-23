import React from 'react';
import { Phone, Utensils, Star, Clock, MapPin, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#0c0d10]">
      {/* Subtle red ambiance gradient glow behind hero */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-red-900/15 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Trust & Location tag with Exact Mascot Logo Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-950/40 border border-red-800/40 text-red-300 text-xs font-semibold w-fit shadow-sm">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span>Perinthalmanna, Kerala</span>
                <span className="text-zinc-600">·</span>
                <span className="flex items-center gap-1 text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  {RESTAURANT_INFO.googleRating} ({RESTAURANT_INFO.reviewCount} Google reviews)
                </span>
              </div>
            </div>

            {/* Brand Logo & Name Lockup */}
            <div className="flex items-center gap-3.5 mb-3">
              <img
                src="/src/assets/images/yamama_shawaya_logo_1790144539774.jpg"
                alt="Yamama Shawaya Official Mascot Logo"
                referrerPolicy="no-referrer"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-amber-400 shadow-lg shadow-red-950/60 ring-2 ring-red-600/40 shrink-0"
              />
              <div>
                <p className="text-red-500 font-bold uppercase tracking-wider text-xs sm:text-sm">
                  Official Shawaya Restaurant
                </p>
                <p className="text-amber-400 text-xs font-bold tracking-wide">
                  Refill Your Energy
                </p>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Authentic Shawaya &amp; <br />
              <span className="bg-gradient-to-r from-red-500 via-red-400 to-amber-400 bg-clip-text text-transparent">
                Fresh Charcoal Grills
              </span>
            </h1>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mb-8">
              Experience the succulent taste of authentic rotisserie grilled chicken, smoky Al Faham, fragrant Bishawari rice combos, warm kubus, and chilled Bene Tibi mojitos crafted for unforgettable dining.
            </p>

            {/* Prominent Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 text-sm sm:text-base font-bold text-white bg-red-600 rounded-xl hover:bg-red-700 active:scale-95 transition-all shadow-xl shadow-red-950/60 border border-red-500/40"
              >
                <Utensils className="w-5 h-5" />
                <span>View Menu</span>
              </a>

              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 text-sm sm:text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-95 rounded-xl transition-all shadow-xl shadow-emerald-950/40 border border-emerald-500/40"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                <span>WhatsApp Order</span>
              </a>

              <a
                href={RESTAURANT_INFO.phoneTel}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 text-sm sm:text-base font-bold text-zinc-200 bg-zinc-900 rounded-xl hover:bg-zinc-800 hover:text-white active:scale-95 transition-all border border-zinc-700/80 shadow-lg"
              >
                <Phone className="w-4 h-4 text-red-500" />
                <span>Call {RESTAURANT_INFO.phone}</span>
              </a>
            </div>

            {/* Fast Business Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-zinc-800/80">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-zinc-400">Opening Hours</p>
                  <p className="text-xs sm:text-sm font-semibold text-zinc-200">12:30 PM – 12:00 AM</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-zinc-400">Price Range</p>
                  <p className="text-xs sm:text-sm font-semibold text-zinc-200">₹1 – ₹200 / person</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 col-span-2 sm:col-span-1">
                <MapPin className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-zinc-400">Location</p>
                  <p className="text-xs sm:text-sm font-semibold text-zinc-200">Tirurkad, Perinthalmanna</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Food Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative glow frame */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-amber-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              
              <div className="relative rounded-2xl overflow-hidden border border-red-900/40 bg-zinc-950 shadow-2xl">
                <img
                  src="/src/assets/images/hero_yamama_shawaya_1790143950603.jpg"
                  alt="Yamama Shawaya Rotisserie Chicken with Bishawari Rice and Dips"
                  referrerPolicy="no-referrer"
                  className="w-full h-[360px] sm:h-[440px] object-cover object-center transform hover:scale-105 transition duration-700 ease-out"
                />

                {/* Top-right official logo brand seal */}
                <div className="absolute top-4 right-4 bg-black/90 backdrop-blur-md border border-amber-400/60 rounded-full p-1.5 shadow-2xl flex items-center gap-2 pr-3.5">
                  <img
                    src="/src/assets/images/yamama_shawaya_logo_1790144539774.jpg"
                    alt="Yamama Shawaya Official Mascot"
                    referrerPolicy="no-referrer"
                    className="w-7 h-7 rounded-full object-cover border border-amber-400"
                  />
                  <span className="text-[11px] font-extrabold text-amber-300 uppercase tracking-wider">
                    Refill Your Energy
                  </span>
                </div>

                {/* Scrim overlay with item badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-red-400 uppercase tracking-wider">Chef's Signature</p>
                      <h3 className="text-xl font-bold text-white">Shawaya Chicken with Bishawari Rice</h3>
                      <p className="text-xs text-zinc-300 mt-1">Slow rotisserie grilled chicken with signature dips</p>
                    </div>
                    <div className="bg-red-600/90 text-white font-extrabold px-3 py-1.5 rounded-lg text-base shadow-lg border border-red-400/40">
                      ₹200
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating review card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-[#16171d] border border-zinc-800 p-3.5 rounded-xl shadow-2xl flex items-center gap-3 backdrop-blur-md">
                <div className="w-10 h-10 rounded-lg bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-500">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>4.1 Rating</span>
                  </div>
                  <p className="text-xs text-zinc-300 font-medium">218 Google Reviews</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

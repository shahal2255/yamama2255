import React from 'react';
import { Phone, MapPin, Clock, ArrowUp, Star } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { YamamaLogo } from './YamamaLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090b] text-zinc-400 border-t border-red-950/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-900">
          
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <YamamaLogo size="md" showText={true} />

            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              Authentic rotisserie Shawaya, smoky Al Faham, fragrant Bishawari rice combos, soft kubus, and Bene Tibi refreshing mojitos in Perinthalmanna, Kerala.
            </p>

            <div className="flex items-center gap-2 text-xs text-zinc-300">
              <div className="flex items-center gap-1 text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span className="font-bold">{RESTAURANT_INFO.googleRating}</span>
              </div>
              <span className="text-zinc-600">·</span>
              <span>{RESTAURANT_INFO.reviewCount} Google reviews</span>
              <span className="text-zinc-600">·</span>
              <span>₹1–₹200 per person</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-red-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-red-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-red-400 transition-colors">
                  Menu &amp; Combos
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-red-400 transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-red-400 transition-colors">
                  Location &amp; Directions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-red-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Hours */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Restaurant Details
            </h4>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                <span>
                  Perinthalmanna, Kerala <br />
                  <span className="text-xs text-zinc-500">
                    {RESTAURANT_INFO.address}
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <a
                  href={RESTAURANT_INFO.phoneTel}
                  className="hover:text-red-400 font-semibold text-white transition-colors"
                >
                  Phone: {RESTAURANT_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold shrink-0">
                  WA
                </span>
                <a
                  href={RESTAURANT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 font-semibold text-zinc-300 transition-colors"
                >
                  WhatsApp: {RESTAURANT_INFO.whatsappNumber}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-red-500 shrink-0" />
                <span>Opening Hours: {RESTAURANT_INFO.openingHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 Yamama Shawaya. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-red-500" />
          </button>
        </div>

      </div>
    </footer>
  );
};

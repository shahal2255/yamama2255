import React from 'react';
import { MapPin, Navigation, ExternalLink, Clock, Phone, Compass } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-[#0c0d10] relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-red-500 font-bold uppercase tracking-widest text-xs sm:text-sm mb-3">
            Find Us
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Location &amp; Directions
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3">
            Conveniently situated at Oradampalam-Valiyavitilpadi on the Tirurkad stretch near Perinthalmanna.
          </p>
          <div className="w-16 h-1 bg-red-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Location Info Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#14151c] border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="flex flex-col gap-6">
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{RESTAURANT_INFO.name}</h3>
                  <p className="text-xs text-red-400 font-semibold">{RESTAURANT_INFO.category}</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800/80 space-y-2">
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Exact Address</p>
                <p className="text-base text-white font-medium leading-relaxed">
                  {RESTAURANT_INFO.address}
                </p>
                <p className="text-xs text-zinc-400 pt-1">
                  Landmark: {RESTAURANT_INFO.landmark}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/60 flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-zinc-400">Timings</p>
                    <p className="text-xs sm:text-sm font-semibold text-white">12:30 PM – 12:00 AM</p>
                    <p className="text-[11px] text-zinc-400">Every day</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/60 flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-zinc-400">Phone</p>
                    <a
                      href={RESTAURANT_INFO.phoneTel}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-red-400 transition-colors"
                    >
                      {RESTAURANT_INFO.phone}
                    </a>
                    <p className="text-[11px] text-zinc-400">Click to call</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Get Directions Action Button */}
            <div className="pt-8">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 px-6 py-4 text-sm font-bold text-white bg-red-600 rounded-xl hover:bg-red-700 active:scale-95 transition-all shadow-xl shadow-red-950/50 border border-red-500/40"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
              </a>
            </div>

          </div>

          {/* Map Area */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-zinc-800 bg-[#121319] shadow-xl relative min-h-[380px] flex flex-col">
            {/* Embedded interactive Google Map iframe with exact address coordinates */}
            <iframe
              title="Yamama Shawaya Location Map"
              width="100%"
              height="100%"
              className="w-full h-full min-h-[360px] lg:min-h-[420px] grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://maps.google.com/maps?q=Oradampalam-Valiyavitilpadi,+Tirurkad,+Perinthalmanna,+Kerala+679321&t=&z=16&ie=UTF8&iwloc=&output=embed`}
            />

            {/* In-map floating pin badge for Yamama Shawaya */}
            <div className="absolute top-4 left-4 bg-[#111217]/95 border border-red-600/50 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-2xl flex items-center gap-2.5 z-10 pointer-events-none">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
              <div>
                <p className="text-xs font-bold text-white leading-none">Yamama Shawaya</p>
                <p className="text-[10px] text-zinc-400 mt-0.5">Oradampalam-Valiyavitilpadi, Tirurkad</p>
              </div>
            </div>

            {/* Bottom quick overlay info bar */}
            <div className="bg-[#14151c] p-4 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-red-500" />
                <span>Oradampalam-Valiyavitilpadi, Tirurkad, Perinthalmanna</span>
              </div>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 font-semibold inline-flex items-center gap-1"
              >
                Open full map <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

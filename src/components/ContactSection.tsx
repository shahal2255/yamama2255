import React from 'react';
import { Phone, MapPin, Clock, Navigation, CheckCircle2, MessageSquare } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#0e0f14] relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-red-500 font-bold uppercase tracking-widest text-xs sm:text-sm mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Contact Yamama Shawaya
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3">
            Have a question, placing a takeaway order, or planning your visit? Reach us directly.
          </p>
          <div className="w-16 h-1 bg-red-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* 4 Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Card 1: Phone */}
          <div className="bg-[#14151d] border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between hover:border-red-900/60 transition-colors shadow-lg">
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-500 mb-5">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Phone Number</h3>
              <p className="text-xs text-zinc-400 mb-4">Direct kitchen &amp; takeaway enquiries</p>
              <a
                href={RESTAURANT_INFO.phoneTel}
                className="text-lg sm:text-xl font-black text-red-500 hover:text-red-400 transition-colors tracking-tight block"
              >
                {RESTAURANT_INFO.phone}
              </a>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/80">
              <a
                href={RESTAURANT_INFO.phoneTel}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold text-white bg-red-600 rounded-xl hover:bg-red-700 transition-colors shadow-md shadow-red-950/40"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Card 2: WhatsApp Chat */}
          <div className="bg-[#14151d] border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-900/60 transition-colors shadow-lg">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">WhatsApp Order</h3>
              <p className="text-xs text-zinc-400 mb-4">Chat, order &amp; enquiry support</p>
              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg sm:text-xl font-black text-emerald-400 hover:text-emerald-300 transition-colors tracking-tight block"
              >
                {RESTAURANT_INFO.whatsappNumber}
              </a>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/80">
              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold text-white bg-emerald-600 rounded-xl hover:bg-emerald-700 transition-colors shadow-md shadow-emerald-950/40"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 3: Location */}
          <div className="bg-[#14151d] border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between hover:border-red-900/60 transition-colors shadow-lg">
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-500 mb-5">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Our Location</h3>
              <p className="text-xs text-zinc-400 mb-4">Perinthalmanna, Kerala</p>
              <p className="text-xs sm:text-sm text-zinc-200 font-medium leading-relaxed">
                {RESTAURANT_INFO.address}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/80">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold text-white bg-zinc-800 rounded-xl hover:bg-zinc-700 border border-zinc-700 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-red-400" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Card 4: Opening Hours */}
          <div className="bg-[#14151d] border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between hover:border-red-900/60 transition-colors shadow-lg">
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-500 mb-5">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Opening Hours</h3>
              <p className="text-xs text-zinc-400 mb-4">Serving lunch, dinner &amp; night</p>
              <p className="text-lg sm:text-xl font-black text-white tracking-tight">
                12:30 PM – 12:00 AM
              </p>
              <p className="text-xs text-emerald-400 font-semibold mt-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Open Every Day
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/80">
              <div className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-center text-xs font-semibold text-zinc-300">
                Grills All Afternoon &amp; Night
              </div>
            </div>
          </div>

        </div>

        {/* Action Buttons Row */}
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={RESTAURANT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold text-white bg-emerald-600 rounded-xl hover:bg-emerald-700 active:scale-95 transition-all shadow-xl shadow-emerald-950/60 border border-emerald-500/40 text-center"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={RESTAURANT_INFO.phoneTel}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold text-white bg-red-600 rounded-xl hover:bg-red-700 active:scale-95 transition-all shadow-xl shadow-red-950/60 border border-red-500/40 text-center"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now: {RESTAURANT_INFO.phone}</span>
          </a>

          <a
            href={RESTAURANT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold text-zinc-100 bg-zinc-900 rounded-xl hover:bg-zinc-800 border border-zinc-700 transition-all text-center"
          >
            <Navigation className="w-4 h-4 text-red-500" />
            <span>Get Directions</span>
          </a>
        </div>

      </div>
    </section>
  );
};

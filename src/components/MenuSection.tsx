import React, { useState } from 'react';
import { Flame, Sparkles, Plus, Check, ShoppingBag, GlassWater, Utensils } from 'lucide-react';
import { MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';
import { MenuItem } from '../types/restaurant';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem, selectedOption?: 'Full' | 'Half' | 'Quarter') => void;
  cartItemIds: string[];
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart, cartItemIds }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'popular' | 'mojito' | 'other'>('all');
  const [selectedPortions, setSelectedPortions] = useState<Record<string, 'Full' | 'Half' | 'Quarter'>>({
    'oth-1': 'Full',
    'oth-2': 'Full',
    'oth-3': 'Full',
  });

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  const handlePortionSelect = (itemId: string, portion: 'Full' | 'Half' | 'Quarter') => {
    setSelectedPortions((prev) => ({ ...prev, [itemId]: portion }));
  };

  return (
    <section id="menu" className="py-24 bg-[#0c0d10] relative border-t border-zinc-900">
      {/* Decorative ambiance */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-red-500 font-bold uppercase tracking-widest text-xs sm:text-sm mb-3">
            Signature Shawaya &amp; Fresh Grills
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Menu &amp; Specials
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3">
            Every dish freshly prepared with premium spices, slow rotisserie roasting, and charcoal grilling.
          </p>
          <div className="w-16 h-1 bg-red-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Filter Controls - clean segmented interactive buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === 'all'
                ? 'bg-red-600 text-white shadow-lg shadow-red-900/40 border border-red-500'
                : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
            }`}
          >
            All Items ({MENU_ITEMS.length})
          </button>

          <button
            onClick={() => setActiveCategory('popular')}
            className={`flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === 'popular'
                ? 'bg-red-600 text-white shadow-lg shadow-red-900/40 border border-red-500'
                : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
            }`}
          >
            <Flame className="w-4 h-4 text-amber-400" />
            <span>Popular Combos (5)</span>
          </button>

          <button
            onClick={() => setActiveCategory('mojito')}
            className={`flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === 'mojito'
                ? 'bg-red-600 text-white shadow-lg shadow-red-900/40 border border-red-500'
                : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
            }`}
          >
            <GlassWater className="w-4 h-4 text-emerald-400" />
            <span>Mojitos — Bene Tibi (9)</span>
          </button>

          <button
            onClick={() => setActiveCategory('other')}
            className={`flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === 'other'
                ? 'bg-red-600 text-white shadow-lg shadow-red-900/40 border border-red-500'
                : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
            }`}
          >
            <Utensils className="w-4 h-4 text-red-400" />
            <span>Other Combos (3)</span>
          </button>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => {
            const hasOptions = item.options && item.options.length > 0;
            const currentPortion = selectedPortions[item.id] || 'Full';
            const isInCart = cartItemIds.includes(item.id);

            return (
              <div
                key={item.id}
                className="group relative bg-[#13141a] rounded-2xl border border-zinc-800/80 hover:border-red-900/60 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between"
              >
                {/* Item Image with Scrim */}
                {item.image && (
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-zinc-950">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#13141a] via-black/30 to-transparent" />
                    
                    {/* Item tag / category indicator */}
                    {item.tag && (
                      <div className="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-md border border-red-500/40 uppercase tracking-wider">
                        {item.tag}
                      </div>
                    )}
                    {item.category === 'mojito' && (
                      <div className="absolute top-3 left-3 bg-zinc-900/90 text-emerald-400 text-[11px] font-bold px-2.5 py-1 rounded-md shadow-md border border-emerald-500/30 uppercase tracking-wider">
                        Bene Tibi Mojito
                      </div>
                    )}

                    {/* Price Badge */}
                    <div className="absolute bottom-3 right-3 bg-black/85 backdrop-blur-md border border-red-900/50 text-white px-3 py-1 rounded-lg text-base font-extrabold tabular-nums shadow-lg">
                      <span className="text-red-400 mr-0.5">₹</span>{item.price}
                    </div>
                  </div>
                )}

                {/* Item Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header line if image not present */}
                    {!item.image && (
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className="text-xs uppercase tracking-wider font-semibold text-red-400">
                          {item.category === 'popular' ? 'Popular Combo' : item.category === 'mojito' ? 'Bene Tibi Mojito' : 'Combo Special'}
                        </span>
                        <span className="text-lg font-extrabold text-white tabular-nums">
                          ₹{item.price}
                        </span>
                      </div>
                    )}

                    <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Portion Options for items with Full/Half/Quarter */}
                  {hasOptions && (
                    <div className="mt-4 pt-4 border-t border-zinc-800">
                      <p className="text-xs font-semibold text-zinc-400 mb-2">Select Portion:</p>
                      <div className="flex items-center gap-1.5 p-1 bg-zinc-900 rounded-lg border border-zinc-800">
                        {item.options!.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => handlePortionSelect(item.id, opt)}
                            className={`flex-1 py-1 text-xs font-medium rounded-md transition-colors ${
                              currentPortion === opt
                                ? 'bg-red-600 text-white font-semibold shadow-sm'
                                : 'text-zinc-400 hover:text-white'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Bottom Action Line */}
                  <div className="mt-5 pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-3">
                    <span className="text-xs text-zinc-400">
                      {hasOptions ? `Portion: ${currentPortion}` : 'Freshly prepared'}
                    </span>

                    <button
                      onClick={() => onAddToCart(item, hasOptions ? currentPortion : undefined)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all active:scale-95 cursor-pointer ${
                        isInCart
                          ? 'bg-zinc-800 text-emerald-400 border border-emerald-500/40 hover:bg-zinc-700'
                          : 'bg-red-600 text-white hover:bg-red-700 shadow-md shadow-red-950/40'
                      }`}
                    >
                      {isInCart ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added (+1)</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Order</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Order Callout Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-red-950/40 via-zinc-900 to-zinc-950 border border-red-900/40 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-xl font-extrabold text-white">
              Ready to Order Takeaway or Dine-in?
            </h4>
            <p className="text-sm text-zinc-400 mt-1">
              Call us directly at <span className="text-red-400 font-semibold">{RESTAURANT_INFO.phone}</span>. Open daily 12:30 PM – 12:00 AM midnight.
            </p>
          </div>
          <a
            href={RESTAURANT_INFO.phoneTel}
            className="px-6 py-3 text-sm font-bold text-white bg-red-600 rounded-xl hover:bg-red-700 active:scale-95 transition-all shadow-lg shadow-red-950/60 whitespace-nowrap border border-red-500/40"
          >
            Call {RESTAURANT_INFO.phone}
          </a>
        </div>

      </div>
    </section>
  );
};

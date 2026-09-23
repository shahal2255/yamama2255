/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { OrderDrawer } from './components/OrderDrawer';
import { CartItem, MenuItem } from './types/restaurant';
import { Phone, Utensils, ShoppingBag } from 'lucide-react';
import { RESTAURANT_INFO } from './data/restaurantData';
import { FloatingWhatsApp, WhatsAppIcon } from './components/FloatingWhatsApp';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('yamama_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('yamama_cart', JSON.stringify(cartItems));
    } catch {
      // Ignore localStorage exceptions
    }
  }, [cartItems]);

  const handleAddToCart = (item: MenuItem, selectedOption?: 'Full' | 'Half' | 'Quarter') => {
    setCartItems((prev) => {
      const cartItemId = `${item.id}-${selectedOption || 'standard'}`;
      const existing = prev.find((ci) => ci.id === cartItemId);
      if (existing) {
        return prev.map((ci) =>
          ci.id === cartItemId ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [
        ...prev,
        {
          id: cartItemId,
          item,
          selectedOption,
          quantity: 1,
        },
      ];
    });
  };

  const handleUpdateQuantity = (cartItemId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((ci) => {
          if (ci.id === cartItemId) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((ci) => ci.id !== cartItemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartItemIds = cartItems.map((ci) => ci.item.id);

  return (
    <div className="min-h-screen bg-[#0c0d10] text-[#f3f4f6] flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* Navigation Bar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <MenuSection
          onAddToCart={handleAddToCart}
          cartItemIds={cartItemIds}
        />
        <GallerySection />
        <LocationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Takeaway Order Drawer */}
      <OrderDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Mobile Sticky Quick Action Bar (Respecting the 15% mobile sticky cap) */}
      <aside aria-label="Mobile quick actions" className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#0e0f14]/95 backdrop-blur-md border-t border-zinc-800 p-2 px-3 flex items-center justify-between gap-2 shadow-2xl">
        <a
          href={RESTAURANT_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 text-xs font-bold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 shadow-md shadow-emerald-950/40"
        >
          <WhatsAppIcon className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <a
          href={RESTAURANT_INFO.phoneTel}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 text-xs font-bold text-white bg-red-600 rounded-lg hover:bg-red-700 shadow-md shadow-red-950/40"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call</span>
        </a>

        <a
          href="#menu"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 text-xs font-bold text-zinc-200 bg-zinc-900 border border-zinc-700 rounded-lg hover:bg-zinc-800"
        >
          <Utensils className="w-3.5 h-3.5 text-red-500" />
          <span>Menu</span>
        </a>

        <button
          onClick={() => setIsCartOpen(true)}
          className="relative flex items-center justify-center p-2.5 bg-zinc-900 border border-zinc-700 rounded-lg text-zinc-200 hover:text-white"
          aria-label="View takeaway bag"
        >
          <ShoppingBag className="w-4 h-4 text-red-400" />
          {totalCartCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
              {totalCartCount}
            </span>
          )}
        </button>
      </aside>
    </div>
  );
}

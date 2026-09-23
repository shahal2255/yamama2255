import React, { useState, useEffect } from 'react';
import { Phone, Menu as MenuIcon, X, ShoppingBag } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { YamamaLogo } from './YamamaLogo';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0c0d10]/95 backdrop-blur-md border-b border-red-950/40 shadow-xl shadow-black/50 py-2.5'
          : 'bg-gradient-to-b from-black/85 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Zone with Exact Emblem Logo */}
          <a
            href="#home"
            className="group tracking-tight inline-flex items-center"
          >
            <YamamaLogo size="sm" showText={true} />
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-red-400 transition-colors duration-200 py-1 border-b-2 border-transparent hover:border-red-500"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            {/* Takeaway Order Bag Counter */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800 text-zinc-200 hover:text-white hover:border-red-700/60 hover:bg-zinc-800 transition-all cursor-pointer"
              title="View takeaway order list"
              aria-label="View takeaway order list"
            >
              <ShoppingBag className="w-4 h-4 text-red-400" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* WhatsApp Chat button */}
            <a
              href={RESTAURANT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-400 bg-emerald-950/40 rounded-lg hover:bg-emerald-900/50 active:scale-95 transition-all border border-emerald-500/40"
              title="Chat on WhatsApp"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>WhatsApp</span>
            </a>

            {/* Call Now button */}
            <a
              href={RESTAURANT_INFO.phoneTel}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 active:scale-95 transition-all shadow-md shadow-red-900/30 whitespace-nowrap border border-red-500/30"
            >
              <Phone className="w-3.5 h-3.5 text-white" />
              <span>Call Now</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e0f13] border-b border-zinc-800 px-6 py-5 shadow-2xl transition-all">
          <nav className="flex flex-col gap-4 text-base font-medium text-zinc-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-red-400 py-1 transition-colors border-b border-zinc-900"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 shadow-md shadow-emerald-950/40"
              >
                <span>Chat on WhatsApp ({RESTAURANT_INFO.whatsappNumber})</span>
              </a>
              <a
                href={RESTAURANT_INFO.phoneTel}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 shadow-md shadow-red-900/30"
              >
                <Phone className="w-4 h-4" />
                <span>Call {RESTAURANT_INFO.phone}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

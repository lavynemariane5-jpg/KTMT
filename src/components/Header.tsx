/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import CountdownTimer from './CountdownTimer';
import { Sparkles } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      {/* Urgency Alert Bar */}
      <div className="bg-brand-blue text-white text-xs sm:text-sm font-bold py-2 px-4 shadow-inner flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
        <div className="flex items-center gap-1.5 justify-center">
          <span className="animate-bounce">🔥</span>
          <span className="uppercase tracking-wider">Oferta Especial de Lançamento</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline opacity-85">|</span>
          <CountdownTimer />
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full py-3.5 px-4 sm:px-8 transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-gray-100'
            : 'bg-white border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-brand-green flex items-center justify-center shadow-md shadow-brand-green/20">
              <span className="text-white font-extrabold text-xl font-mono">123</span>
            </div>
            <div>
              <div className="text-base sm:text-lg font-black tracking-tight leading-none text-gray-800 flex items-center gap-1">
                <span>Kit Matemática</span>
                <span className="text-brand-blue">Infantil</span>
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">
                4 e 5 Anos
              </span>
            </div>
          </div>

          {/* Quick Action Button */}
          <button
            onClick={handleScrollToPricing}
            id="header-cta-btn"
            className="hidden sm:flex items-center gap-2 bg-brand-green hover:bg-brand-green/95 text-white text-xs md:text-sm font-black px-5 py-2.5 rounded-full transition-all duration-300 shadow-md shadow-brand-green/20 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-brand-yellow fill-brand-yellow" />
            <span>QUERO COMEÇAR AGORA</span>
          </button>
        </div>
      </div>
    </header>
  );
}

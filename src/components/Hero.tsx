/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Sparkles, Printer, ShieldCheck, Download } from 'lucide-react';

interface HeroProps {
  onStartClick: () => void;
}

export default function Hero({ onStartClick }: HeroProps) {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-gradient-to-b from-[#EBF5FF] via-white to-white overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-blue/10 rounded-full blur-3xl -z-10" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue font-extrabold px-4 py-1.5 rounded-full text-xs sm:text-sm mb-6 uppercase tracking-wider"
            >
              <Sparkles className="w-4 h-4 fill-brand-blue" />
              <span>Aprender nunca foi tão divertido</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tight mb-6"
            >
              Seu Filho Pode{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">
                Aprender Matemática
              </span>{' '}
              Brincando em Apenas 10 Minutos por Dia!
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 font-medium leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Mais de 100 atividades educativas desenvolvidas para crianças de{' '}
              <strong className="text-gray-900 font-extrabold">4 e 5 anos</strong> aprenderem números,
              contagem, coordenação motora e raciocínio lógico de forma 100% divertida e longe das telas.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <button
                onClick={onStartClick}
                id="hero-cta-btn"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-green hover:bg-[#439c46] text-white font-extrabold text-base sm:text-lg px-8 py-4.5 rounded-2xl transition-all duration-300 shadow-lg shadow-brand-green/30 hover:shadow-xl hover:shadow-brand-green/40 hover:-translate-y-1 active:translate-y-0 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 w-1/2 h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-shine" />
                <Sparkles className="w-5 h-5 text-brand-yellow fill-brand-yellow animate-spin-slow" />
                <span>QUERO COMEÇAR AGORA</span>
              </button>
            </motion.div>

            {/* Trust highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-3 pt-6 border-t border-gray-100 max-w-lg mx-auto lg:mx-0 text-left"
            >
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-lg bg-emerald-50 text-brand-green">
                  <Printer className="w-4 h-4" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-gray-500">Pronto para imprimir</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-lg bg-blue-50 text-brand-blue">
                  <Download className="w-4 h-4" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-gray-500">Download Imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-lg bg-amber-50 text-brand-yellow">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-gray-500">Acesso Vitalício</span>
              </div>
            </motion.div>
          </div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Visual background element */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/10 to-brand-green/10 rounded-[32px] rotate-3 scale-105 -z-10" />
            <div className="absolute inset-0 bg-white rounded-[32px] -rotate-3 scale-100 shadow-xl -z-10 border border-gray-100" />

            {/* Book Mockup Container */}
            <div className="relative p-3 w-full max-w-md">
              <img
                src="/src/assets/images/math_kit_mockup_1783016257808.jpg"
                alt="Kit Matemática Infantil Atividades"
                className="w-full h-auto rounded-[24px] shadow-2xl object-cover hover:scale-[1.02] transition-transform duration-300"
                referrerPolicy="no-referrer"
              />

              {/* Float decorative cards */}
              <div className="absolute -top-4 -right-4 bg-white p-3 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-2 animate-bounce-slow">
                <div className="w-8 h-8 rounded-full bg-brand-yellow flex items-center justify-center font-bold text-white text-sm">
                  ★
                </div>
                <div>
                  <div className="text-[10px] font-black text-gray-800 leading-none">NOTA 5.0/5.0</div>
                  <div className="text-[9px] font-bold text-gray-400">Pelos Pais e Educadores</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white p-3.5 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green font-black text-sm">
                  +100
                </div>
                <div>
                  <div className="text-xs font-black text-gray-800 leading-none">Exercícios Didáticos</div>
                  <div className="text-[10px] font-bold text-gray-400">Passo a Passo Lúdico</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

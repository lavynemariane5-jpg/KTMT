/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { KITS_DATA } from '../data';
import { KitItem } from '../types';
import { Check, Sparkles, Printer, ShieldCheck } from 'lucide-react';

interface KitSelectionProps {
  onSelectKit: (kit: KitItem) => void;
}

export default function KitSelection({ onSelectKit }: KitSelectionProps) {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-brand-gray via-white to-brand-gray relative overflow-hidden">
      {/* Decorative floating dots */}
      <div className="absolute top-10 left-10 w-4 h-4 rounded-full bg-brand-blue animate-ping" />
      <div className="absolute bottom-10 right-10 w-4 h-4 rounded-full bg-brand-green animate-bounce" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-extrabold text-brand-green uppercase tracking-widest bg-brand-green/10 px-4 py-1.5 rounded-full">
            MELHOR PREÇO DO MERCADO
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mt-4 mb-4">
            Escolha o Kit Ideal para seu <span className="text-brand-blue">Pequeno</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium">
            Acesso vitalício imediato. Imprima quando e quantas vezes quiser. Economia de verdade!
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
          {KITS_DATA.map((kit, index) => {
            const isGreen = kit.color === 'green';
            return (
              <motion.div
                key={kit.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white rounded-[36px] transition-all duration-300 flex flex-col justify-between ${
                  isGreen
                    ? 'border-4 border-brand-green p-8 sm:p-10 shadow-2xl shadow-brand-green/10 md:scale-105 z-10'
                    : 'border border-gray-200/80 p-8 shadow-md'
                }`}
              >
                {/* Popularity Badge/Seal */}
                {kit.isPopular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-green text-white text-xs font-black px-6 py-2 rounded-full flex items-center gap-1.5 shadow-md shadow-brand-green/20 uppercase tracking-widest">
                    <Sparkles className="w-3.5 h-3.5 text-brand-yellow fill-brand-yellow" />
                    <span>{kit.id === 'kit-basico' ? 'RECOMENDADO' : 'POPULAR'}</span>
                  </div>
                )}

                <div>
                  {/* Card Header */}
                  <div className="text-center mb-6">
                    <span
                      className={`text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider ${
                        isGreen ? 'bg-brand-green/10 text-brand-green' : 'bg-brand-blue/10 text-brand-blue'
                      }`}
                    >
                      {kit.name}
                    </span>
                    <div className="mt-4 flex items-baseline justify-center gap-1">
                      <span className="text-gray-400 text-sm font-bold">R$</span>
                      <span
                        className={`text-4xl sm:text-5xl font-black ${
                          isGreen ? 'text-brand-green' : 'text-brand-blue'
                        }`}
                      >
                        {kit.price.toString().split('.')[0]}
                      </span>
                      <span
                        className={`text-2xl font-black ${
                          isGreen ? 'text-brand-green' : 'text-brand-blue'
                        }`}
                      >
                        ,{kit.price.toString().split('.')[1]}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400 font-bold block mt-1">
                      VALOR ORIGINAL: R$ {kit.originalPrice.toFixed(2).replace('.', ',')}
                    </span>
                  </div>

                  {/* Bullet features */}
                  <ul className="space-y-3.5 mb-8">
                    {kit.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            isGreen ? 'bg-brand-green/10 text-brand-green' : 'bg-brand-blue/10 text-brand-blue'
                          }`}
                        >
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-sm text-gray-600 font-semibold leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Purchase Button */}
                <button
                  onClick={() => onSelectKit(kit)}
                  id={`purchase-btn-${kit.id}`}
                  className={`w-full font-black text-center py-4 rounded-2xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-lg cursor-pointer ${
                    isGreen
                      ? 'bg-brand-green hover:bg-[#439c46] text-white shadow-brand-green/20'
                      : 'bg-brand-blue hover:bg-brand-blue/95 text-white shadow-brand-blue/20'
                  }`}
                >
                  {kit.buttonText}
                </button>

                {/* Subtext info */}
                <div className="flex items-center justify-center gap-4 mt-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  <div className="flex items-center gap-1">
                    <Printer className="w-3 h-3" />
                    <span>Imprima Hoje</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Compra 100% Segura</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

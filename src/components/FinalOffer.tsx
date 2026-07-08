/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { KITS_DATA } from '../data';
import { KitItem } from '../types';
import { Sparkles, Shield, Check, Zap, Lock } from 'lucide-react';

interface FinalOfferProps {
  onSelectKit: (kit: KitItem) => void;
}

export default function FinalOffer({ onSelectKit }: FinalOfferProps) {
  const basicKit = KITS_DATA.find((k) => k.id === 'kit-basico')!;
  const completeKit = KITS_DATA.find((k) => k.id === 'kit-completo')!;

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Visual top border */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-brand-gray to-transparent opacity-60" />

      <div className="max-w-4xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-gray/60 rounded-[40px] p-8 sm:p-12 border-2 border-dashed border-gray-200 text-center relative"
        >
          {/* Fun little cartoon accents */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-brand-yellow text-white text-xs font-black px-6 py-2 rounded-full flex items-center gap-1 shadow-md shadow-brand-yellow/20 uppercase tracking-widest">
            <Sparkles className="w-4.5 h-4.5 fill-brand-yellow" />
            <span>ÚLTIMA OPORTUNIDADE</span>
          </div>

          <div className="mb-8">
            <h3 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
              Dê esse Presente para o{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">
                Futuro do Seu Filho
              </span>
            </h3>
            <p className="text-sm sm:text-base text-gray-500 font-bold max-w-lg mx-auto mt-2 leading-relaxed">
              Adquira agora mesmo o material didático completo de matemática e apoie o aprendizado do seu pequeno de modo alegre e eficiente.
            </p>
          </div>

          {/* Pricing grid and buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
            {/* Basic Kit */}
            <div className="bg-white p-6 rounded-3xl border-2 border-brand-green flex flex-col justify-between shadow-md relative">
              <div className="absolute -top-3.5 right-4 bg-brand-green text-white text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                Recomendado
              </div>
              <div>
                <span className="text-xs font-black text-brand-green uppercase tracking-wider block mb-1">
                  Kit Básico
                </span>
                <div className="text-gray-400 text-xs line-through font-bold">De R$ 29,90</div>
                <div className="text-2xl font-black text-brand-green my-1">R$ 9,99</div>
                <span className="text-[10px] text-gray-400 font-bold block mb-4">PAGAMENTO ÚNICO</span>
              </div>
              <button
                onClick={() => onSelectKit(basicKit)}
                id="final-offer-btn-basic"
                className="w-full bg-brand-green hover:bg-[#439c46] text-white font-extrabold text-xs py-3.5 px-4 rounded-xl transition-all shadow-md shadow-brand-green/10 cursor-pointer"
              >
                QUERO O KIT BÁSICO
              </button>
            </div>

            {/* Complete Kit */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-xs font-black text-brand-blue uppercase tracking-wider block mb-1">
                  Kit Completo
                </span>
                <div className="text-gray-400 text-xs line-through font-bold">De R$ 59,90</div>
                <div className="text-2xl font-black text-gray-800 my-1">R$ 14,99</div>
                <span className="text-[10px] text-gray-400 font-bold block mb-4">PAGAMENTO ÚNICO</span>
              </div>
              <button
                onClick={() => onSelectKit(completeKit)}
                id="final-offer-btn-complete"
                className="w-full bg-brand-blue hover:bg-brand-blue/95 text-white font-extrabold text-xs py-3.5 px-4 rounded-xl transition-all shadow-md shadow-brand-blue/10 cursor-pointer"
              >
                QUERO O KIT COMPLETO
              </button>
            </div>
          </div>

          {/* Core Trust checklist */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 pt-6 border-t border-gray-200/50 max-w-md mx-auto">
            <div className="flex items-center gap-1.5 text-xs text-gray-500 font-bold uppercase tracking-wider">
              <Check className="w-4 h-4 text-brand-green" />
              <span>Acesso imediato</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-500 font-bold uppercase tracking-wider">
              <Zap className="w-4 h-4 text-brand-green" />
              <span>Acesso vitalício</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-500 font-bold uppercase tracking-wider">
              <Lock className="w-4 h-4 text-brand-green animate-pulse" />
              <span>Compra segura</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

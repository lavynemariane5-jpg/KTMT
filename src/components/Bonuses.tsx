/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { BONUSES_DATA } from '../data';
import { Gift, Sparkles } from 'lucide-react';

export default function Bonuses() {
  const totalBonusValue = BONUSES_DATA.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background visual graphics */}
      <div className="absolute top-1/2 left-5 w-48 h-48 bg-brand-yellow/10 rounded-full blur-2xl" />
      <div className="absolute bottom-5 right-5 w-56 h-56 bg-brand-green/10 rounded-full blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-yellow/20 text-amber-600 font-extrabold px-4 py-1.5 rounded-full text-xs sm:text-sm uppercase tracking-wider">
            <Gift className="w-4 h-4 text-brand-yellow fill-brand-yellow/20 animate-bounce" />
            <span>Presentes Especiais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mt-4 mb-4">
            Bônus Exclusivos <span className="text-brand-yellow">Totalmente Grátis!</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium">
            Adquirindo o <strong className="text-brand-green">Kit Completo hoje</strong>, você leva um pacote de bônus exclusivos avaliado em{' '}
            <span className="text-red-500 font-bold line-through">R$ {totalBonusValue.toFixed(2).replace('.', ',')}</span> de graça!
          </p>
        </div>

        {/* Bonus Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {BONUSES_DATA.map((bonus, index) => (
            <motion.div
              key={bonus.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-brand-gray/50 rounded-3xl p-6 border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-yellow/15 flex items-center justify-center shrink-0 text-brand-yellow">
                <Gift className="w-6 h-6 fill-brand-yellow/10" />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  <h3 className="text-base sm:text-lg font-extrabold text-gray-900">
                    {bonus.title.replace('🎁', '').trim()}
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] text-gray-400 line-through font-bold">
                      R$ {bonus.value.toFixed(2).replace('.', ',')}
                    </span>
                    <span className="text-xs text-brand-green font-extrabold bg-emerald-50 px-2 py-0.5 rounded-md uppercase tracking-wider">
                      Grátis
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 font-semibold mt-1.5 leading-relaxed">
                  {bonus.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Free message banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-green text-white text-center p-6 rounded-3xl max-w-2xl mx-auto mt-12 shadow-lg shadow-brand-green/10"
        >
          <div className="flex items-center justify-center gap-2 mb-1.5">
            <Sparkles className="w-5 h-5 text-brand-yellow fill-brand-yellow animate-spin-slow" />
            <h4 className="text-lg font-black tracking-wide uppercase">Hoje Você Recebe Tudo Grátis!</h4>
          </div>
          <p className="text-xs sm:text-sm font-bold opacity-90 leading-relaxed max-w-md mx-auto">
            Não se preocupe em comprar materiais separados. Garanta o Kit Completo por apenas R$ 14,99 e receba todos os bônus inclusos na hora.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

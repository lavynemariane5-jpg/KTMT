/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShieldCheck, Award, Lock } from 'lucide-react';

export default function Guarantee() {
  return (
    <section className="py-12 bg-white relative">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-brand-green rounded-[40px] p-8 sm:p-12 text-white shadow-xl shadow-brand-green/10 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12"
        >
          {/* Abstract circles design */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-12 -translate-y-12" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-6 translate-y-6" />

          {/* Large badge/medal icon */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white text-brand-green flex items-center justify-center shrink-0 shadow-lg shadow-black/5">
            <Award className="w-12 h-12 sm:w-16 sm:h-16 stroke-[1.5]" />
          </div>

          {/* Guarantee copy details */}
          <div className="text-center md:text-left">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full mb-4 inline-block">
              RISCO ZERO COMPLETO
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-3">
              Garantia Incondicional de 7 Dias
            </h3>
            <p className="text-sm sm:text-base font-semibold leading-relaxed text-emerald-50 mb-4">
              Acreditamos tanto na qualidade didática de nosso kit que oferecemos reembolso total caso não goste. Se não estiver 100% satisfeito, basta enviar um e-mail em até 7 dias e devolvemos cada centavo do seu dinheiro. Sem pegadinhas nem burocracia!
            </p>

            {/* Badges */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-[10px] font-bold text-emerald-50 uppercase tracking-widest">
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg">
                <ShieldCheck className="w-4 h-4 text-brand-yellow fill-brand-yellow/10" />
                <span>Compra Protegida</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg">
                <Lock className="w-4 h-4 text-brand-yellow" />
                <span>Checkout Criptografado</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

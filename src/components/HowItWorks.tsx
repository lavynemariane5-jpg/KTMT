/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShoppingCart, MailOpen, FileDown, Edit3, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: '1',
      title: 'Compre',
      desc: 'Escolha o kit ideal e pague de forma segura por Pix ou Cartão.',
      icon: <ShoppingCart className="w-5 h-5 text-brand-blue" />,
      bg: 'bg-blue-50',
    },
    {
      num: '2',
      title: 'Acesso imediato',
      desc: 'Receba na hora o link de acesso exclusivo em seu e-mail.',
      icon: <MailOpen className="w-5 h-5 text-brand-green" />,
      bg: 'bg-emerald-50',
    },
    {
      num: '3',
      title: 'Baixe os PDFs',
      desc: 'Acesse de qualquer dispositivo e faça o download dos arquivos.',
      icon: <FileDown className="w-5 h-5 text-brand-yellow" />,
      bg: 'bg-amber-50',
    },
    {
      num: '4',
      title: 'Imprima & brinque',
      desc: 'Imprima no seu ritmo e divirta-se vendo seu filho aprender!',
      icon: <Edit3 className="w-5 h-5 text-brand-blue" />,
      bg: 'bg-blue-50',
    },
  ];

  return (
    <section className="py-20 bg-brand-gray relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-extrabold text-brand-blue uppercase tracking-widest bg-brand-blue/10 px-4 py-1.5 rounded-full">
            MUITO FÁCIL E RÁPIDO
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mt-4 mb-4">
            Como Funciona o <span className="text-brand-blue">Acesso?</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium">
            Em menos de 5 minutos você já pode ter os exercícios em mãos prontos para usar.
          </p>
        </div>

        {/* Steps flow container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-1 bg-gradient-to-r from-brand-blue/20 via-brand-green/20 to-brand-yellow/20 -translate-y-1/2 -z-10" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-6 border border-gray-100 flex flex-col items-center text-center relative group hover:shadow-md transition-shadow"
            >
              {/* Step indicator number */}
              <div className="absolute -top-4 -left-4 w-9 h-9 rounded-full bg-gray-900 text-white font-black flex items-center justify-center text-sm shadow-md">
                {step.num}
              </div>

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${step.bg}`}>
                {step.icon}
              </div>

              {/* Arrow on desktop */}
              {idx < 3 && (
                <div className="hidden lg:flex absolute top-12 -right-6 z-10 w-8 h-8 rounded-full bg-white border border-gray-100 items-center justify-center text-gray-400 group-hover:scale-110 transition-transform shadow-sm">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}

              <h3 className="text-lg font-extrabold text-gray-900 mb-2 leading-none">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 font-semibold leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

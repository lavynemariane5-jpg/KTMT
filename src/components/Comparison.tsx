/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { X, Check, ArrowRight, Sparkles } from 'lucide-react';

export default function Comparison() {
  const badItems = [
    'Materiais sem organização ou método',
    'Perda de tempo procurando no Google',
    'Impressões de baixa qualidade e resolução',
    'Sem nenhuma sequência pedagógica lógica',
    'Sem planejamento didático de apoio',
    'Sem certificado de incentivo para as crianças',
  ];

  const goodItems = [
    'Material 100% organizado e sequencial',
    'Pronto para imprimir quando quiser',
    'Desenvolvido com rigorosa sequência pedagógica',
    'Planejamento incluso para orientar os pais (Kit Completo)',
    'Certificado infantil super fofo incluso (Kit Completo)',
    'Jogos extras de labirinto que estimulam a lógica',
    '100 exercícios lúdicos inovadores',
    'Acesso vitalício ao material completo',
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decor */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-red-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-emerald-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-extrabold text-brand-green uppercase tracking-widest bg-brand-green/10 px-4 py-1.5 rounded-full">
            COMPARAÇÃO HONESTA
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mt-4 mb-4">
            Compare e veja como <span className="text-brand-blue">Vale a Pena!</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium">
            Por que gastar tempo e dinheiro procurando materiais dispersos e sem sequência na internet?
          </p>
        </div>

        {/* Comparison grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Internet - The Bad Option */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 rounded-[32px] p-8 border border-gray-200/60 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center font-black">
                  <X className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-gray-800 leading-none">Procurar na Internet</h3>
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Trabalho avulso</span>
                </div>
              </div>

              <ul className="space-y-4">
                {badItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-500 font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200/50">
              <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">Valor Estimado:</div>
              <div className="text-2xl font-black text-gray-400 line-through">R$ 150,00+</div>
              <p className="text-xs text-gray-400 font-medium mt-1">Gasto de tempo, tinta avulsa e pesquisa.</p>
            </div>
          </motion.div>

          {/* Kit Matemática - The Premium Option */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-white rounded-[32px] p-8 border-2 border-brand-green shadow-xl shadow-brand-green/5 flex flex-col justify-between overflow-hidden"
          >
            {/* Glowing top label */}
            <div className="absolute top-0 right-0 bg-brand-green text-white font-extrabold text-[11px] px-5 py-1 rounded-bl-2xl uppercase tracking-widest">
              Recomendado
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-brand-green flex items-center justify-center font-black shadow-inner">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-gray-900 leading-none">Kit Matemática Infantil</h3>
                  <span className="text-xs text-brand-green font-black uppercase tracking-wider">Economia & Praticidade</span>
                </div>
              </div>

              <ul className="space-y-4">
                {goodItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 font-bold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-brand-green/20">
              <div className="text-xs font-bold text-brand-green uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 fill-brand-green text-brand-green" />
                <span>Preço a partir de apenas:</span>
              </div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl font-black text-brand-green">R$ 9,99</span>
                <span className="text-xs text-gray-400 font-bold">no Kit Básico</span>
              </div>

              {/* Savings callout */}
              <div className="mt-4 bg-emerald-50 text-brand-green p-3 rounded-2xl flex items-center justify-between border border-emerald-100/60">
                <span className="text-xs font-bold">Você economiza mais de:</span>
                <span className="text-sm font-black uppercase tracking-wide">R$ 135,00!</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

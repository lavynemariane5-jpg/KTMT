/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS_DATA } from '../data';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQs() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-brand-gray relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-extrabold text-brand-blue uppercase tracking-widest bg-brand-blue/10 px-4 py-1.5 rounded-full">
            DÚVIDAS FREQUENTES
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mt-4 mb-4">
            Perguntas <span className="text-brand-blue">Frequentes</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium">
            Tem alguma dúvida? Encontre respostas rápidas sobre o funcionamento do material, acesso e impressão.
          </p>
        </div>

        {/* FAQs List */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              >
                {/* Accordion header button */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-gray-800 hover:text-brand-blue transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-gray-400 shrink-0" />
                    <span className="text-sm sm:text-base font-extrabold">{faq.question}</span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-brand-blue shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                  )}
                </button>

                {/* Collapsible panel with motion/react */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-5 pt-1 text-sm text-gray-500 font-semibold leading-relaxed border-t border-gray-50/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

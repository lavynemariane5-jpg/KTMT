/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { BENEFITS_DATA } from '../data';
import {
  Hash,
  PenTool,
  Brain,
  Sparkles,
  Target,
  Glasses,
  Smile,
  Printer
} from 'lucide-react';

const getIcon = (id: string) => {
  switch (id) {
    case 'b1':
      return <Hash className="w-7 h-7 text-brand-blue" />;
    case 'b2':
      return <PenTool className="w-7 h-7 text-brand-green" />;
    case 'b3':
      return <Brain className="w-7 h-7 text-brand-yellow fill-brand-yellow/10" />;
    case 'b4':
      return <Sparkles className="w-7 h-7 text-brand-blue" />;
    case 'b5':
      return <Target className="w-7 h-7 text-brand-green" />;
    case 'b6':
      return <Glasses className="w-7 h-7 text-brand-yellow" />;
    case 'b7':
      return <Smile className="w-7 h-7 text-brand-blue fill-brand-blue/10" />;
    case 'b8':
      return <Printer className="w-7 h-7 text-brand-green" />;
    default:
      return <Sparkles className="w-7 h-7 text-brand-blue" />;
  }
};

const getBgColor = (id: string) => {
  switch (id) {
    case 'b1':
    case 'b4':
    case 'b7':
      return 'bg-blue-50 border-blue-100/50 hover:border-brand-blue/30';
    case 'b2':
    case 'b5':
    case 'b8':
      return 'bg-emerald-50 border-emerald-100/50 hover:border-brand-green/30';
    case 'b3':
    case 'b6':
      return 'bg-amber-50 border-amber-100/50 hover:border-brand-yellow/30';
    default:
      return 'bg-gray-50 border-gray-100';
  }
};

export default function Benefits() {
  return (
    <section className="py-20 bg-brand-gray relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-white to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-4">
            Por que escolher o nosso{' '}
            <span className="text-brand-blue">Kit de Atividades?</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium">
            Benefícios essenciais que ajudam no desenvolvimento cognitivo, motor e comportamental do seu pequeno.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS_DATA.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`p-6 rounded-[24px] bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start hover:-translate-y-1 group`}
            >
              {/* Icon Container */}
              <div className={`p-4 rounded-2xl mb-5 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center ${getBgColor(benefit.id)}`}>
                {getIcon(benefit.id)}
              </div>

              {/* Text */}
              <h3 className="text-lg font-extrabold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { LEARN_DATA } from '../data';
import {
  Hash,
  ArrowRight,
  Sparkles,
  Scale,
  Link,
  Palette,
  Compass,
  PenTool,
  BrainCircuit
} from 'lucide-react';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Hash':
      return <Hash className="w-8 h-8 text-white" />;
    case 'TrendingUp':
      return <ArrowRight className="w-8 h-8 text-white" />;
    case 'PieChart':
      return <Sparkles className="w-8 h-8 text-white" />;
    case 'Columns':
      return <Scale className="w-8 h-8 text-white" />;
    case 'Link':
      return <Link className="w-8 h-8 text-white" />;
    case 'Paintbrush':
      return <Palette className="w-8 h-8 text-white" />;
    case 'Map':
      return <Compass className="w-8 h-8 text-white" />;
    case 'PenTool':
      return <PenTool className="w-8 h-8 text-white" />;
    case 'Brain':
      return <BrainCircuit className="w-8 h-8 text-white" />;
    default:
      return <Sparkles className="w-8 h-8 text-white" />;
  }
};

const getColors = (index: number) => {
  const styles = [
    { bg: 'bg-brand-blue/10 text-brand-blue', badgeBg: 'bg-brand-blue', lightBg: 'bg-blue-50/50' },
    { bg: 'bg-brand-green/10 text-brand-green', badgeBg: 'bg-brand-green', lightBg: 'bg-emerald-50/50' },
    { bg: 'bg-brand-yellow/15 text-amber-600', badgeBg: 'bg-brand-yellow', lightBg: 'bg-amber-50/30' },
  ];
  return styles[index % 3];
};

export default function WhatTheyLearn() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-extrabold text-brand-green uppercase tracking-widest bg-brand-green/10 px-4 py-1.5 rounded-full">
            CONTEÚDO DO KIT
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mt-4 mb-4">
            O que seu filho vai <span className="text-brand-green">Aprender?</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium">
            Desenvolvido por especialistas, nosso material conta com ilustrações cativantes que facilitam o aprendizado de forma sequencial.
          </p>
        </div>

        {/* Learn Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LEARN_DATA.map((item, index) => {
            const colors = getColors(index);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`group relative p-7 rounded-[32px] bg-white border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 flex items-start gap-5 hover:-translate-y-1`}
              >
                {/* Decorative kids bg blob inside */}
                <div className={`absolute inset-0 rounded-[32px] ${colors.lightBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />

                {/* Icon Circle badge */}
                <div className={`w-14 h-14 rounded-2xl ${colors.badgeBg} flex items-center justify-center shrink-0 shadow-lg shadow-black/5 group-hover:scale-110 transition-all duration-300`}>
                  {getIcon(item.iconName)}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-extrabold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-semibold leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

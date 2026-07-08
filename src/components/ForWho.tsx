/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { FOR_WHO_DATA } from '../data';
import {
  Heart,
  GraduationCap,
  School,
  Sparkles,
  Home,
  Baby
} from 'lucide-react';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Heart':
      return <Heart className="w-6 h-6 text-brand-blue fill-brand-blue/10" />;
    case 'GraduationCap':
      return <GraduationCap className="w-6 h-6 text-brand-green" />;
    case 'School':
      return <School className="w-6 h-6 text-brand-yellow" />;
    case 'Sparkles':
      return <Sparkles className="w-6 h-6 text-brand-blue" />;
    case 'Home':
      return <Home className="w-6 h-6 text-brand-green" />;
    case 'Baby':
      return <Baby className="w-6 h-6 text-brand-yellow" />;
    default:
      return <Heart className="w-6 h-6 text-brand-blue" />;
  }
};

const getBadgeBorder = (index: number) => {
  const styles = [
    'bg-blue-50 border-blue-100 text-brand-blue',
    'bg-emerald-50 border-emerald-100 text-brand-green',
    'bg-amber-50 border-amber-100 text-brand-yellow',
  ];
  return styles[index % 3];
};

export default function ForWho() {
  return (
    <section className="py-20 bg-brand-gray relative overflow-hidden">
      {/* Curved decorative wave dividing section */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-white to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-extrabold text-brand-blue uppercase tracking-widest bg-brand-blue/10 px-4 py-1.5 rounded-full">
            PÚBLICO-ALVO
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mt-4 mb-4">
            Para quem o <span className="text-brand-blue">Kit é Ideal?</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium">
            Seja em casa ou na escola, o nosso material adapta-se com perfeição às suas necessidades educativas diárias.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FOR_WHO_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white p-7 rounded-[28px] border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Icon container */}
              <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 ${getBadgeBorder(index)}`}>
                {getIcon(item.iconName)}
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-extrabold text-gray-900 mb-2.5">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 font-semibold leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

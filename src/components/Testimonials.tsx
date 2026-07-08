/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { TESTIMONIALS_DATA } from '../data';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Visual top border */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-brand-gray to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-extrabold text-brand-green uppercase tracking-widest bg-brand-green/10 px-4 py-1.5 rounded-full">
            OPINIÃO DE QUEM JÁ COMPROU
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mt-4 mb-4">
            Histórias Reais de <span className="text-brand-green">Sucesso!</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium">
            Mais de 1.200 famílias e educadores já transformaram a relação das crianças com a matemática básica.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS_DATA.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-brand-gray/45 rounded-[32px] p-7 border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-brand-yellow fill-brand-yellow"
                    />
                  ))}
                </div>

                {/* Comment text */}
                <p className="text-sm sm:text-base text-gray-600 font-semibold leading-relaxed italic mb-6">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Author Row */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-gray-100">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover shadow-sm border border-white"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-extrabold text-gray-900 leading-none mb-1">
                    {testimonial.name}
                  </h4>
                  <span className="text-[11px] text-brand-blue font-bold uppercase tracking-wider">
                    {testimonial.tag}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, Lock, Download, FileText, RefreshCw, Sparkles } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  const trustBadges = [
    { label: 'Compra Segura', icon: <ShieldCheck className="w-5 h-5 text-brand-green" /> },
    { label: 'Pagamento Protegido', icon: <Lock className="w-5 h-5 text-brand-green animate-pulse" /> },
    { label: 'Download Imediato', icon: <Download className="w-5 h-5 text-brand-green" /> },
    { label: 'PDF Alta Definição', icon: <FileText className="w-5 h-5 text-brand-green" /> },
    { label: 'Acesso Vitalício', icon: <RefreshCw className="w-5 h-5 text-brand-green" /> },
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Badges Bar */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 py-8 border-b border-gray-800 text-center">
          {trustBadges.map((badge, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                {badge.icon}
              </div>
              <span className="text-xs sm:text-sm font-bold text-gray-200">{badge.label}</span>
            </div>
          ))}
        </div>

        {/* Footer Details */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-green flex items-center justify-center text-white font-black text-sm">
              123
            </div>
            <div className="text-left">
              <span className="text-sm font-black text-gray-200 block leading-none">
                Kit Matemática Infantil
              </span>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                Educação que transforma
              </span>
            </div>
          </div>

          <p className="text-xs text-gray-500 font-medium text-center md:text-right">
            &copy; {year} Kit Matemática Infantil. Todos os direitos reservados.<br />
            Desenvolvido para fins demonstrativos com altíssimo foco em conversão e usabilidade.
          </p>
        </div>
      </div>
    </footer>
  );
}

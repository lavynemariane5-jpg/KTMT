/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import WhatTheyLearn from './components/WhatTheyLearn';
import ForWho from './components/ForWho';
import Comparison from './components/Comparison';
import KitSelection from './components/KitSelection';
import Bonuses from './components/Bonuses';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Guarantee from './components/Guarantee';
import FAQs from './components/FAQs';
import FinalOffer from './components/FinalOffer';
import Footer from './components/Footer';
import CheckoutModal from './components/CheckoutModal';
import { KitItem } from './types';
import { KITS_DATA } from './data';
import { ShieldAlert, Loader2, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedKit, setSelectedKit] = useState<KitItem | null>(null);

  // URL direct access protection and validation states
  const [isValidatingUrl, setIsValidatingUrl] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [initialModalProps, setInitialModalProps] = useState<{
    step: 1 | 2 | 3 | 4;
    paymentResult: any;
    name: string;
    email: string;
  } | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paymentId = params.get('id') || params.get('payment_id') || params.get('transaction_id');
    
    if (paymentId) {
      setIsValidatingUrl(true);
      setValidationError(null);
      
      // Fetch status from our backend endpoint to verify actual payment approval
      fetch(`/api/payment_status/${paymentId}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Transação ou pagamento não localizado no sistema.");
          }
          return res.json();
        })
        .then((data) => {
          if (data && data.status === "approved") {
            // Find corresponding kit from transaction data
            const matchedKit = KITS_DATA.find(k => k.id === data.kitId) || KITS_DATA[1]; // default to complete
            setSelectedKit(matchedKit);
            setInitialModalProps({
              step: 3, // Immediately jump to Approved & Download page
              paymentResult: { id: data.id, status: data.status },
              name: data.name || '',
              email: data.email || ''
            });
            setIsCheckoutOpen(true);
          } else {
            setValidationError("Este pagamento ainda não foi aprovado pelo Mercado Pago ou está inválido. Por favor, conclua o pagamento primeiro.");
          }
        })
        .catch((err) => {
          console.error("Erro ao validar pagamento pela URL:", err);
          setValidationError(err.message || "Erro de conexão ao verificar o pagamento. Por favor, tente novamente.");
        })
        .finally(() => {
          setIsValidatingUrl(false);
        });
    }
  }, []);

  const handleSelectKit = (kit: KitItem) => {
    setSelectedKit(kit);
    setInitialModalProps(null); // Ensure a clean checkout flow when selected normally
    setIsCheckoutOpen(true);
  };

  const handleScrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 selection:bg-brand-blue/10 selection:text-brand-blue">
      {/* Top Header Section */}
      <Header />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <Hero onStartClick={handleScrollToPricing} />

        {/* Benefits Section */}
        <Benefits />

        {/* What They Learn Section */}
        <WhatTheyLearn />

        {/* For Whom It Is Ideal Section */}
        <ForWho />

        {/* Comparison Section */}
        <Comparison />

        {/* Pricing Kits Section */}
        <KitSelection onSelectKit={handleSelectKit} />

        {/* Exclusive Bonuses Section */}
        <Bonuses />

        {/* How It Works Section */}
        <HowItWorks />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Guarantee Section */}
        <Guarantee />

        {/* FAQs Section */}
        <FAQs />

        {/* Final Conversion Offer */}
        <FinalOffer onSelectKit={handleSelectKit} />
      </main>

      {/* Footer Section */}
      <Footer />

      {/* Interactive Mock Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => {
          setIsCheckoutOpen(false);
          setInitialModalProps(null);
          // Clear query params from the URL bar on close so it doesn't reopen or pollute the experience
          window.history.replaceState({}, document.title, window.location.pathname);
        }}
        selectedKit={
          selectedKit
            ? { id: selectedKit.id, name: selectedKit.name, price: selectedKit.price }
            : null
        }
        initialStep={initialModalProps?.step}
        initialPaymentResult={initialModalProps?.paymentResult}
        initialName={initialModalProps?.name}
        initialEmail={initialModalProps?.email}
      />

      {/* Verification / Security Overlays */}
      <AnimatePresence>
        {isValidatingUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center p-6 text-center"
          >
            <div className="w-20 h-20 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-6 animate-pulse">
              <Lock className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-2">Segurança Garantida</h3>
            <p className="text-sm text-gray-500 font-semibold max-w-sm mb-6 leading-relaxed">
              Verificando a aprovação do seu pagamento com os servidores do Mercado Pago...
            </p>
            <div className="flex items-center gap-2 text-brand-blue font-bold text-xs uppercase tracking-widest bg-brand-blue/5 px-4 py-2 rounded-full border border-brand-blue/10">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Verificando Autenticidade</span>
            </div>
          </motion.div>
        )}

        {validationError && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-900/40 backdrop-blur-xs z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl border border-gray-100 text-center space-y-5"
            >
              <div className="w-14 h-14 rounded-full bg-red-50 text-red-600 mx-auto flex items-center justify-center">
                <ShieldAlert className="w-8 h-8" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-black text-gray-900">Acesso Restrito / Não Autorizado</h3>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">
                  {validationError}
                </p>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setValidationError(null);
                    // Clear query params so they aren't stuck on the page
                    window.history.replaceState({}, document.title, window.location.pathname);
                  }}
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white font-extrabold text-xs py-3.5 rounded-xl cursor-pointer transition-all shadow-sm active:scale-[0.99]"
                >
                  VOLTAR À PÁGINA INICIAL
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


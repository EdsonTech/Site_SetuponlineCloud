import React from 'react';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-blue-900/90"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Pronto para Transformar seu Negócio?
        </h2>
        <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
          Entre em contato conosco hoje e descubra como podemos ajudar sua empresa 
          a alcançar todo seu potencial digital.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-full text-white hover:bg-white hover:text-blue-900 transition-colors"
        >
          Fale com um Especialista
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
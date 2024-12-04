import React from 'react';
import { logos } from '../assets/logos';

export function Clients() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos Parceiros
          </h2>
          <p className="text-xl text-gray-600">
            Trabalhamos com os melhores para entregar excelência em tecnologia
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
          {logos.partners.map((partner, index) => (
            <div 
              key={index} 
              className="h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
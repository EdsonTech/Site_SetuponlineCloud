import React from 'react';

const stats = [
  { number: '15+', label: 'Anos de Experiência' },
  { number: '500+', label: 'Clientes Atendidos' },
  { number: '99.9%', label: 'Uptime Garantido' },
  { number: '24/7', label: 'Suporte Técnico' },
];

export function Stats() {
  return (
    <section className="bg-blue-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6">
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</p>
              <p className="text-blue-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
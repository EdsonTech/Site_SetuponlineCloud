import React from 'react';
import { Shield, Cloud, Cpu, Users } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Segurança em Primeiro Lugar',
    description: 'Proteção completa para seus dados e sistemas com as mais avançadas tecnologias de segurança.'
  },
  {
    icon: Cloud,
    title: 'Cloud Computing',
    description: 'Infraestrutura escalável e flexível na nuvem para otimizar seus recursos e reduzir custos.'
  },
  {
    icon: Cpu,
    title: 'Automação Inteligente',
    description: 'Automatize processos e aumente a produtividade com nossas soluções personalizadas.'
  },
  {
    icon: Users,
    title: 'Suporte Especializado',
    description: 'Equipe técnica altamente qualificada disponível 24/7 para atender suas necessidades.'
  }
];

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Por que escolher a Setuponline?
          </h2>
          <p className="text-xl text-gray-600">
            Combinamos experiência e inovação para entregar as melhores soluções em TI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 text-center">
              <div className="inline-flex p-4 rounded-full bg-blue-100 text-blue-600 mb-6">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
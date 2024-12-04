import React from 'react';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { containers, typography, buttons } from '../utils/styles';

const caseStudies = [
  {
    title: 'Transformação Digital no Setor Financeiro',
    client: 'Banco Regional',
    description: 'Implementação de infraestrutura cloud-first e modernização dos sistemas legados.',
    results: ['Redução de 40% nos custos operacionais', 'Aumento de 99.99% em disponibilidade', 'Tempo de deploy reduzido em 70%'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'Segurança e Compliance para E-commerce',
    client: 'MegaStore Online',
    description: 'Implementação de soluções de segurança avançadas e adequação à LGPD.',
    results: ['100% de conformidade com LGPD', 'Zero incidentes de segurança', 'Aumento de 25% na confiança dos clientes'],
    image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'Modernização de Infraestrutura Industrial',
    client: 'Indústria TechPro',
    description: 'Migração completa para cloud e implementação de IoT industrial.',
    results: ['Eficiência operacional aumentada em 35%', 'ROI positivo em 8 meses', 'Redução de 50% no tempo de manutenção'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  }
];

export function CaseStudies() {
  return (
    <section className="py-20 bg-white">
      <div className={containers.section}>
        <AnimatedSection className="text-center mb-16">
          <h2 className={typography.h2}>
            Casos de Sucesso
          </h2>
          <p className={`${typography.body} max-w-3xl mx-auto mt-4`}>
            Conheça algumas das histórias de transformação digital que ajudamos a construir
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.1}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${study.image})` }}
                >
                  <div className="w-full h-full bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div>
                      <p className="text-sm text-white/80">{study.client}</p>
                      <h3 className="text-xl font-semibold text-white">{study.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <div className="space-y-2">
                    {study.results.map((result, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <button className={`${buttons.outline} w-full justify-center`}>
                    Ver Detalhes
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
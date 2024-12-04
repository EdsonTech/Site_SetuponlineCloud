import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { theme } from '../utils/theme';

const testimonials = [
  {
    name: 'Leonardo Vieira',
    role: 'CTO DESPMJF',
    content: 'A parceria com a Setuponline transformou completamente nossa infraestrutura de TI. O suporte é excepcional e as soluções são sempre inovadoras e alinhadas com nossas necessidades.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
  },
  {
    name: 'Jacks Neto',
    role: 'Founder da Besecure',
    content: 'Excelente experiência com a equipe da Setuponline. Profissionais altamente capacitados e comprometidos com resultados. A transformação digital da nossa empresa foi um sucesso.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
  },
  {
    name: 'Nildo Mafala',
    role: 'Diretor Técnico - HMIC',
    content: 'As soluções em cloud computing da Setuponline nos ajudaram a reduzir custos e aumentar a eficiência operacional. A expertise técnica da equipe é impressionante.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            O que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-600">
            A satisfação dos nossos clientes é o melhor indicador do nosso sucesso
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.1}
              className="relative"
            >
              <motion.div 
                className="bg-white rounded-2xl shadow-lg p-8 relative"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Quote className="absolute top-4 right-4 h-8 w-8 text-brand-primary/10" />
                
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-5 w-5 text-yellow-400 fill-current" 
                    />
                  ))}
                </div>

                <p className="text-gray-600 mb-8 relative">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center mt-auto">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover ring-4 ring-gray-50"
                  />
                  <div className="ml-4">
                    <p className="text-base font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-brand-primary">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div 
                  className={`absolute -bottom-2 -right-2 w-24 h-24 ${theme.gradients.primary} opacity-10 rounded-full blur-2xl`}
                />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
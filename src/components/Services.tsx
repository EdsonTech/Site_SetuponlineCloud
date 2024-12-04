import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { ServiceCard } from './services/ServiceCard';
import { services } from '../utils/services';
import { containers, typography, buttons } from '../utils/styles';
import { theme } from '../utils/theme';

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className={containers.section}>
        <AnimatedSection className="text-center mb-16">
          <h2 className={typography.h2}>
            Nossos Serviços
          </h2>
          <p className={`${typography.body} max-w-3xl mx-auto mt-4`}>
            Soluções completas em TI para empresas de todos os portes, 
            com foco em inovação e resultados
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.1}
              className="group"
            >
              <ServiceCard {...service} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="mt-16 text-center">
          <motion.a
            href="#contact"
            className={`${buttons.primary} inline-flex items-center px-8 py-4`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Fale com um Especialista
            <motion.span
              className="ml-2"
              initial={{ x: 0 }}
              animate={{ x: 5 }}
              transition={{
                type: "spring",
                stiffness: 700,
                damping: 30,
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1
              }}
            >
              →
            </motion.span>
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
}
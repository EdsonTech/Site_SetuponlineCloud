import React from 'react';
import { Server, Cloud, Shield, Code, Database, Network, Cpu, Users, Globe, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { IconSet } from './IconSet';
import { containers, typography, buttons } from '../utils/styles';
import { theme } from '../utils/theme';

const enterpriseSolutions = [
  {
    icon: Cloud,
    title: 'Cloud Computing',
    description: 'Soluções completas em nuvem para sua empresa.',
    features: [
      'Cloud Privada e Híbrida',
      'Microsoft Azure e AWS',
      'Backup em Nuvem',
      'Disaster Recovery',
      'Migração para Nuvem'
    ],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    icon: Shield,
    title: 'Segurança Digital',
    description: 'Proteção completa para seus dados e sistemas.',
    features: [
      'Firewall UTM',
      'Email Security',
      'Endpoint Protection',
      'SOC as a Service',
      'Conformidade LGPD'
    ],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    icon: Server,
    title: 'Infraestrutura',
    description: 'Soluções robustas em infraestrutura de TI.',
    features: [
      'Servidores Dell EMC',
      'Storage Enterprise',
      'Virtualização VMware',
      'Backup e Replicação',
      'Monitoramento 24x7'
    ],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    icon: Network,
    title: 'Conectividade',
    description: 'Soluções avançadas em conectividade empresarial.',
    features: [
      'SD-WAN',
      'MPLS',
      'Internet Dedicada',
      'VPN Corporativa',
      'Wi-Fi Corporativo'
    ],
    image: 'https://images.unsplash.com/photo-1551703599-6b3e8379aa8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    icon: Building2,
    title: 'Outsourcing de TI',
    description: 'Gestão completa da sua infraestrutura de TI.',
    features: [
      'Service Desk',
      'NOC 24x7',
      'Gestão de Ativos',
      'Suporte On-site',
      'Consultoria Especializada'
    ],
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    icon: Code,
    title: 'Desenvolvimento',
    description: 'Soluções personalizadas para seu negócio.',
    features: [
      'Sistemas Web',
      'Aplicativos Mobile',
      'Integrações',
      'APIs',
      'Automação de Processos'
    ],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  }
];

export function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className={containers.section}>
        <AnimatedSection className="text-center mb-16">
          <h2 className={typography.h2}>
            Soluções Corporativas
          </h2>
          <p className={`${typography.body} max-w-3xl mx-auto mt-4`}>
            Oferecemos um portfólio completo de soluções em TI para impulsionar 
            a transformação digital da sua empresa
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {enterpriseSolutions.map((solution, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.1}
              className="group"
            >
              <motion.div 
                className="bg-white rounded-2xl shadow-lg overflow-hidden h-full hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
              >
                <div 
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${solution.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                    <div className="absolute bottom-0 left-0 p-6">
                      <div className="flex items-center space-x-3">
                        <IconSet icon={solution.icon} variant="primary" size="md" animated />
                        <h3 className="text-xl font-semibold text-white">
                          {solution.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    {solution.description}
                  </p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 pt-0">
                  <motion.a
                    href="#contact"
                    className={`${buttons.outline} w-full justify-center group`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Saiba Mais
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
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
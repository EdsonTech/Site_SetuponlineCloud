import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { containers, typography } from '../utils/styles';
import { Server, Cloud, Shield, Code, Database, Network, Cpu, Globe } from 'lucide-react';
import { IconSet } from './IconSet';

const technologies = [
  {
    icon: Cloud,
    category: 'Cloud Computing',
    items: ['Microsoft Azure', 'AWS', 'Google Cloud', 'VMware Cloud', 'Private Cloud'],
    gradient: 'from-blue-500 to-blue-700'
  },
  {
    icon: Shield,
    category: 'Cibersegurança',
    items: ['Fortinet', 'Palo Alto', 'Cisco', 'Kaspersky', 'Microsoft Security'],
    gradient: 'from-red-500 to-red-700'
  },
  {
    icon: Server,
    category: 'Infraestrutura',
    items: ['Dell EMC', 'HPE', 'Cisco', 'VMware', 'Microsoft'],
    gradient: 'from-green-500 to-green-700'
  },
  {
    icon: Code,
    category: 'Desenvolvimento',
    items: ['React', 'Node.js', '.NET', 'Python', 'Java'],
    gradient: 'from-purple-500 to-purple-700'
  },
  {
    icon: Database,
    category: 'Banco de Dados',
    items: ['SQL Server', 'Oracle', 'PostgreSQL', 'MongoDB', 'Redis'],
    gradient: 'from-yellow-500 to-yellow-700'
  },
  {
    icon: Network,
    category: 'Redes',
    items: ['Cisco', 'Fortinet', 'Aruba', 'Extreme', 'Ubiquiti'],
    gradient: 'from-indigo-500 to-indigo-700'
  },
  {
    icon: Cpu,
    category: 'Automação',
    items: ['RPA', 'Power Automate', 'Ansible', 'Terraform', 'Jenkins'],
    gradient: 'from-pink-500 to-pink-700'
  },
  {
    icon: Globe,
    category: 'Conectividade',
    items: ['SD-WAN', 'MPLS', 'VPN', 'Internet', '5G'],
    gradient: 'from-cyan-500 to-cyan-700'
  }
];

export function TechStack() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className={containers.section}>
        <AnimatedSection className="text-center mb-16">
          <h2 className={`${typography.h2} text-white`}>
            Nossa Stack Tecnológica
          </h2>
          <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
            Combinamos as tecnologias mais avançadas do mercado para entregar 
            soluções inovadoras e eficientes
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.1}
              className="relative group"
            >
              <motion.div 
                className="bg-gray-800 rounded-2xl p-8 h-full transition-all duration-300 hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
                <div className="mb-6">
                  <IconSet 
                    icon={tech.icon}
                    variant="primary"
                    size="lg"
                    animated
                    glow
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {tech.category}
                </h3>
                <ul className="space-y-3">
                  {tech.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + itemIndex * 0.1 }}
                      className="flex items-center text-gray-300"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
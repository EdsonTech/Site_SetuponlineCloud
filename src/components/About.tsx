import React from 'react';
import { CheckCircle2, Globe, Users, Calendar, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { COMPANY_INFO } from '../utils/constants';
import { theme } from '../utils/theme';

const achievements = [
  'Mais de 15 anos de experiência no mercado',
  'Equipe altamente qualificada e certificada',
  'Parceiros dos principais fabricantes de TI',
  'Atendimento personalizado e dedicado',
  'Suporte técnico 24x7x365',
  'Projetos entregues com excelência'
];

const companyStats = [
  {
    icon: Calendar,
    value: COMPANY_INFO.founded,
    label: 'Fundação',
    suffix: ''
  },
  {
    icon: Users,
    value: COMPANY_INFO.employees,
    label: 'Profissionais',
    suffix: '+'
  },
  {
    icon: Globe,
    value: COMPANY_INFO.locations.length,
    label: 'Países',
    suffix: ''
  },
  {
    icon: Building2,
    value: '500',
    label: 'Clientes Atendidos',
    suffix: '+'
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Sobre a Setuponline
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {COMPANY_INFO.description}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <AnimatedSection delay={0.2}>
            <div className="space-y-8">
              <div className="prose prose-lg">
                <p className="text-lg text-gray-600 mb-6">
                  Desde {COMPANY_INFO.founded}, a Setuponline tem se destacado no mercado de TI, 
                  oferecendo soluções inovadoras e serviços de alta qualidade para empresas de 
                  todos os portes. Nossa missão é impulsionar a transformação digital dos nossos 
                  clientes, garantindo eficiência, segurança e competitividade.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Com uma equipe de {COMPANY_INFO.employees} profissionais altamente qualificados 
                  e certificados, distribuídos entre {COMPANY_INFO.locations.join(' e ')}, 
                  estamos preparados para enfrentar os desafios tecnológicos mais complexos, 
                  sempre com foco na excelência e na satisfação dos nossos clientes.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle2 className="h-6 w-6 text-brand-primary flex-shrink-0" />
                    <span className="text-gray-600">{achievement}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold mb-4">Informações Legais</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <span className="font-medium">Angola:</span> {COMPANY_INFO.registrations.angola}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Brasil:</span> {COMPANY_INFO.registrations.brazil}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="relative">
              <div 
                className="aspect-square rounded-2xl overflow-hidden"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="grid grid-cols-2 gap-8">
                      {companyStats.map((stat, index) => (
                        <motion.div
                          key={index}
                          className="text-center"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                            <stat.icon className="h-8 w-8 text-white mx-auto mb-2" />
                            <div className="text-2xl font-bold text-white">
                              {stat.value}{stat.suffix}
                            </div>
                            <div className="text-sm text-blue-100">{stat.label}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-100 rounded-2xl -z-10"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
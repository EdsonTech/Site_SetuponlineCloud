import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { containers, typography, buttons } from '../utils/styles';
import { theme } from '../utils/theme';

const locations = {
  angola: {
    title: 'Angola',
    address: 'Edificio Victoria Office, Luanda sul, estrada de Viana camama, Escritório 3C',
    city: 'Luanda, Angola',
    phone: '(+244) 923 755 040',
    fax: '(+244) 222 215 565',
    email: 'comercial@setuponline.net.br',
    maps: 'https://maps.google.com/?q=Edificio+Victoria+Office,+Luanda+sul'
  },
  brazil: {
    title: 'Brasil',
    address: 'Edificio Bonnaire Office, Rua Doutor Luiz Migiliano, 1986 – Conj 1914, Morumbi',
    city: 'São Paulo, Brasil',
    phone: '(+55) 11 94856-9240',
    email: 'comercial@setuponline.net.br',
    maps: 'https://maps.google.com/?q=Rua+Doutor+Luiz+Migiliano,+1986,+Morumbi,+São+Paulo'
  }
};

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
  };

  return (
    <section id="contact" className="relative py-20 bg-white">
      <div className={containers.section}>
        <AnimatedSection className="text-center mb-16">
          <h2 className={typography.h2}>Entre em Contato</h2>
          <p className={`${typography.body} max-w-2xl mx-auto mt-4`}>
            Estamos presentes em Angola e Brasil para melhor atender às suas necessidades
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection delay={0.2}>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className={`${buttons.primary} w-full justify-center group`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Enviar Mensagem</span>
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="space-y-8">
              {Object.values(locations).map((location, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <Globe className="h-6 w-6 text-brand-primary" />
                    <h3 className="text-xl font-semibold ml-2">{location.title}</h3>
                  </div>
                  <div className="space-y-4">
                    <a
                      href={location.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start group"
                    >
                      <MapPin className="h-5 w-5 text-gray-600 mt-1 flex-shrink-0" />
                      <div className="ml-3">
                        <p className="text-gray-600 group-hover:text-brand-primary transition-colors">
                          {location.address}
                        </p>
                        <p className="text-gray-600">{location.city}</p>
                      </div>
                    </a>
                    <a
                      href={`tel:${location.phone}`}
                      className="flex items-center group"
                    >
                      <Phone className="h-5 w-5 text-gray-600" />
                      <span className="ml-3 text-gray-600 group-hover:text-brand-primary transition-colors">
                        {location.phone}
                      </span>
                    </a>
                    {location.fax && (
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-gray-600" />
                        <span className="ml-3 text-gray-600">Fax: {location.fax}</span>
                      </div>
                    )}
                    <a
                      href={`mailto:${location.email}`}
                      className="flex items-center group"
                    >
                      <Mail className="h-5 w-5 text-gray-600" />
                      <span className="ml-3 text-gray-600 group-hover:text-brand-primary transition-colors">
                        {location.email}
                      </span>
                    </a>
                  </div>
                </motion.div>
              ))}

              <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
                <h4 className="text-lg font-semibold mb-4">Informações Legais</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>NIF (Angola): 5000984450</p>
                  <p>CNPJ (Brasil): 41.976.767/0001-38</p>
                  <p className="mt-4">
                    A Setuponline é uma empresa de direito Angolano e Brasileiro no sector das tecnologias 
                    de Informação, estabelecida desde 2018 com uma equipe de aproximadamente 50 profissionais 
                    distribuídos entre Angola e Brasil.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
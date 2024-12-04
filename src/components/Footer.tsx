import React from 'react';
import { motion } from 'framer-motion';
import { logos } from '../assets/logos';
import { Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';
import { containers } from '../utils/styles';
import { COMPANY_INFO } from '../utils/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: COMPANY_INFO.social.linkedin, label: 'LinkedIn' },
    { icon: Facebook, href: COMPANY_INFO.social.facebook, label: 'Facebook' },
    { icon: Twitter, href: COMPANY_INFO.social.twitter, label: 'Twitter' },
    { icon: Instagram, href: COMPANY_INFO.social.instagram, label: 'Instagram' },
    { icon: Mail, href: 'mailto:comercial@setuponline.net.br', label: 'Email' }
  ];

  const footerLinks = {
    empresa: [
      { label: 'Sobre', href: '#about' },
      { label: 'Serviços', href: '#services' },
      { label: 'Contato', href: '#contact' },
      { label: 'Carreiras', href: '#careers' }
    ],
    servicos: [
      { label: 'Cloud Computing', href: '#cloud' },
      { label: 'Segurança', href: '#security' },
      { label: 'Infraestrutura', href: '#infrastructure' },
      { label: 'Desenvolvimento', href: '#development' }
    ],
    suporte: [
      { label: 'Central de Ajuda', href: '#help' },
      { label: 'Documentação', href: '#docs' },
      { label: 'Status', href: '#status' },
      { label: 'Área do Cliente', href: '#client' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className={`${containers.section} py-16`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <motion.img
              src={logos.setuponline.full}
              alt="Setuponline Cloud Solutions"
              className="h-12 mb-6 brightness-0 invert"
              whileHover={{ scale: 1.05 }}
            />
            <p className="text-gray-400 mb-6">
              Há mais de 15 anos oferecendo soluções completas em TI para empresas, 
              com foco em qualidade, segurança e inovação.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Suporte</h3>
            <ul className="space-y-3">
              {footerLinks.suporte.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Setuponline Cloud Solutions. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#privacy" className="text-gray-400 hover:text-white text-sm">
                Política de Privacidade
              </a>
              <a href="#terms" className="text-gray-400 hover:text-white text-sm">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
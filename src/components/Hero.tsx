import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { containers, typography, buttons } from '../utils/styles';
import { theme } from '../utils/theme';

export function Hero() {
  return (
    <div className="relative min-h-screen">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className={`absolute inset-0 ${theme.gradients.hero} opacity-90`}></div>
        
        {/* Animated mesh background */}
        <div className="absolute inset-0 opacity-20">
          <div className={theme.gradients.mesh}></div>
        </div>
      </div>

      {/* Content */}
      <div className={`${containers.section} relative pt-32 pb-20`}>
        <AnimatedSection className="max-w-4xl mx-auto text-center" animation="slideUp">
          <motion.h1 
            className={`${typography.h1} text-white mb-8`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="block">Transforme seu</span>
            <span className={`${typography.gradient} from-blue-300 via-blue-200 to-blue-100`}>
              Futuro Digital
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Há mais de 15 anos liderando a transformação digital das empresas com soluções 
            inovadoras em TI e cloud computing
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.a
              href="#contact"
              className={`${buttons.primary} group`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Comece Agora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#services"
              className={`${buttons.secondary} group`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Conheça Nossos Serviços
              <ArrowRight className="ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </motion.a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-16 pt-16 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-blue-200">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-blue-200">Clientes Satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-blue-200">Uptime Garantido</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-blue-200">Suporte Técnico</div>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div 
          className="w-1 h-16 rounded-full bg-white/30"
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { logos } from '../assets/logos';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from '../utils/theme';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Soluções', href: '#solutions' },
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre', href: '#about' },
    { name: 'Contato', href: '#contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 shadow-lg backdrop-blur-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img 
              src={logos.setuponline.full} 
              alt="Setuponline Cloud Solutions" 
              className={`h-12 object-contain transition-all duration-300 ${
                isScrolled ? 'brightness-100' : 'brightness-0 invert'
              }`}
            />
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`
                  font-bold text-base tracking-wide
                  ${isScrolled 
                    ? 'text-gray-800 hover:text-blue-600' 
                    : 'text-white hover:text-blue-200'
                  } 
                  transition-all duration-300
                `}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className={`
                font-bold text-base tracking-wide px-6 py-2.5 rounded-full
                ${isScrolled 
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white/10 text-white hover:bg-white/20'
                }
                transition-all duration-300 shadow-lg hover:shadow-xl
              `}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Fale Conosco
            </motion.a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-xl">
              {menuItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 rounded-lg text-base font-bold text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 10 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="block px-4 py-3 rounded-lg text-base font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-center mt-4"
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.02 }}
              >
                Fale Conosco
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
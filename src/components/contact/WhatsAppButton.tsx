import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { theme } from '../../utils/theme';

export function WhatsAppButton() {
  const whatsappNumber = '+244923755040';
  const message = encodeURIComponent('Olá! Gostaria de falar com um especialista.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-24 right-8 z-50 ${theme.gradients.primary} p-4 rounded-full shadow-lg hover:shadow-xl text-white`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <MessageCircle className="h-6 w-6" />
      <span className="sr-only">Falar com um especialista no WhatsApp</span>
    </motion.a>
  );
}
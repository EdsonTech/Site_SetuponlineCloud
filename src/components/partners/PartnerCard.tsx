import React from 'react';
import { motion } from 'framer-motion';

interface PartnerProps {
  logo: string;
  name: string;
  level: string;
  specialties: string[];
}

export function PartnerCard({ logo, name, level, specialties }: PartnerProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gray-800/50 rounded-2xl p-6 text-center hover:bg-gray-800 transition-colors"
    >
      <div className="h-16 flex items-center justify-center mb-4">
        <img
          src={logo}
          alt={name}
          className="h-12 object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-all duration-300"
        />
      </div>
      <h4 className="font-semibold text-white mb-2">{name}</h4>
      <p className="text-sm text-blue-400 mb-4">{level}</p>
      <div className="flex flex-wrap gap-2 justify-center">
        {specialties.map((specialty, i) => (
          <span
            key={i}
            className="text-xs px-2 py-1 rounded-full bg-blue-900/50 text-blue-300"
          >
            {specialty}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
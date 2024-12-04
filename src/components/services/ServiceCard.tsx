import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { theme } from '../../utils/theme';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

export function ServiceCard({ icon: Icon, title, description, features, gradient }: ServiceCardProps) {
  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-lg overflow-hidden h-full hover:shadow-xl transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      <div className={`bg-gradient-to-r ${gradient} p-6`}>
        <Icon className="h-8 w-8 text-white" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <ul className="space-y-2">
          {features.map((feature, featureIndex) => (
            <li 
              key={featureIndex}
              className="flex items-center text-sm text-gray-600"
            >
              <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
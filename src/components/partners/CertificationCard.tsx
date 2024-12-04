import React from 'react';
import { Shield, Award, CheckCircle, Globe, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const icons: Record<string, LucideIcon> = {
  'Microsoft Gold Partner': Shield,
  'VMware Enterprise Partner': Award,
  'Dell Titanium Partner': CheckCircle,
  'Presença Internacional': Globe
};

interface CertificationProps {
  title: string;
  description: string;
  gradient: string;
}

export function CertificationCard({ title, description, gradient }: CertificationProps) {
  const Icon = icons[title] || Shield;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`bg-gradient-to-br ${gradient} p-1 rounded-2xl`}
    >
      <div className="bg-gray-900 p-8 rounded-2xl h-full">
        <div className="inline-flex p-3 rounded-lg bg-white/10 text-white mb-6">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">
          {title}
        </h3>
        <p className="text-gray-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
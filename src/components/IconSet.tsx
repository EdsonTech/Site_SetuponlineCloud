import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface IconSetProps {
  icon: LucideIcon;
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  animated?: boolean;
  glow?: boolean;
}

const variants = {
  primary: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white',
  secondary: 'bg-gradient-to-r from-green-600 to-green-700 text-white',
  accent: 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white',
  ghost: 'bg-white/10 text-white backdrop-blur-sm'
};

const sizes = {
  sm: 'p-2',
  md: 'p-3',
  lg: 'p-4',
  xl: 'p-5'
};

const iconSizes = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
  xl: 'h-10 w-10'
};

export function IconSet({
  icon: Icon,
  variant = 'primary',
  size = 'md',
  className = '',
  animated = false,
  glow = false
}: IconSetProps) {
  const Container = animated ? motion.div : 'div';
  const animationProps = animated ? {
    whileHover: { scale: 1.1, rotate: 5 },
    whileTap: { scale: 0.95 },
    transition: { type: "spring", stiffness: 400, damping: 10 }
  } : {};

  return (
    <Container
      className={`
        inline-flex items-center justify-center rounded-xl
        ${variants[variant]} ${sizes[size]}
        shadow-lg hover:shadow-xl
        transition-all duration-300
        ${glow ? 'shadow-[0_0_30px_rgba(14,165,233,0.3)]' : ''}
        ${className}
      `}
      {...animationProps}
    >
      <Icon className={`${iconSizes[size]} ${animated ? 'transform-gpu' : ''}`} />
    </Container>
  );
}
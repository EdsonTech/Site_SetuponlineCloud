export const theme = {
  colors: {
    brand: {
      primary: '#1B3B87', // Setuponline blue
      secondary: '#2E855A', // Setuponline green
      accent: '#0D4F75', // Deep blue accent
      dark: '#102037'  // Dark background
    },
    text: {
      primary: '#1f2937',
      secondary: '#4b5563',
      light: '#9ca3af'
    }
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Inter, sans-serif'
  },
  gradients: {
    primary: 'bg-gradient-to-r from-brand-primary to-blue-800',
    secondary: 'bg-gradient-to-r from-brand-secondary to-green-700',
    dark: 'bg-gradient-to-r from-brand-dark via-blue-900 to-gray-900',
    hero: 'bg-gradient-to-br from-brand-primary/95 via-blue-800/95 to-brand-dark/95',
    mesh: 'bg-[radial-gradient(at_40%_20%,hsla(222,47%,28%,0.7)_0px,transparent_50%),radial-gradient(at_80%_0%,hsla(218,81%,85%,0.4)_0px,transparent_50%),radial-gradient(at_0%_50%,hsla(355,100%,93%,0.4)_0px,transparent_50%),radial-gradient(at_80%_50%,hsla(340,100%,76%,0.4)_0px,transparent_50%)]'
  },
  shadows: {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    glow: 'shadow-[0_0_30px_rgba(27,59,135,0.3)]'
  },
  transitions: {
    base: 'transition-all duration-300',
    slow: 'transition-all duration-500',
    fast: 'transition-all duration-150'
  },
  animations: {
    float: 'animate-float',
    glow: 'animate-glow',
    slideUp: 'animate-slide-up',
    fadeIn: 'animate-fade-in'
  },
  layout: {
    maxWidth: 'max-w-7xl',
    padding: 'px-4 sm:px-6 lg:px-8',
    section: 'py-20'
  }
};

export const components = {
  container: `${theme.layout.maxWidth} mx-auto ${theme.layout.padding}`,
  section: theme.layout.section,
  button: {
    base: 'inline-flex items-center justify-center rounded-full font-bold transition-all duration-300',
    primary: `bg-gradient-to-r from-brand-primary to-blue-800 text-white hover:opacity-90 ${theme.shadows.glow}`,
    secondary: `bg-gradient-to-r from-brand-secondary to-green-700 text-white hover:opacity-90`,
    outline: 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white'
  },
  heading: {
    h1: 'font-display text-5xl md:text-7xl font-bold tracking-tight',
    h2: 'font-display text-4xl font-bold tracking-tight',
    h3: 'font-display text-2xl font-bold tracking-tight'
  },
  text: {
    body: 'text-lg text-gray-600',
    caption: 'text-sm text-gray-500'
  },
  card: {
    base: 'bg-white rounded-2xl shadow-lg transition-all duration-300',
    hover: 'hover:shadow-xl hover:-translate-y-1',
    gradient: 'bg-gradient-to-br from-white via-gray-50 to-gray-100'
  }
};
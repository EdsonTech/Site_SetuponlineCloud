export const containers = {
  section: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  narrow: 'max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'
};

export const typography = {
  h1: 'font-display text-5xl md:text-7xl font-bold tracking-tight',
  h2: 'font-display text-4xl font-bold tracking-tight',
  h3: 'font-display text-2xl font-semibold tracking-tight',
  body: 'text-lg text-gray-600',
  caption: 'text-sm text-gray-500',
  gradient: 'bg-clip-text text-transparent bg-gradient-to-r'
};

export const buttons = {
  primary: 'inline-flex items-center px-8 py-4 rounded-full text-white bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-bold',
  secondary: 'inline-flex items-center px-8 py-4 border-2 border-white rounded-full text-white hover:bg-white hover:text-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-bold',
  outline: 'inline-flex items-center px-6 py-3 border-2 border-blue-900 rounded-full text-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-bold',
  text: 'inline-flex items-center font-bold text-blue-900 hover:text-blue-800 transition-colors'
};

export const effects = {
  cardHover: 'transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1',
  iconHover: 'transition-all duration-300 hover:scale-110 hover:rotate-3',
  textGradient: 'bg-clip-text text-transparent bg-gradient-to-r',
  glassmorphism: 'backdrop-blur-md bg-white/90',
  meshGradient: 'bg-mesh-1',
  darkMeshGradient: 'bg-mesh-2'
};

export const animations = {
  fadeIn: 'animate-fade-in',
  slideUp: 'animate-slide-up',
  slideDown: 'animate-slide-down',
  float: 'animate-float',
  glow: 'animate-glow'
};

export const cards = {
  base: 'bg-white rounded-2xl shadow-lg p-6',
  hover: 'transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1',
  gradient: 'bg-gradient-to-br from-white via-gray-50 to-gray-100',
  dark: 'bg-gray-900 text-white',
  glass: 'backdrop-blur-md bg-white/10'
};

export const inputs = {
  base: 'w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all duration-200',
  label: 'block text-sm font-medium text-gray-700 mb-1',
  error: 'text-sm text-red-600 mt-1',
  icon: 'absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400'
};

export const lists = {
  base: 'space-y-2',
  item: 'flex items-center space-x-2',
  bullet: 'w-1.5 h-1.5 bg-blue-900 rounded-full',
  icon: 'flex-shrink-0 h-5 w-5 text-blue-900'
};
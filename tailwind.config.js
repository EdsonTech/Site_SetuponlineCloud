/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#1B3B87',
          secondary: '#2E855A',
          accent: '#0D4F75',
          dark: '#102037'
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'scale': 'scale 0.5s ease-out',
        'rotate': 'rotate 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 0 rgba(27, 59, 135, 0)' },
          '100%': { boxShadow: '0 0 30px rgba(27, 59, 135, 0.5)' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        scale: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        rotate: {
          '0%': { transform: 'rotate(-3deg)', opacity: '0' },
          '100%': { transform: 'rotate(0)', opacity: '1' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-shine': 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.1))',
        'mesh-1': 'radial-gradient(at 40% 20%, rgba(27, 59, 135, 0.7) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(30, 64, 175, 0.4) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(16, 32, 55, 0.4) 0px, transparent 50%), radial-gradient(at 80% 50%, rgba(27, 59, 135, 0.4) 0px, transparent 50%)',
        'mesh-2': 'radial-gradient(at 40% 20%, rgba(27, 59, 135, 0.7) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(30, 64, 175, 0.4) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(16, 32, 55, 0.4) 0px, transparent 50%), radial-gradient(at 80% 50%, rgba(27, 59, 135, 0.4) 0px, transparent 50%)'
      }
    },
  },
  plugins: [],
};
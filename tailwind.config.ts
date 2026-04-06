import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#2563EB',
          light: '#60A5FA',
          dark: '#1D4ED8',
        },
        navy: {
          50: '#EFF6FF',
          900: '#0A0F1E',
          800: '#0F1729',
          700: '#162035',
          600: '#1E2D47',
        },
        accent: {
          green: '#10B981',
          teal: '#06B6D4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0A0F1E 0%, #0F1729 50%, #162035 100%)',
        'card-gradient': 'linear-gradient(135deg, #0F1729 0%, #162035 100%)',
        'blue-gradient': 'linear-gradient(135deg, #1D4ED8 0%, #2563EB 50%, #3B82F6 100%)',
        'cta-gradient': 'linear-gradient(135deg, #1E2D47 0%, #162035 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;

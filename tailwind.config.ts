import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium Matte Olive Green Palette
        olive: {
          50: '#f7f5f0',
          100: '#ebe8e0',
          200: '#d4d0c4',
          300: '#b8b4a5',
          400: '#9c987f',
          500: '#807c65',
          600: '#656252',
          700: '#4d4a3e',
          800: '#36342d',
          900: '#1f1e1c',
        },
        // Status Colors
        status: {
          pending: '#ef4444', // Red for incomplete
          completed: '#22c55e', // Green for completed
        },
        // Accent Colors for Playful Design
        accent: {
          coral: '#ff6b6b',
          teal: '#4ecdc4',
          mustard: '#ffd93d',
          lavender: '#a8e6cf',
          peach: '#ffaaa5',
          sky: '#74b9ff',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'serif'],
      },
      boxShadow: {
        'premium': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'premium-lg': '0 10px 40px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

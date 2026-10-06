/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Explorando Experiencias — umbrella brand (warm coral + deep green)
        coral: {
          50: '#fff5f3',
          100: '#ffe8e3',
          200: '#ffd0c7',
          300: '#ffb0a1',
          400: '#ff8a73',
          500: '#ff6b52',
          600: '#e8503a',
          700: '#c33d2a',
          800: '#9e3122',
          900: '#7f2b1e',
        },
        forest: {
          50: '#f0faf3',
          100: '#dcf5e3',
          200: '#bbebc9',
          300: '#88db9f',
          400: '#4fc074',
          500: '#2ba456',
          600: '#1e8543',
          700: '#1a6a39',
          800: '#175430',
          900: '#134529',
        },
        // Viajes para Solteros Perú — turquoise + solar yellow
        turquoise: {
          50: '#f0fdfb',
          100: '#ccfbf3',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        solar: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        // Club Social de Solteros Perú — plum + warm rose
        plum: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
        rose: {
          50: '#fff1f5',
          100: '#ffe4ec',
          200: '#fecdd9',
          300: '#fda4c0',
          400: '#fb7193',
          500: '#f43f7a',
          600: '#e11d63',
          700: '#be124f',
          800: '#9f124a',
          900: '#881344',
        },
        cream: {
          50: '#fefcf8',
          100: '#fdf8ef',
          200: '#fbf0dc',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.7s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

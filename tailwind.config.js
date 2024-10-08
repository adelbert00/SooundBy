/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  theme: {
    screens: {
      sm: '0px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '2560px',
    },
    fontSize: {
      xxs: ['10px', '150%'],
      xs: ['12px', '150%'],
      sm: ['14px', '150%'],
      base: ['16px', '150%'],
      lg: ['18px', '150%'],
      xl: ['24px', '150%'],
      '2xl': ['32px', '120%'],
      '3xl': ['48px', '120%'],
      '4xl': ['56px', '120%'],
      '5xl': ['64px', '120%'],
      'icon-md': '24px',
      'icon-lg': '40px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4f46e5', // indigo-500
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#858585',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#1a202c',
        },
        secondary: {
          DEFAULT: '#6366f1', // indigo-400
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#858585',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#2d3748',
          900: '#312e81',
        },
        background: {
          DEFAULT: '#1a202c', // gray-200
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
          gradientFrom: '#0d0d0d',
          gradientVia: '#4b0082',
          gradientTo: '#8b00ff',
        },
        foreground: {
          DEFAULT: '#374151', // gray-700
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#374151',
          800: '#2d3748',
          900: '#1a202c',
        },
        accent: {
          DEFAULT: '#fbbf24', // yellow-400
          100: '#fefcbf',
          200: '#faf089',
          300: '#f6e05e',
          400: '#ecc94b',
          500: '#d69e2e',
          600: '#b7791f',
          700: '#975a16',
          800: '#744210',
          900: '#5f370e',
        },
      },
      spacing: {
        '2xs': '0.125rem',
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '2rem',
        xl: '4rem',
        '2xl': '8rem',
      },
      fontFamily: {
        lineal: ['Lineal'],
      },
      boxShadow: {
        sm: '0px 1px 3px rgba(0, 0, 0, 0.7)',
        md: '0px 4px 6px rgba(0, 0, 0, 0.75)',
        lg: '0px 10px 15px rgba(0, 0, 0, 0.85)',
        xl: '0px 20px 25px rgba(0, 0, 0, 0.9)',
        xxl: '0px 40px 50px rgba(0, 0, 0, 0.95)',
      },
      textShadow: {
        custom: '0px 0px 25px 0px var(--gray-300, #858585)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        fadeIn: 'fadeIn 1s ease-in-out forwards',
        fadeInDelay1: 'fadeIn 1s ease-in-out forwards 0.5s',
        fadeInDelay2: 'fadeIn 1s ease-in-out forwards 0.6s',
        fadeInDelay3: 'fadeIn 1s ease-in-out forwards 0.7s',
        fadeDown: 'fadeDown 1s ease-in-out forwards',
        fadeDownDelay1: 'fadeDown 1s ease-in-out forwards 0.1s',
        fadeDownDelay2: 'fadeDown 1s ease-in-out forwards 0.2s',
        fadeDownDelay3: 'fadeDown 1s ease-in-out forwards 0.3s',
        fadeDownDelay4: 'fadeDown 1s ease-in-out forwards 0.4s',
        fadeDownDelay5: 'fadeDown 1s ease-in-out forwards 0.5s',
        fadeDownDelay6: 'fadeDown 1s ease-in-out forwards 0.6s',
        fadeDownDelay7: 'fadeDown 1s ease-in-out forwards 0.7s',
      },
    },
  },
  plugins: [],
};

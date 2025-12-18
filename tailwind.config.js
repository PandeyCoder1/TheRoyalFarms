/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'organic-green': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        'earth-brown': {
          50: '#faf8f5',
          100: '#f5f1ea',
          200: '#e8dfc9',
          300: '#d4c5a0',
          400: '#b8a577',
          500: '#9d8859',
          600: '#8a7449',
          700: '#6f5d3c',
          800: '#5a4a32',
          900: '#4a3d29',
        },
      },
    },
  },
  plugins: [],
};

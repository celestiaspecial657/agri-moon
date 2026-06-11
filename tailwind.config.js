/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        forest: {
          50: '#f2f7f2',
          100: '#e0ece0',
          200: '#c2d9c3',
          300: '#97be99',
          400: '#669a69',
          500: '#437d47',
          600: '#316235',
          700: '#274f2b',
          800: '#204024',
          900: '#1b351f',
          950: '#0d1f11',
        },
        earth: {
          50: '#faf7f2',
          100: '#f2ebe0',
          200: '#e4d4bc',
          300: '#d2b893',
          400: '#be9568',
          500: '#b07d4e',
          600: '#9a6843',
          700: '#7f5338',
          800: '#694432',
          900: '#57392b',
          950: '#2f1d15',
        },
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(0,0,0,0.06), 0 1px 2px -1px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 16px 0 rgba(0,0,0,0.10)',
        glass: '0 8px 32px 0 rgba(31,38,135,0.08)',
      },
    },
  },
  plugins: [],
}

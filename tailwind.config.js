/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        steel: {
          950: '#080808',
          900: '#111111',
          800: '#1c1c1c',
          700: '#2a2a2a',
          600: '#3d3d3d',
          500: '#555555',
          400: '#888888',
          300: '#aaaaaa',
          200: '#cccccc',
          100: '#eeeeee',
        }
      },
      backgroundImage: {
        'metal-gradient': 'linear-gradient(135deg, #1c1c1c 0%, #2a2a2a 50%, #1c1c1c 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}

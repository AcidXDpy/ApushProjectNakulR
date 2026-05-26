/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        court: {
          green: '#7dd3fc',
          lime: '#d6b25e',
          blue: '#4f8cff',
          ink: '#070a0f',
          panel: '#101722',
          line: '#263241',
        },
      },
      boxShadow: {
        glow: '0 0 42px rgba(79, 140, 255, 0.18)',
        card: '0 26px 80px rgba(0, 0, 0, 0.42)',
      },
    },
  },
  plugins: [],
};

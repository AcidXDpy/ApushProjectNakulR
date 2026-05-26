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
          green: '#00d084',
          lime: '#b7ff4a',
          blue: '#23b5ff',
          ink: '#061115',
          panel: '#0b171d',
          line: '#17313b',
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(35, 181, 255, 0.16)',
        card: '0 24px 70px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [],
};

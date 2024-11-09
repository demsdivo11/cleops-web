/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        float: 'float 3s ease-in-out infinite',
        slideDown: 'slideDown 0.3s ease-out forwards',
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
      },
    },
  },
  plugins: [],
};
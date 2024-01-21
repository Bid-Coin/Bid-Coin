/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./node_modules/ui/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};

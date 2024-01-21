/** @type {import('tailwindcss').Config} */
const config = require('../../tailwind.config.cjs');
module.exports = {
  ...config,
  content: [...config.content, './index.html', './src/**/*.{js,ts,jsx,tsx}'],
};

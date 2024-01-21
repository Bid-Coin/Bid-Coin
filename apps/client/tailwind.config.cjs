/** @type {import('tailwindcss').Config} */
const config = require('../../tailwind.config.cjs');
module.exports = {
  ...config,
  content: [
    ...config.content,
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
};

/** @type {import('tailwindcss').Config} */
import config from '../../tailwind.config.js';
// const config = require('../../tailwind.config.cjs');

const tlconfig = {
  ...config,
  content: [...config.content, './index.html', './src/**/*.{js,ts,jsx,tsx}'],
};

export default tlconfig;

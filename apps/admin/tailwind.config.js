/** @type {import('tailwindcss').Config} */
import config from '@pacakage/ui/tailwind.config.js';
// const config = require('../../tailwind.config.cjs');

const tlconfig = {
  ...config,
  content: [
    ...config.content,
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/src/**/*.{ts,tsx,js,jsx}',
  ],
};

export default tlconfig;

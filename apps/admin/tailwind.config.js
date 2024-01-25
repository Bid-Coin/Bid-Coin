/** @type {import('tailwindcss').Config} */
import config from '@pacakage/ui/tailwind.config.js';

const tlconfig = {
  ...config,
  content: [...config.content, './index.html', './src/**/*.{js,ts,jsx,tsx}'],
};

export default tlconfig;

/**  @type {import('tailwindcss').Config} */
import config from '@pacakage/ui/tailwind.config';

const tlconfig = {
  ...config,
  content: [
    ...config.content,
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
};

export default tlconfig;

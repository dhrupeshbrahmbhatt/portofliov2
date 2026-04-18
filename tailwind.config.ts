import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'apple-black': '#000000',
        'apple-gray': '#f5f5f7',
        'apple-near-black': '#1d1d1f',
        'apple-blue': '#0071e3',
        'apple-link-blue': '#0066cc',
        'apple-bright-blue': '#2997ff',
      },
      fontFamily: {
        display: [
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Display',
          'Segoe UI',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        text: [
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Text',
          'Segoe UI',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        'apple-card': 'rgba(0, 0, 0, 0.22) 3px 5px 30px 0px',
      },
      borderRadius: {
        'apple-pill': '980px',
      },
      backdropBlur: {
        'apple': '20px',
      },
    },
  },
  plugins: [],
};

export default config;

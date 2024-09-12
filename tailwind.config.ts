import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  screens: {
    xs: '375px',
    sm: '393px',
    md: '430px',
    lg: '1280px',
    xl: '1366px',
    '2xl': '1440px',
    '3xl': '1512px',
    '4xl': '1728px',
  },
  theme: {
    extend: {
      colors: {
        // White
        white: '#FFFFFF',

        // Blacks
        black: '#000000',
        'black-light': '#070707',
        'black-dark': '#0C0C0C',

        // Neutrals (grays)
        'neutral-50': '#FAFAFA',
        'neutral-100': '#F3F3F3',
        'neutral-200': '#F2F3F5',
        'neutral-300': '#F0F0F0',
        'neutral-400': '#ECECEC',
        'neutral-500': '#E8E8E8',
        'neutral-600': '#D9D9D9',
        'neutral-700': '#D7D7D7',
        'neutral-800': '#C9C9C9',
        'neutral-900': '#969696',

        // Grays (with slight hue)
        'gray-100': '#7E7E7E',
        'gray-200': '#727272',
        'gray-300': '#5F5F72',
        'gray-400': '#565662',
        'gray-500': '#4F4F4F',
        'gray-600': '#4B4B56',
        'gray-700': '#353535',
        'gray-800': '#343434',
        'gray-900': '#2C2C2C',
        'gray-950': '#272727',

        // Dark blues
        'blue-dark': '#080F21',
        'blue-darker': '#0D1524',

        // Very dark grays / Off-blacks
        'off-black': '#262630',
        'off-black-light': '#292D32',

        // Reds
        'red-400': '#FF5E5E',
        'red-500': '#FF2B2B',
        'red-600': '#FF2A2A',

        // Green
        'green-500': '#1FBC42',

        // Orange
        'orange-500': '#FF4500',

        // Purple
        'purple-200': '#C9C4CE',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(to bottom, #262630 0%, #606060 100%)',
        'gradient-orange':
          'linear-gradient(to bottom, #FF4500 0%, #FFBCBC 100%)',
      },
      scrollbar: ['rounded'],
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
export default config;

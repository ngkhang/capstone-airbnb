import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0.75rem',
        md: '1.5rem',
        lg: '2rem',
      },
      screens: {
        md: '696px',
        lg: '1080px',
      },
    },
    extend: {
      screens: {
        md: '744px',
        lg: '1128px',
        xl: '1440px',
      },
      fontFamily: {
        airbnb: ['var(--font-airbnb)'],
      },
    },
  },
  plugins: [],
  important: true,
};
export default config;

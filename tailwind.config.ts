import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

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
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.bg-dot-pattern': {
          'background-color': '#fff',
          'background-image': 'radial-gradient(#c4c4c4 0.09rem, transparent 0.09rem), radial-gradient(#c4c4c4 0.09rem, #fff 0.09rem)',
          'background-size': '2rem 2rem',
          'background-position': '0 0, 1rem 1rem',
        },
      };
      addUtilities(newUtilities);
    })
  ],
  important: true,
};
export default config;

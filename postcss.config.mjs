/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    'tailwindcss/nesting': 'postcss-nesting',
    autoprefixer: {},
  },
};

export default config;

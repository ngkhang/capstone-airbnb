const path = require('path');

const buildEslintCommand = (filenames) => {
  return `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')
    }`;
}

module.exports = {
  '*.{js,jsx,ts,tsx,scss,css}': [
    "stylelint '**/*.{scss,css}' --fix",
    buildEslintCommand
  ],
};
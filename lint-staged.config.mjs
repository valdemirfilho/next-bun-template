/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
const config = {
  'src/**/*.{mjs,cjs,js,jsx,ts,tsx,json,css,scss}': ['npx prettier --check'],
  '*.{mjs,cjs,js,jsx,ts,tsx,json,css,scss}': ['npx prettier --check'],
};

export default config;

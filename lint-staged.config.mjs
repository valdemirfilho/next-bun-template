/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
const config = {
  'src/**/*.{mjs,cjs,js,jsx,ts,tsx,json}': ['npx prettier --check'],
  '*.{mjs,cjs,js,jsx,ts,tsx,json}': ['npx prettier --check'],
};

export default config;

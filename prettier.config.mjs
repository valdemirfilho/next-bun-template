/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  trailingComma: 'es5',
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'auto',
  printWidth: 80,
  plugins: [
    'prettier-plugin-organize-imports',
    'prettier-plugin-tailwindcss', // must come last
  ],
  tailwindStylesheet: './src/app/globals.css',
  tailwindFunctions: ['clsx', 'cn', 'twMerge', 'cva'],
  organizeImportsSkipDestructiveCodeActions: true,
};

export default config;

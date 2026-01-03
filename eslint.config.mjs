import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
// import { dirname } from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  eslintPluginPrettier,
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
    ],
  },
];

export default eslintConfig;

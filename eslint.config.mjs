import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

const eslintConfig = defineConfig([
  // 1. Load the Next.js configs directly
  ...nextVitals,
  ...nextTypescript,

  // 2. Global ignores (in Next 16, these should be in the array)
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "node_modules/**"
  ]),

  // 3. Add any custom rules here
  {
    rules: {
      // '@typescript-eslint/no-explicit-any': 'warn',
    }
  }
]);

export default eslintConfig;
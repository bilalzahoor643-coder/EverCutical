import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // Relax React 19 strict rules that are false positives for R3F/Three.js code
      "react-hooks/refs": "off",
      "react-hooks/purity": "off",
      "react-hooks/set-state-in-effect": "off",
      // Allow img tags (using next/image for everything is not always practical)
      "@next/next/no-img-element": "warn",
    },
  },
]);

export default eslintConfig;

import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

export default [
  {
    ignores: ["node_modules/**", ".next/**", "out/**"],
  },
  ...nextCoreWebVitals,
  {
    rules: {
      "react-hooks/purity": "off",
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/static-components": "off",
    },
  },
];

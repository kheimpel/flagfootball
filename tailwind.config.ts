import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#002B5C", light: "#0a3a6b" },
        gold: { DEFAULT: "#FFC72C", hover: "#e6b000" },
        bg: { DEFAULT: "#fafaf9", warm: "#f5f5f0" },
        muted: "#52525b",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;

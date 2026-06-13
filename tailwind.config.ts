import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        "spotlight-drift-1": {
          "0%, 100%": { transform: "translate(0%, 0%) scale(1)" },
          "25%": { transform: "translate(10%, -15%) scale(1.1)" },
          "50%": { transform: "translate(-5%, 10%) scale(0.95)" },
          "75%": { transform: "translate(-10%, -5%) scale(1.05)" },
        },
        "spotlight-drift-2": {
          "0%, 100%": { transform: "translate(0%, 0%) scale(1)" },
          "30%": { transform: "translate(-12%, 8%) scale(1.08)" },
          "60%": { transform: "translate(8%, -12%) scale(0.92)" },
          "80%": { transform: "translate(5%, 5%) scale(1.03)" },
        },
        "spotlight-drift-3": {
          "0%, 100%": { transform: "translate(0%, 0%) scale(1)" },
          "20%": { transform: "translate(15%, 10%) scale(0.98)" },
          "45%": { transform: "translate(-8%, -8%) scale(1.06)" },
          "70%": { transform: "translate(-3%, 12%) scale(0.94)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.85)" },
        },
      },
      animation: {
        "spotlight-1": "spotlight-drift-1 25s ease-in-out infinite",
        "spotlight-2": "spotlight-drift-2 30s ease-in-out infinite",
        "spotlight-3": "spotlight-drift-3 20s ease-in-out infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;

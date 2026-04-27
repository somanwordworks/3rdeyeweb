import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          deep: "#060E22",
          mid: "#0A1628",
          DEFAULT: "#0D1B3E",
        },
        cyan: {
          dim: "#007BAA",
          DEFAULT: "#00AEEF",
          bright: "#00D4FF",
        },
      },
      fontFamily: {
        head: ["Rajdhani", "sans-serif"],
        body: ["Exo 2", "sans-serif"],
        mono: ["Share Tech Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;

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
        primary: {
          main: "#120B48",
          dark: "#100A42",
          light: "#1B233D",
          grey: "#616163",
          black: "#141414",
        },
      },
    },
  },
  plugins: [],
};
export default config;

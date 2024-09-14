import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "custom-blue": "rgba(29, 78, 216, 0.15)",
      },
      colors: {
        customGray: "rgb(148 163 184 / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
export default config;

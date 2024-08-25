import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      "black": "#0f1416",
      "space-cadet": "#282d40",
      "davys-gray": "#4a495a",
      "taupe": "#83828b",
      "silver": "#bcbcbc",
      "salmon": "#fe433c",
      "watermelon": "#f31d64",
      "lilac": "#a224ad",
      "fusha": "#db1df3",
      "purple": "#6a38b3",
      "lavender": "#bdadff",
      "blue": "#3c5081",
      "light-blue": "#0095ef",
      "yellow": "#efca00",
      "teal": "#43c68b",
      "white": "#ffffff",
    }
  },
  plugins: [],
};
export default config;

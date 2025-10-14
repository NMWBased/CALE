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
        // Cores customizadas CALE
        primary: {
          50: "#f8f7f5",
          100: "#f1efea",
          200: "#e4e0d7",
          300: "#d1cbb8",
          400: "#b8af93",
          500: "#a39577", // Cor principal
          600: "#8a7a61",
          700: "#726350",
          800: "#5d5143",
          900: "#4c4237",
        },
        accent: {
          warm: "#d4b896",
          cool: "#9ca3af",
          dark: "#1f2937",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-playfair)"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.25rem", // aumentado para mais respiro lateral
          sm: "2.25rem",
          lg: "4.5rem",
          xl: "6rem",
          "2xl": "7rem",
        },
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
      },
    },
  },
  plugins: [],
};

export default config;

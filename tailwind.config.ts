import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#fbfbf8",
        ink: "#142334",
        muted: "#65717c",
        brand: {
          50: "#eef8fc",
          100: "#d9f0f8",
          300: "#78cde8",
          500: "#189fd0",
          600: "#087caf",
          700: "#076693",
          800: "#0a5276",
          900: "#0d4562"
        }
      },
      boxShadow: {
        soft: "0 18px 50px rgba(7, 102, 147, 0.08)",
      },
      letterSpacing: {
        display: "-0.04em",
      },
    },
  },
  plugins: [],
};

export default config;

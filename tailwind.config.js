/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { poppins: ["Poppins", "sans-serif"] },
      colors: {
        navy: { DEFAULT: "#0A2A66", light: "#0d3280", dark: "#071d47" },
        brand: { green: "#22C55E", greenDark: "#16a34a" },
      },
    },
  },
  plugins: [],
};

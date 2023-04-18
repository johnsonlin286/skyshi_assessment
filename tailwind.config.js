/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        card: "0px 6px 10px rgba(0, 0, 0, 0.1)",
      },
    },
    container: {
      center: true,
      screens: {
        xl: "1040px",
      },
      padding: "1.25rem",
    },
    colors: {
      light_blue: "#43C4E3",
      blue: "#16ABF8",
      dark100: "#111111",
      dark500: "#555555",
      red: "#ED4C5C",
      yellow: "#FFCE31",
      green: "#00A790",
      purple: "#B01AFF",
      white: "#FFFFFF",
      gray300: "#C7C7C7",
      gray400: "#f4f4f4",
      gray500: "#E5E5E5",
      gray800: "#888888",
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      main: "Noto Serif",
      play: "Playfair",
      mulish: "Mulish",
    },
    colors: {
      beige: "#F4F9F7",
      black: "#000000",
      secondaryBlack: "#121212",
      grayP: "#6A6A6A",
      borderGray: "#D0D0D0",
      textGray: "#3E3E3E",
      buttonGray: "#626262",
      white: "#fff",
      brown: "#271E23",
      borderBlack: "#333333",
    },
    fontSize: {
      xl: "48px",
      lg: "34px",
      md2: "20px",
      default: "16px",
      sm: "14px",
    },
    borderRadius: {
      round: "50%",
    },
  },
  plugins: [],
};

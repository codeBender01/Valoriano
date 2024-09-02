/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      main: "Noto Serif",
      play: "Playfair",
    },
    colors: {
      beige: "#F8F3E9",
      black: "#000000",
      grayP: "#6A6A6A",
      borderGray: "#D0D0D0",
      textGray: "#3E3E3E",
      buttonGray: "#626262",
      white: "#fff",
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

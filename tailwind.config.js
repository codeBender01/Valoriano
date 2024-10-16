/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      main: "Noto Serif",
      play: "Playfair",
      mulish: "Mulish",
      red: "Redhat",
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
      inputTextGray: "#808080",
      gold: "#E1AD00",
      silver: "#8C8C8C",
      paleGray: "#CFCFCF",
      grayHeaderMenu: "#A0A6B2",
    },
    fontSize: {
      xl: "48px",
      lg: "34px",
      md3: "24px",
      md2: "20px",
      md: "18px",
      default: "16px",
      sm: "14px",
    },
    breakpoints: {},
    borderRadius: {
      round: "50%",
    },
    animation: {
      "fade-in": "fadeIn 0.3s forwards",
      "fade-out": "fadeOut 0.3s forwards",
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
      fadeOut: {
        "0%": { opacity: "1" },
        "100%": { opacity: "0" },
      },
    },
  },
  plugins: [],
};

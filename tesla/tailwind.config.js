/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Orbitron",
      secondary: "Rajdhani",
      tertiary: "Aldrich",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
      xxl: "1700px",
    },
    extend: {
      colors: {
        lightBlack: "#171a20",
        lightWhite: "#f4f4f4",
        secondary: "#5c5e62",
        lightGray: "#aaabac",
        veryLightGray: "#f1f5f9",
      },
    },
  },
  plugins: [],
};

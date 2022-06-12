const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./comps/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bengasi: ["BengasiBold"],
        poppins: ["Poppins"],
        american: ["AmericanTypewritter"],
        blockLetter: ["blockLetter"],
      },
      screens: {
        xs: { min: "100px", max: "370px" },
        ...defaultTheme.screens,
      },
      colors: {
        itaewon: "#F59E0B",
        kland: "#14B8A6",
        mapalus: "#ffb600",
      },
    },
  },
  plugins: [],
};

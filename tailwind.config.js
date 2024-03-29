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
        lemon: ["LemonMilk"],
      },
      screens: {
        xs: "360px",
        ...defaultTheme.screens,
      },
      colors: {
        itaewon: "#F59E0B",
        kland: "#14B8A6",
        mapalus: "#FF9800",
      },
    },
  },
  plugins: [],
};

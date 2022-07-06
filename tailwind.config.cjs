/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [],
  theme: {
    extend: {
      fontSize: {
        "2xs": ["10px", "10px"],
      },
      colors: {
        primary: colors.blue,
        gray: colors.blueGray,
        "blue-gray": colors.blueGray,
      },
    },
  },
  plugins: [],
};

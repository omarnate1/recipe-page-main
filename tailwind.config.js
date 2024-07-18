/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        youngSerif: ['"Young Serif"', "serif"], // Note the quotes around "Young Serif"
      },
      fontWeight: {
        normal: 400,
        semibold: 600,
        bold: 700,
      },
      colors: {
        "rose-white": "#fff5fa",
        eggshell: "#f3e6d8",
        "light-grey": "#e4ded8",
        "wenge-brown": "#5f574e",
        "dark-charcoal": "#302d2c",
        nutmeg: "#854632",
        "dark-raspberry": "#7b284f",
      },
    },
  },
  plugins: [],
};

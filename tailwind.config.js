/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#363062",
        "primary-variant": "#4d4c7d",
        secondary: "#827397",
        "secondary-variant": "#e9d5ca",
        white: "#FFFFFF",
        black: "#000000",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        courgette: ["Courgette", "sans-serif"],
      },
    },
  },
  plugins: [],
};

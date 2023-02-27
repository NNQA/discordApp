/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        discord_blue: "#295DE7",
      }
    },
    fontFamily: {
      fontmain: ["Gajraj One", "cursive"],
      fonthearder: ['Shantell Sans', "cursive"]
    },
  },
  plugins: [],
}

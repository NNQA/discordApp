/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        discord_blue: "#295DE7",
        discord_server:"#34343c",
        discord_servers:"#201c24",
        discord_green:"#28a45c",
        discord_channels:"#302c34",
        discord_serverHover: "#38343c",
        dicord_channelsText:"#8c898b",
      }
    },
    fontFamily: {
      fontmain: ["Gajraj One", "cursive"],
      fonthearder: ['Shantell Sans', "cursive"]
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

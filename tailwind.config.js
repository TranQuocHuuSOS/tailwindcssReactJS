/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        barlow:['"Barlow Condened"', 'sans-serif']
      },
      colors:{
        primary:"#16405B"
      }
    },
  },
  plugins: [],
}
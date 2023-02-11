/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:  {
        inter: ['var(--font-inter)'],
        noto_sans_lepta: ['var(--font-noto)'],
        grifter: ['var(--font-grifter)']
      }
    },
  },
  plugins: [],
}

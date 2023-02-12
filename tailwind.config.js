/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  
    extend: {
      fontFamily:  {
        inter: ['var(--font-inter)'],
        noto: ['var(--font-noto)'],
        grifter: ['var(--font-grifter)'],
        lato: ['var(--font-lato)'],
        syne: ['var(--font-syne)'],
        poppins: ['var(--font-poppins)'],
        roboto: ['var(--font-roboto)'],
        space_grotesk: ['var(--font-space-grotesk)']
      },
      colors: {
        'ugc-blue': '#3E3E59',
        'black': {
          800: '#212121',
          900: '#121212'
        },
        'orange': '#FDE97E'
      }
    },
  },
  plugins: [],
}

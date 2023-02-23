/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        keyboard: ['keyboard'],
        origintech: ['OriginTech'],
      },
      dropShadow: {
        'card': '2px 3px 0 rgb(255, 255, 255)'
      },
      colors: {
        accent: '#11bba3'
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserratAlt: ['Montserrat Alternates', 'sans-serif'],
      },
      backgroundColor: {
        'black-one': '#121417',
        'black-shade': '#222',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        primary: "#474747",
        secondary: "#FFFFFF",
        brandOrange: "#DB4444",
        brandGrey: "#36363680",
        brandGreyy: "#000000CC",
        brandWhite: "#eeeeee",   
      },
      zIndex: {
        '100': '100',
      },
      backdropSepia: {
        25: '.25',
        75: '.75',
      }
    },
    container:{
      center:true,
      padding:{
        DEFAULT: '1rem',
        sm:'3rem',
      }
    }
  },
  plugins: ['tailwind-scrollbar'],
}




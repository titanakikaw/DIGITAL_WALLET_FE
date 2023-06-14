/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins'],
      },
      colors: {
        baseColor : "#FF9559",
        secondaryColor : "#FFD597",
        thirdColor: "#FEF6EA",
        fourthColor: "#EBA352",
        textColor: "#F18C1B",
        grayCustom: "#F8F8F8"
      }
    },
  },
  plugins: [],
}


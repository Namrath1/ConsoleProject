/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"],
  
  theme: {
    extend: {
      fontFamily: {
        HedvigLettersSans: ["Hedvig Letters Sans", "sans-serif"],
        SpaceGrotesk: ["Space Grotesk", "sans-serif"]
      },
    },
  },
  plugins: [],
}
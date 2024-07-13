/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'sm':'320px',
        'mobile':'450px',
        'md':'780px',
        'lg':'1024px',
        'xl':'1440px'
      },
      fontFamily:{
        'body':['opensans', 'sans-serif'],
        'heading':['poppins','sans-serif']
      }
    },
  },
  plugins: [],
}
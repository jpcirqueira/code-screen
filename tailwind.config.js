/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'background': '#2A2141',
        'medium': '#E1E1E6',
        'light': '#C4C4CC'
      },
    },
  },
  plugins: [],
}
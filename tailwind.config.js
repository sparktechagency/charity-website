/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1B2324', 
      },
      backgroundColor: {
        "btnColor": "#403730",
      },
      fontFamily: {
        roboto: ["Roboto", "serif"],
        kindsans: ['"Kind Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

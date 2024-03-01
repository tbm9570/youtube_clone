/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
        Kdam_Thmor: ["Kdam Thmor Pro", "sans-serif"],
      }, //end of fontFamily
      colors: {
        primary: "#100f0f",
        secondary: "#FB1507",
        // ...
      },
    },
  },
  plugins: [],
};

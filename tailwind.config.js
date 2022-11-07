/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'hero': ['ui-sans-serif', 'Impact'],
    },
    extend: {
      backgroundImage: {
        'bg': "url('../public/images/bg-mountains.jpg')",
      }
    },
  },
  plugins: [],
};

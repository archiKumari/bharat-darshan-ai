/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'festival-radial': 'radial-gradient(circle at center, #1f2937 0%, #000000 80%)',
        'nature': "url('/src/assets/natureBackground.png')",
        'parchment': "url('/src/assets/parchment.png')"
      },
      fontFamily: {
        'eaglelake': ['Eagle Lake', 'serif'],
        'quintessential': ['Quintessential','serif'],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

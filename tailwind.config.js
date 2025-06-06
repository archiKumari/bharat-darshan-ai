/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'festival-radial': 'radial-gradient(circle at center, #1f2937 0%, #000000 80%)',
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

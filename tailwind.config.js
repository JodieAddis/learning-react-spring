/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        tanjiroCard: "url('/img/tanjiro.jpg')",
        muzanCard: "url('/img/muzan.jpg')",
      },
    },
  },
  plugins: [],
};

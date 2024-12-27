/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        trapezoid: "polygon(0 0, 100% 0, 70% 100%, 0% 100%)",
      },
    },
  },
  plugins: [],
}


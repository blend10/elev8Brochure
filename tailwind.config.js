/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
        impact: ['Impact', 'sans-serif'],
        arial: ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

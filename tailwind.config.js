/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'commissioner': ['Commissioner', 'sans-serif']
      },
      colors: {
        'light-cyan': 'hsl(176, 50%, 47%)',
        'dark-cyan': 'hsl(176, 72%, 28%)',
        'black': 'hsl(0, 0%, 0%)',
        'dark-gray': 'hsl(0, 0%, 48%)'
      }
    },
  },
  plugins: [],
}
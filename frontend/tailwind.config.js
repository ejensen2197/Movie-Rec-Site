/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        letterboxd: {
          background: '#14181c',
          footer: '#2c3440',
          footText: '#9ab',
          accent: '#00C030',
          header: '#1A1A1A',
          text: '#FFFFFF',
          secondaryText: '#CCCCCC',
          hover: '#FF8000',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


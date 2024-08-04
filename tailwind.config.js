/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#161622',
        secondary: {
          DEFAULT: '#FF4400',
          100: '#FF9001',
          200: '#FF8E01',
        },
        black: {
          DEFAULT: '#000',
          100: '#1E1E2D',
          200: '#232533',
        },
        gray: {
          100: '#CDCDE0',
        },
      },
      fontFamily: {
        bregular: ['Benzin-Regular', 'sans-serif'],
        bmedium: ['Benzin-Medium', 'sans-serif'],
        bsemibold: ['Benzin-SemiBold', 'sans-serif'],
        bbold: ['Benzin-Bold', 'sans-serif'],
        bextrabold: ['Benzin-ExtraBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

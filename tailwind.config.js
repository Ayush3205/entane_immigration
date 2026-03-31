/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
      },
      transitionDuration: {
        '400': '400ms',
      },
      colors: {
        primary: '#00352B',
        accent: '#FF3300',
        cream: '#FFFBE9',
        'secondary-dark': '#323232',
        'text-dark': 'rgba(0, 0, 0, 0.75)',
        'text-light': 'rgba(0, 0, 0, 0.6)',
        'text-gray': 'rgba(0, 0, 0, 0.5)',
        white: '#FFFFFF',
        'border-color': 'rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        'inter-display': ['Inter Display', 'sans-serif'],
      },
      spacing: {
        'section-gap': '100px',
      },
    },
  },
  plugins: [],
}


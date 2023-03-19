/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        product: {
          'red-dark': '#B2122C',
          red: '#DC1637',
          'red-light': '#FDEDEF',
          'green-dark': '#038A3F',
          green: '#03B252',
          'green-light': '#DAF3E5',
        },
        base: {
          title: '#47474D',
          text: '#7A7A80',
          secondary: '#EBEBF0',
          main : '#F4F5F6',
          hover: '#F4F5F6',
          gray: '#DEDEE3',
          background: '#E5E5E5',
          black: '#1B1B1F',
          white: '#FFFFFF',
          'text-red': '#FF99AA',
          'text-details': '#AEAEB3',
        },
        black: {
          300: '#29292E',
          500: '#1B1B1F',
          700: '#050505'
        },

        
      },
    },
  },
  plugins: [],
}

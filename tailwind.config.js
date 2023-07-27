/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      ...defaultTheme.colors,
      transparent: 'transparent',
      dark: {
        text: '#197278',
      },
      primary: {
        DEFAULT: '#618B25',
        hover: '#8DFF99'
      },
      secondary: '#8DFF99',
      menu: '#1446A0',
      submenu: '#ADFFFF',
      white: '#FFFFFF',
      black: '#000000',
      red: '#FF5555',
      blue: {
        lightest: '#ADFFFF',
        light: '#7692FF',
        DEFAULT: '#5555FF',
        dark: '#1446A0',
        darkest: '#0F1108'
      },
      green: '#55FF55',
      background: {
        DEFAULT: '#EBFFFF',
        dark: '#011627'
      },
      accent: {
        light: '#7692FF',
        DEFAULT: '#1446A0',
        dark: '#003049',
      },
      // TYPES
      bug: '#5cea54',
      dark: '#664b2d',
      dragon: '#633b97',
      electric: '#e9d419',
      fairy: '#eda8e4',
      fight: '#954040',
      fire: '#ff0000',
      flying: '#9590dd',
      ghost: '#6927dc',
      grass: '#62e862',
      ground: '#bfb54a',
      ice: '#54d6dd',
      normal: '#959494',
      poison: '#930493',
      psychic: '#e634e6',
      rock: '#deb887',
      steel: '#9989bd',
      water: '#3c6be2'
    },
    screens: {
      sm: '480px',
      md: '600px',
      lg: '976px',
      xl: '1440px',
    },
    minWidth: {
      '1/2': '50%',
      '40': '40%',
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [],
}


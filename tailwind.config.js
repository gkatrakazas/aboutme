module.exports = {
  purge: ['./index.html', './app.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'customBlack': '#2c3133',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

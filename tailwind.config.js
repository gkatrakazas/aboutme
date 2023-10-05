module.exports = {
  purge: ['./**/*.html', './**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['DejaVu Sans', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        'customBlack': '#2c3133',
        'header-white':'#eff0f1',
        'body-white':'#efefef',
        'menu':'#2e3337',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

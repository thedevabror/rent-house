module.exports = {
  content: [
    './src/**/*.{html,js,jsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('./assets/home-bg.png')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily: {
        custom: ['"DM Sans"', "sans-serif"],
        inter: ['"Inter"', "sans-serif"]
      }
    },
  },
  plugins: [],
}
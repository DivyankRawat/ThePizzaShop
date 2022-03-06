module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      nunito: ['Poppins'],
      mont: ['Montserrat'],
      noto: ['Noto Sans'],
      lobster: ['Lobster']
    },
    backgroundColor: {
      blackOverlay: 'rgba(0, 0 ,0 ,0.4)',
      yellow: 'rgba(255, 240, 0)',
      darkYellow: 'rgba(245, 230, 83)',
      fadeWhite: 'rgb(242,243,244)',
      lightGreen: 'rgb(144,238,144)',
      lightRed: 'rgb(255,0,0, 0.6)',
      white: 'rgb(255,255,255)',
      darkGery: 'rgb(38,38,38)'
    },
    height: {
      '6': '2rem',
      '12': '4rem',
      '48': '24rem',
      '96': '30rem',
      '128': '40rem',
    },
    maxHeight: {
      '128': '40rem',
    },
    inset: {
      '18': '75px',
    },
    margin: {
      '138': '52rem',
      '142': '52rem',
      '128': '40rem',
      '96': '27rem',
      '60': '22rem',
      '48': '16rem',
      '47': '15rem',
      '24': '8rem',
      '18': '6rem',
      '12': '4rem',
      '6': '2rem',
      '2': '1rem',
    },
    extend: {},
  },
  plugins: [],
}
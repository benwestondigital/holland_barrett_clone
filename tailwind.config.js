module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: { hbgreen: '#00594c', hbred: '#f7403a', hblightred: '#ffb7ae' },
    },
    container: {
      center: true,
      screens: {
        '2xl': '1220px',
      },
    },
    fontFamily: {
      sans: ['Helvetica, sans-serif'],
    },
  },
  plugins:[
    require('@tailwindcss/forms'),
  ]
};

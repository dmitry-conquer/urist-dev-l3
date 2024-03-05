module.exports = {
  content: ["./src/scss/**/*.scss", "./src/**/*.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1232px",
    },
    extend: {
      fontSize: {
      },
      colors: {
        'primary': {
          DEFAULT: '#FFB92D'
        },
        'secondary': {
          DEFAULT: '#00293E'
        },
        'typo': {
          DEFAULT: '#01476A',
        }
      }
    },
    fontFamily: {
      opensans: ["Open Sans", "sans-serif"],
    },
  },
};
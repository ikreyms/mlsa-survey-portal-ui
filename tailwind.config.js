module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      // fontFamily: {
      //   sans: ["Roboto", "sans-serif"],
      //   display: ["Poppins", "sans-serif"],
      // },
      colors: {
        primary: "#1B5C5B",
        "primary-dark": "#113B3B",
        "primary-light": "#7BB1B0",
        // secondary: "#2A2AB2",
        // "secondary-dark": "#1D1D81",
        // "secondary-light": "#4949D0",
        "black-900": "#202020",
        "black-900": "#202020",
        "black-800": "#3E3E3E",
        "black-700": "#535353",
        "white-950": "#D9D9D9",
        "white-900": "#E8E8E8",
        "white-800": "#F0F0F0",
        "white-700": "#F2F2F2",
        // "footer-heading": "#1D1D1F",
        // "footer-active-link": "#424245",
        // "footer-link": "#6E6E73",
        // "footer-border": "#86868B",
        // "footer-bg": "#F5F5F7",
        // body: "#FEFEFE",
        // success: "rgb(22,163,74)",
        // error: "rgb(239,68,68)",
        // info: "rgb(79,70,229)",
        // warning: "rgb(249,115,22)",
      },
    },
    screens: {
      sm: "400px",
      "2sm": "500px",
      md: "810px",
      "2md": "1024px",
      lg: "1366px",
      xl: "1440px",
      "2xl": "1900px",
    },
  },
  plugins: [],
};
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00B4D8",
          darken: "#0095B2",
        },
        secondary: "#ADE8F4",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(200px, 1fr))",
      },
    },
    fontFamily: {
      mont: ["Montserrat", "sans-serif"],
      dm: ["DM Sans", "sans-serif"],
      manr: ["Manrope", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

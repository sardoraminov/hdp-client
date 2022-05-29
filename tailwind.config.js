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
        primary: "#00B4D8",
        secondary: "#ADE8F4",
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

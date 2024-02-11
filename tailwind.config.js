module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: "#141425",
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        satoshiBold: ["Satoshi-Bold", "sans-serif"],
        satoshiLight: ["Satoshi-Light", "sans-serif"],
        satoshiMedium: ["Satoshi-Medium", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

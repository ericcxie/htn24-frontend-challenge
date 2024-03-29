module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        background: "#141425",
        primary: "#C4CDCF",
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

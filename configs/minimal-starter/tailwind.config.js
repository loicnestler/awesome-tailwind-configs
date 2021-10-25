const colors = require("tailwindcss/colors")

module.exports = {
   mode: "jit",
   purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
   darkMode: false,
   theme: {
      extend: {
         colors: {
            primary: colors.purple,
            gray: colors.trueGray,
         },
         fontFamily: {
            inter: ["Inter", "system-ui", "sans-serif"],
            "bebas-neue": ["Bebas Neue", "sans-serif"],
            "dm-sans": ["DM Sans", "sans-serif"],
         },
      },
      container: {
         center: true,
         padding: {
            DEFAULT: "1rem",
         },
      },
   },
   variants: {},
   plugins: [require("@tailwindcss/aspect-ratio")],
}

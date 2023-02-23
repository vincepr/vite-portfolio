/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        blue: "#2CBCE9",
        red: "#DC4492",
        yellow: "#FDCC49",
        grey: "#EDEDED",
        "deep-blue": "#010026",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.25)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow": "linear-gradient(81.66deg, #00B5EE 45.05%, #FFBA00 78.07%)",
        "gradient-rainblue": "linear-gradient(90deg, #24CBFF 14.53%, #FFBD0C 107.73%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        brush: 'url("./assets/brush.png")',
        person1: 'url("./assets/person-1.png")',
        person2: 'url("./assets/person-2.png")',
        person3: 'url("./assets/person-3.png")',
      },
    },
    /** with this we can target specific screen sizes with our tailwind inline
     * like md:mt-0 ->for a 0 margin-top for big screen sizes.
     */
    screens: {
      xs: "480px",
      sm: "760px",
      md: "1060px",
    },
  },
  plugins: [],
}
module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          100: "#f4f4f2",
          300: "#dedede",
          700: "#575757",
          "300_01": "#e3e4e6",
          "100_03": "#f2f2f2",
          "100_02": "#f4f5f5",
          "100_01": "#f4f5f6",
          "700_01": "#666a70",
        },
        blue_gray: { 50: "#eeeff0", 900: "#1a154c" },
        light_blue: {
          600: "#1296d9",
          800: "#0066b3",
          900: "#0864a9",
          "800_01": "#0983c2",
        },
        black: { "900_3f": "#0000003f" },
        indigo: {
          500: "#3363b0",
          800: "#224886",
          900: "#1d3571",
          "800_01": "#21409a",
        },
        white: { A700: "#ffffff" },
        cyan: { 400: "#12bde6" },
      },
      backgroundImage: { gradient: "radial-gradient(#0066b3,#1d3571)" },
      fontFamily: { dhyana: "Dhyana" },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

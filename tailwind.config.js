/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "xxxl-64": ["64px", "84px"],
        "xxl-48": ["48px", "72px"],
        "xl-36": ["36px", "56px"],
        "l-28": ["28px", "48px"],
        "m-24": ["24px", "36px"],
        "s-20": ["20px", "32px"],
        "xs-16": ["16px", "28px"],
      },
      fontFamily: {
        heading: ["Manrope", "sans-serif"],
        paragraph: ["Open Sans", "sans-serif"],
      },

      colors: {
        lightBlue: "#0DBBFC",
        green: "#65E4A3",
        otherGreen: "#69E6A6",
        lightGrey: "#F1F1F1",
        darkBlue: "#0A2640",
        greyBlue: "#6A7BA2",
        white: "#FFFFFF",
        gray: "#808080",
      },
      animation: {
        "loop-scroll": "loop-scroll 25s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(-100%)",
          },
        },
      },
    },
  },
  plugins: [],
};

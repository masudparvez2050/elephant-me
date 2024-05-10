/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#0a121f",
          200: "rgba(10, 18, 31, 0.19)",
        },
        white: "#fff",
        darkslategray: {
          100: "#1a2c49",
          200: "rgba(26, 44, 73, 0.29)",
        },
        lightslategray: "#83899e",
        deepskyblue: "#36a9f3",
        slategray: "#4d5e7d",
        cornflowerblue: "#1c8fd9",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        roboto: "Roboto",
        "jan-brady": "'Jan Brady'",
      },
      borderRadius: {
        "3xl": "22px",
        "5xs-8": "7.8px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      "12xl": "31px",
      "6xl": "25px",
      lgi: "19px",
      "9xl": "28px",
      "3xl": "22px",
      "33xl": "52px",
      "23xl": "42px",
      "7xl": "26px",
      "2xl": "21px",
      lg: "18px",
      "126xl-7": "145.7px",
      "39xl": "58px",
      "17xl": "36px",
      "29xl-2": "48.2px",
      "20xl": "39px",
      "10xl": "29px",
      inherit: "inherit",
    },
    // screens: {
    //   mq1350: {
    //     raw: "screen and (max-width: 1350px)",
    //   },
    //   mq1150: {
    //     raw: "screen and (max-width: 1150px)",
    //   },
    //   mq800: {
    //     raw: "screen and (max-width: 800px)",
    //   },
    //   mq450: {
    //     raw: "screen and (max-width: 450px)",
    //   },
    // },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};

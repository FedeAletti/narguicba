import type {Config} from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        titles: ["var(--my-font)"],
      },
      backgroundColor: {
        primary: "#180129",
      },
      textColor: {
        primary: "#180129",
      },
      keyframes: {
        autoCarousel: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {transform: "translateX(calc(-250px * 7))"},
        },
      },
      animation: {
        textCarousel: "autoCarousel 30s linear infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};

export default config;

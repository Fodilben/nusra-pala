/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        myLight: {
          primary: "#F79122",
          secondary: "#000000",
          "base-100": "#FFFFFF",
          "primary-content": "#8F8F8F",
        },
        myDark: {
          primary: "#F79122",
          secondary: "#FFFFFF",
          "base-100": "#494845",
          "primary-content": "#F4F4F4",
        },
      },
      "light",
      "dark",
    ],
  },

  plugins: [require("daisyui")],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        primary: "#F79122",
        secondary: "#ffc107",
        "primary-content": "#8F8F8F",
        // ... add more colors
      },
    },
  },

  plugins: [require("daisyui")],
};

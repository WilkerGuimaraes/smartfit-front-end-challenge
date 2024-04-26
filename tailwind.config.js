/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "gotham-black": ["Gotham Black", "sans-serif"],
        "gotham-bold": ["Gotham Bold", "sans-serif"],
        "gotham-book": ["Gotham Book", "sans-serif"],
        "gotham-light": ["Gotham Light", "sans-serif"],
      },
      colors: {
        "dark-grey": "#333333",
        "light-grey": "#808080",
        yellow: "#FFB612",
        red: "#dc0a17",
        green: "#2FC022",
      },
    },
  },
  plugins: [import("@tailwindcss/typography")],
};

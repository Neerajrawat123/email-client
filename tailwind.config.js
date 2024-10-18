/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        acnt: "#E50465",
        bg: "#F4F5F9",
        brdr: "#CFD2DC",
        txt: "#636363",
        "filter-button": "#E1E4EA",
        "read-bg": "#F2F2F2",
      },
    },
  },
  plugins: [],
};

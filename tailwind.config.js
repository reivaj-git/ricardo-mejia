/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      colors: {
        dark: "#212121",
        darkSecundary: "#323232",
        primary: "#A24693",
        secundary: "#4E187A",
        enfasis: "#C64396",
        text: "#ffffff",
      },
    },
  },
  plugins: [],
};


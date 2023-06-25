/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif", "Roboto", "Arial"],
      },
      colors: {
        "code-horizon-blue": "#56B9C0",
        "code-black": "#2F2F32",
        "code-dark-blue": "#0B425E",
      },
    },
  },
  plugins: [],
};

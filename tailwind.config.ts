/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "375px",
      tablet: "768px",
      1024: "1024px",
      desktop: "1440px",
    },
    extend: {
      colors: {
        one: "#f3603c",
        two: "#242d52",
        three: "#1d1e25",
        four: "#fffoec",
      },
    },
    fontFamily: {
      Vietnam: ["Be Vietnam Pro", "sans-serif"],
    },
  },
  plugins: [],
};

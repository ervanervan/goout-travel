/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bgWhite": "#FFFFFF",
        "bgNavy": "#232631",
        "bgGray": "#FAFAFA",
        "bgPrimary": "#3258E8",
        "bgDarkGray": "#E4E9F9",
        "textPrimary": "#466BF3",
        "textGray": "#9C9C9C",
        "textNavy": "#232631",
        "textSecondary": "#7B7B7B",
        "textWhite": "#FFFFFF",
      }
    },
  },
  plugins: [],
}


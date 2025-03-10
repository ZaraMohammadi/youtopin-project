/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,js,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "md-custom": { min: "640px" },
        "lg-custom": { min: "1024px" },
        "2xl-custom":{ min: "1280px" },
      },
      fontFamily: {
        kalameh: ["KalamehWebFaNum-Bold", "sans-serif"],
        iransanseRegular: ["IRANSansX-Regular", "sans-serif"],
        iransanseMedium: ["IRANSansXFaNum-Medium", "sans-serif"],
        iransanseBold: ["IRANSansXFaNum-Bold", "sans-serif"]
      },
      colors: {
        colorBase: ["#403F3F"]
      },
      letterSpacing: {
        letterSpaseCustom: '0.3px',
      },
    },
  },
  plugins: [],
}


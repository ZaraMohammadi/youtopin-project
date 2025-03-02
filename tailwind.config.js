/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "sm-custom": { max: "640px" },
        "md-custom": { min: "640px", max: "1023px" },
        "lg-custom": { min: "1024px" },
      },
    },
  },
  plugins: [],
};
// export default {
// };

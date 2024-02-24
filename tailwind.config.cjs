/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", , 'sans-serif'],
      },
      backgroundImage:{
        'skillsBg':"url('/assets/skills_bg.jpg')",
        'contactBg':"url('/assets/globe.jpg')"
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "halloween"],
  },
};

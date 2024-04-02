import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#069eb6",
        secondary: '#122c4f',
        grey_light:"#d9d9d9"
      }, 
      backgroundImage: {
        'imagen': "url('/images/headerBg.jpg')"
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
        'sans-serif': ['Arial'],
        'lato': ['Lato'],
        'garamond': ['Garamond']
    }
    },
  },
  plugins: [],
};
export default config;

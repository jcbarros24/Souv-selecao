import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark-purple': '#290742',
        'custom-light-purple': '#9E6DC2',
        'custom-green-color': '#4FFF4B',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: ['Poppins'],
        roboto: ['Roboto']
      }
    },
  },
  plugins: [],
};
export default config;

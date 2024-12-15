import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        hover: "#294DDA",
        primary: "#294DDA",
        button: {
          DEFAULT: '#294DDA', 
          hover: '#1E1E1E', 
          border: '#353535'
        },
      },
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'], 
        poppins: ['Poppins', 'sans-serif'], 
      },
    },
  },
  plugins: [],
} satisfies Config;

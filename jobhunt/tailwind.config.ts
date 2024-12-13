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
        button: {
          DEFAULT: '#294DDA', 
          hover: '#1E1E1E', 
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

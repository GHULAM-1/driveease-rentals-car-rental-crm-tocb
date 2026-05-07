import { defineConfig } from 'tailwindcss';

export default defineConfig({
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          accent: '#10B981' // emerald-500
        }
      }
    }
  }
});
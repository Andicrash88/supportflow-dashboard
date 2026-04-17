/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#edf7f3",
          100: "#d2ebe1",
          200: "#a6d7c4",
          300: "#73bc9f",
          400: "#4a9f80",
          500: "#357f65",
          600: "#296652",
          700: "#245143",
          800: "#214138",
          900: "#1e362f",
        },
        ink: {
          950: "#081018",
        },
      },
      boxShadow: {
        panel: "0 12px 30px rgba(8, 16, 24, 0.08)",
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at top, rgba(53, 127, 101, 0.18), transparent 32%), linear-gradient(rgba(8, 16, 24, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(8, 16, 24, 0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        "hero-grid": "100% 100%, 32px 32px, 32px 32px",
      },
      fontFamily: {
        sans: ["Segoe UI", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

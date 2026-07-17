/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#0969DA",
          800: "#0550AE",
          900: "#1D4ED8",
        },
        ink: {
          950: "#0B0E14",
        },
      },
      boxShadow: {
        panel: "0 10px 24px rgba(15, 23, 42, 0.06)",
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

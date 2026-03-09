/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],

  theme: {

    /* Breakpoints */
    screens: {
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px",
      "2xl": "1236px"
    },

    /* Container settings */
    container: {
      center: true,
      padding: {
            DEFAULT:"12px",
            md:"32px"
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1400px"
      }
    },

    /* Fonts */
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Georgia", "serif"],
      mono: ["Courier New", "monospace"]
    },

    extend: {
      colors: {
        primary: "#1e40af",
        secondary: "yellow",
        accent: "#10b981",
        tertiary
      }
    }

  },

  plugins: []
}
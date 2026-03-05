/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1024px",
        xl: "1200px",
        "2xl": "1280px",
      },
    },

    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        primary: "#4F46E5",
        primaryHover: "#4338CA",

        secondary: "#F59E0B",

        danger: "#EF4444",
        success: "#22C55E",

        grayDark: "#111827",
        gray: "#6B7280",
        grayLight: "#D1D5DB",

        background: "#F9FAFB",
      },

      boxShadow: {
        card: "0 10px 25px rgba(0,0,0,0.05)",
      },

      borderRadius: {
        xl: "14px",
        "2xl": "20px",
      },
    },
  },

  plugins: [],
}

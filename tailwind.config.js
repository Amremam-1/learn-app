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

        grayBgLight: "#F1F5F9",
        grayLabel: "#334155",
        iconGray: "#94A3B8",

        brandBlue: "#0E2D6B",
        bgLightBlue: "#EAF2FD",

        background: "#F9FAFB",
        bgLight: "#F8FAFC",

        borderInput: "#CBD5E1",
        borderCard: "#E2E8F0",
        textMuted: "#64748B",

        bdColor: "#E2E8F0",
        textCo: "#0F172A",
        desc: "#475569",
      },
    },
  },

  plugins: [],
};
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
        // Primary color palette (indigo-based)
        primary: "#4F46E5", // Main primary color (buttons, links, focus rings)
        primaryHover: "#4338CA", // Primary hover state
        primaryLight: "#EEF2FF", // Light primary background (cards, highlights)

        // Secondary/accent color (amber/yellow)
        secondary: "#F59E0B", // Secondary accent color
        secondaryLight: "#FEF3C7", // Light secondary for highlights

        // Brand blue - used for hover borders and decorative elements
        brandBlue: "#2F80ED", // Brand blue from design
        brandBlueLight: "#EEF6FF", // Light tint for subtle backgrounds

        // Semantic colors
        danger: "#EF4444", // Error states, destructive actions
        success: "#22C55E", // Success states, confirmations

        // Gray scale - used throughout the UI
        grayDark: "#111827", // Headings, primary text (gray-900)
        grayMedium: "#374151", // Secondary text, labels (gray-700)
        gray: "#6B7280", // Muted text, placeholders (gray-500)
        grayMuted: "#9CA3AF", // Icons, disabled text (gray-400)
        grayLight: "#D1D5DB", // Borders, dividers (gray-300)
        grayBorder: "#E5E7EB", // Light borders (gray-200)
        grayBorderLight: "#F3F4F6", // Subtle borders (gray-100)
        background: "#F9FAFB", // Page background (gray-50)
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
};

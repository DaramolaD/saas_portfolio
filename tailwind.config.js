/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "bg1": {
          light: "#EAEAEB",
          lightHover: "#E0E0E0",
          active: "#BEBEBF",
          normal: "#2D2E32",
          normalHover: "#29292D",
          normalActive: "#242528",
          dark: "#222326",
          darkHover: "#1B1C1E",
          darkActive: "#141516",
          darker: "#101012",
        },
        "bg2": {
          100: "#25262A",
          200: "#282828",
          300: "#e7e7e800",
          320: "rgb(231 231 232 / 18%)",
          400: "rgba(120, 117, 118, 0.28)"
        },
        "white": "#FFFFFF",
        "white71": "rgba(255, 255, 255, 0.71)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#64F4AC",
          light: "#F0FEF70",
          lightHover: "#E8FDF3",
          lightActive: "#CFFCE5",
          normal: "#64F4AC",
          normalHover: "#5ADC9B",
          normalActive: "#50C38A",
          dark: "#4BB781",
          darkHover: "#3C9267",
          darkActive: "#2D6E4D",
          darkDarker: "#23553C",
          outline: "rgba(100, 244, 172, 0.03)",
          foreground: "hsl(var(--primary-foreground))",
          nav: "#64f4accc"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
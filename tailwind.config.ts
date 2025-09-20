import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Black & Yellow brand palette
        brand: {
          DEFAULT: "#FFC107", // warm golden yellow (primary accent)
          50: "#FFF8E1",
          100: "#FFECB3",
          200: "#FFE082",
          300: "#FFD54F",
          400: "#FFCA28",
          500: "#FFC107",
          600: "#FFB300",
          700: "#FFA000",
          800: "#FF8F00",
          900: "#FF6F00",
          dark: "#FFB300",
        },
        // Secondary accent can use a slightly different yellow for variation
        accent: "#FFCC00",
        support: "#14B8A6",
        // Neutrals: deep blacks and soft lights for readability
        neutral: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
          950: "#0D0D0D",
        },
        headerBG: "#231E1D",
        blackContrast: "#231E1D",
        // Semantic aliases (single source of truth consumers should use)
        // Typography / foreground
        ink: "#0D0D0D", // deep black for headings / primary text
        body: "#2C2C2C", // secondary dark gray
        text: {
          primary: "#0D0D0D", // neutral.950
          secondary: "#2C2C2C", // charcoal
          muted: "#6B7280", // neutral.500
          subtle: "#9CA3AF", // neutral.400
          inverted: "#FAFBFC", // on black surfaces
        },
        // Background layers
        background: {
          canvas: "#F9FAFB", // light for body sections
          subtle: "#F3F4F6", // light gray
          surface: "#FFFFFF", // elevated surface
          elevated: "#FFFFFF",
          inverted: "#0D0D0D", // deep black for headers/footers
        },
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#F9FAFB",
          subtle: "#F3F4F6",
          inverted: "#0D0D0D",
        },
        // Border tokens
        border: {
          DEFAULT: "#E5E7EB", // neutral.200
          subtle: "#E5E7EB",
          strong: "#D1D5DB", // neutral.300
          focus: "#FFC107",
        },
        // Feedback / status
        success: "#16A34A",
        warning: "#F59E0B",
        error: "#DC2626",
        info: "#0EA5E9",
        // Primary brand (legacy compatibility): map to brand yellow
        primary: {
          DEFAULT: "#FFC107",
          50: "#FFF8E1",
          100: "#FFECB3",
          200: "#FFE082",
          300: "#FFD54F",
          400: "#FFCA28",
          500: "#FFC107",
          600: "#FFB300",
          700: "#FFA000",
          800: "#FF8F00",
          900: "#FF6F00",
        },
        "text-primary": "#0D0D0D", // legacy alias
      },
      fontFamily: {
        heading: ["var(--font-ubuntu)", "Ubuntu", "system-ui", "sans-serif"],
        body: ["var(--font-nunito)", "Nunito", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Typography scale from STYLE.md
        h1: ["48px", { lineHeight: "56px", letterSpacing: "-0.5px", fontWeight: "700" }],
        h2: ["36px", { lineHeight: "44px", letterSpacing: "-0.25px", fontWeight: "700" }],
        h3: ["28px", { lineHeight: "36px", fontWeight: "700" }],
        h4: ["22px", { lineHeight: "30px", fontWeight: "600" }],
        "body-l": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-m": ["16px", { lineHeight: "26px", fontWeight: "400" }],
        "body-s": ["14px", { lineHeight: "22px", fontWeight: "400" }],
        "ui-meta": ["12px", { lineHeight: "16px", fontWeight: "600", letterSpacing: "0.6px" }],
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        pill: "9999px",
      },
      boxShadow: {
        xs: "0 1px 2px rgba(0,0,0,0.06)",
        sm: "0 2px 6px rgba(0,0,0,0.08)",
        md: "0 6px 18px rgba(0,0,0,0.10)",
        lg: "0 12px 32px rgba(0,0,0,0.12)",
      },
      spacing: {
        "1": "4px", // 4px base
        "2": "8px", // 8px
        "3": "12px", // 12px
        "4": "16px", // 16px
        "5": "20px", // 20px
        "6": "24px", // 24px
        "8": "32px", // 32px
        "10": "40px", // 40px
        "12": "48px", // 48px
        "16": "64px", // 64px
        "20": "80px", // 80px
        "24": "96px", // 96px
        "18": "4.5rem",
        "22": "5.5rem",
      },
      backgroundImage: {
        // Gradients – yellow highlights on dark neutrals
        "brand-gradient": "linear-gradient(135deg, #FFCC00 0%, #FFC107 60%, #FFB300 100%)",
        "brand-bright": "linear-gradient(135deg, #FFF1B8 0%, #FFCC00 40%, #FFC107 100%)",
        "brand-radial": "radial-gradient(circle at 30% 30%, #FFE082 0%, #FFC107 50%, #FFB300 100%)",
        "performance-gradient": "linear-gradient(135deg, #111827 0%, #2C2C2C 50%, #FFC107 100%)",
        "action-gradient": "linear-gradient(135deg, #0D0D0D 0%, #111827 50%, #FFCC00 100%)",
        // Neutral / dark gradients
        "gray-steel": "linear-gradient(135deg, #F9FAFB 0%, #D1D5DB 45%, #4B5563 100%)",
        "gray-smoke": "linear-gradient(135deg, #FFFFFF 0%, #E5E7EB 50%, #D1D5DB 100%)",
        "dark-carbon": "linear-gradient(135deg, #1A1A1A 0%, #0D0D0D 60%, #000000 100%)",
        "dark-vignette":
          "radial-gradient(circle at 50% 40%, #2C2C2C 0%, #0D0D0D 70%, #000000 100%)",
      },
      transitionTimingFunction: {
        standard: "cubic-bezier(0.2, 0.8, 0.2, 1)",
      },
      transitionDuration: {
        fast: "150ms",
        med: "250ms",
        slow: "400ms",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.8s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

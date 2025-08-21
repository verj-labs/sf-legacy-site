import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Updated Professional Palette (Automotive Theme)
        // Blues (brand / accent primary)
        brand: {
          DEFAULT: '#1F60E8',
          50: '#EEF4FF',
          100: '#DBE7FE',
          200: '#BFD4FE',
          300: '#94B5FD',
          400: '#6293FA',
          500: '#3570F6',
          600: '#1F60E8',
          700: '#184BC2',
          800: '#143D9B',
          900: '#112F75',
          dark: '#143D9B'
        },
        // Accent colors that may remain (orange + teal) if still used in UI pieces
        accent: '#FF6B2C',
        support: '#14B8A6',
        // Off-black / neutral scale (not pure #000) for typography & surfaces
        neutral: {
          50: '#F7F9FA',
          100: '#EDF1F4',
          200: '#E1E6EB',
          300: '#C9D0D6',
          400: '#9DA7B1',
          500: '#6F7A85',
          600: '#4B5560',
          700: '#323942',
          800: '#1E242B',
          900: '#14181D',
          950: '#0D1013'
        },
        // Semantic aliases (single source of truth consumers should use)
        // Typography / foreground
        ink: '#14181D',          // primary text (neutral.900)
        body: '#323942',         // secondary text (neutral.700)
        text: {
          primary: '#14181D',    // neutral.900
          secondary: '#323942',  // neutral.700
          muted: '#6F7A85',      // neutral.500
          subtle: '#9DA7B1',     // neutral.400
          inverted: '#FAFBFC',   // surface
        },
        // Background layers
        background: {
          canvas: '#F7F9FA',     // neutral.50
          subtle: '#EDF1F4',     // neutral.100
          surface: '#FAFBFC',    // elevated surface
          elevated: '#FFFFFF',   // pure white when needed
          inverted: '#14181D',   // ink
        },
        surface: {
          DEFAULT: '#FAFBFC',
          muted: '#F7F9FA',
          subtle: '#EDF1F4',
          inverted: '#14181D'
        },
        // Border tokens
        border: {
          DEFAULT: '#E1E6EB',    // neutral.200
          subtle: '#E1E6EB',
          strong: '#C9D0D6',     // neutral.300
          focus: '#1F60E8',
        },
        // Feedback / status
        success: '#16A34A',
        warning: '#F59E0B',
        error: '#DC2626',
        info: '#0EA5E9',
        // Primary brand (legacy compatibility)
        primary: {
          DEFAULT: '#1F60E8',
          50: '#EEF4FF',
          100: '#DBE7FE',
          200: '#BFD4FE',
          300: '#94B5FD',
          400: '#6293FA',
          500: '#3570F6',
          600: '#1F60E8',
          700: '#184BC2',
          800: '#143D9B',
          900: '#112F75'
        },
        'text-primary': '#14181D', // legacy alias
      },
      fontFamily: {
        heading: ['var(--font-ubuntu)', 'Ubuntu', 'system-ui', 'sans-serif'],
        body: ['var(--font-nunito)', 'Nunito', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Typography scale from STYLE.md
        'h1': ['48px', { lineHeight: '56px', letterSpacing: '-0.5px', fontWeight: '700' }],
        'h2': ['36px', { lineHeight: '44px', letterSpacing: '-0.25px', fontWeight: '700' }],
        'h3': ['28px', { lineHeight: '36px', fontWeight: '700' }],
        'h4': ['22px', { lineHeight: '30px', fontWeight: '600' }],
        'body-l': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-m': ['16px', { lineHeight: '26px', fontWeight: '400' }],
        'body-s': ['14px', { lineHeight: '22px', fontWeight: '400' }],
        'ui-meta': ['12px', { lineHeight: '16px', fontWeight: '600', letterSpacing: '0.6px' }],
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px', 
        'lg': '16px',
        'pill': '9999px',
      },
      boxShadow: {
        'xs': '0 1px 2px rgba(0,0,0,0.06)',
        'sm': '0 2px 6px rgba(0,0,0,0.08)',
        'md': '0 6px 18px rgba(0,0,0,0.10)',
        'lg': '0 12px 32px rgba(0,0,0,0.12)',
      },
      spacing: {
        '1': '4px',   // 4px base
        '2': '8px',   // 8px
        '3': '12px',  // 12px
        '4': '16px',  // 16px
        '5': '20px',  // 20px
        '6': '24px',  // 24px
        '8': '32px',  // 32px
        '10': '40px', // 40px
        '12': '48px', // 48px
        '16': '64px', // 64px
        '20': '80px', // 80px
        '24': '96px', // 96px
        '18': '4.5rem',
        '22': '5.5rem',
      },
      backgroundImage: {
        // Gradients – refreshed blues & dark neutrals
        'brand-gradient': 'linear-gradient(135deg, #1F60E8 0%, #143D9B 100%)',
        'brand-bright': 'linear-gradient(135deg, #1F60E8 0%, #4F9BFF 55%, #1F60E8 100%)',
        'brand-radial': 'radial-gradient(circle at 30% 30%, #3570F6 0%, #1F60E8 50%, #143D9B 100%)',
        'performance-gradient': 'linear-gradient(135deg, #1F60E8 0%, #22D3EE 100%)',
        // Action gradient (removed orange; multi-stop blue energy)
        'action-gradient': 'linear-gradient(135deg, #1F60E8 0%, #4F9BFF 45%, #143D9B 100%)',
        // Neutral / dark gradients
        'gray-steel': 'linear-gradient(135deg, #F7F9FA 0%, #C9D0D6 45%, #4B5560 100%)',
        'gray-smoke': 'linear-gradient(135deg, #FFFFFF 0%, #E1E6EB 50%, #C9D0D6 100%)',
        'dark-carbon': 'linear-gradient(135deg, #1E242B 0%, #14181D 60%, #0D1013 100%)',
        'dark-vignette': 'radial-gradient(circle at 50% 40%, #323942 0%, #14181D 70%, #0D1013 100%)',
      },
      transitionTimingFunction: {
        'standard': 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      },
      transitionDuration: {
        'fast': '150ms',
        'med': '250ms',
        'slow': '400ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config

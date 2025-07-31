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
        // Design System Colors from STYLE.md
        brand: {
          DEFAULT: '#2563EB',
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563EB',
          700: '#1d4ed8',
          800: '#1E40AF',
          900: '#1e3a8a',
          dark: '#1E40AF'
        },
        accent: '#FF6B2C',
        support: '#14B8A6',
        ink: '#0B1020',
        body: '#1F2937',
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#F1F5F9'
        },
        border: '#E5E7EB',
        background: {
          DEFAULT: '#FFFFFF',
          muted: '#F8FAFC'
        },
        // Semantic colors
        success: '#16A34A',
        warning: '#F59E0B',
        error: '#DC2626',
        info: '#0EA5E9',
        // Legacy colors for compatibility
        primary: {
          DEFAULT: '#2563EB',
          800: '#1E40AF',
        },
        'text-primary': '#0B1020',
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
        // Gradients from STYLE.md
        'brand-gradient': 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
        'performance-gradient': 'linear-gradient(135deg, #2563EB 0%, #22D3EE 100%)',
        'action-gradient': 'linear-gradient(135deg, #FF6B2C 0%, #F59E0B 100%)',
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

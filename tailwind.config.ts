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
        primary: {
          DEFAULT: '#2F3C7E',      // Deep royal blue
          50: '#eff1ff',
          100: '#e2e5ff',
          200: '#c8ceff',
          300: '#a5aaff',
          400: '#8085ff',
          500: '#5f61ff',
          600: '#4a3cfc',
          700: '#3f2de8',
          800: '#2F3C7E',
          900: '#2b2b5a',
        },
        secondary: '#F5F5F5',    // Cool gray
        accent: {
          DEFAULT: '#F4A261',       // Warm gold/amber
          50: '#fef8ec',
          100: '#fcedd3',
          200: '#f8d9a5',
          300: '#F4A261',
          400: '#f09339',
          500: '#ed7f23',
          600: '#de6418',
          700: '#b84e16',
          800: '#933f18',
          900: '#783617',
        },
        'text-primary': '#212529', // Dark slate
        background: '#FAFAFA',   // Soft off-white
      },
      fontFamily: {
        heading: ['var(--font-ubuntu)', 'sans-serif'],
        body: ['var(--font-nunito)', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
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

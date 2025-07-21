/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Premium dark color system
        primary: {
          black: '#000000',
          dark: '#0A0A0A',
          surface: '#111111',
          blue: '#4169E1',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#A0A0A0',
          muted: '#8B8B8B',
        },
        // Legacy support (keeping for existing components)
        'accent-blue': '#4169E1',
        'accent-green': '#10B981',
        'text-primary': '#FFFFFF',
        'text-secondary': '#A0A0A0',
        'primary-background': '#000000',
        'primary-secondary': '#0A0A0A',
        border: '#1F1F1F',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'h1': ['40px', { lineHeight: '1.1', fontWeight: '600', letterSpacing: '-0.02em' }],
        'h2': ['32px', { lineHeight: '1.2', fontWeight: '600', letterSpacing: '-0.01em' }],
        'h3': ['24px', { lineHeight: '1.3', fontWeight: '500' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['14px', { lineHeight: '1.6', fontWeight: '400' }],
        'h1-desktop': ['56px', { lineHeight: '1.1', fontWeight: '600', letterSpacing: '-0.02em' }],
        'h2-desktop': ['40px', { lineHeight: '1.2', fontWeight: '600', letterSpacing: '-0.01em' }],
        'h3-desktop': ['28px', { lineHeight: '1.3', fontWeight: '500' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      boxShadow: {
        'premium': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'blue-glow': '0 0 20px rgba(65, 105, 225, 0.5)',
        'white-glow': '0 0 20px rgba(255, 255, 255, 0.1)',
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.3)',
        'medium': '0 4px 6px rgba(0, 0, 0, 0.3)',
        'large': '0 10px 25px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'blue-gradient': 'radial-gradient(ellipse at top, rgba(65, 105, 225, 0.3) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
} 
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#14110E',        // warm near-black
        coal: '#1E1A15',
        cream: '#F6F1E7',      // page background
        parchment: '#EDE5D6',
        gold: '#C9A24B',       // primary accent
        'gold-light': '#E3C77D',
        sage: '#8A9A7B',
        walnut: '#4A3526',
        muted: '#6B6258',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-jost)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        luxe: '0.28em',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.22,1,0.36,1) forwards',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
};

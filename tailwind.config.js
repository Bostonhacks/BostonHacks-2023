/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        misterpixel: ['misterpixel', 'serif'],
        minecraft: ['minecraft', 'serif'],
        ft88: ['ft88-reg', 'serif'],
        ft88b: ['ft88-bold', 'serif'],
      },
      colors: {
        'text-primary': '#000000', //"#FFFFFF" add this when we don't have a white background
        'text-secondary': '#965340',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'scale(1.0)' },
          '50%': { transform: 'scale(1.2) rotate(-7deg)' },
          '100%': { transform: 'scale(1.0)' },
          '50%': { transform: 'rotate(-5deg) scale(1.2)' },
          '20%, 75%': { transform: 'rotate(5deg) scale(1.2)'},
        },
      },
      animation: {
        wiggle: 'wiggle ease-out 0.3s',
      }
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}"
  ],
  theme: {
    extend: {
      colors: {
        sakura: {
          50:  '#fef2f6',
          100: '#fde6ef',
          200: '#fccede',
          300: '#fab0c8',
          400: '#f682a8',
          500: '#f0598c',
          600: '#e03570',
          700: '#c4245a',
          800: '#a21e4c',
          900: '#891d42',
        },
        cream: {
          50:  '#fdfcf9',
          100: '#faf5ec',
          200: '#f5ead8',
          300: '#edd8b8',
          400: '#e2c190',
          500: '#d6a86c',
          600: '#c48e50',
          700: '#a57340',
          800: '#875e37',
          900: '#6f4d2f',
        },
        lotus: {
          50:  '#f5f0ff',
          100: '#ede3ff',
          200: '#dccbff',
          300: '#c4a6ff',
          400: '#a87aff',
          500: '#8f4fff',
          600: '#7a2cff',
          700: '#6318eb',
          800: '#5215c7',
          900: '#4514a3',
        },
      },
      fontFamily: {
        serif:  ['"Playfair Display"', 'Georgia', 'serif'],
        sans:   ['"Nunito"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive'],
      },
      backgroundImage: {
        'sakura-pattern': "url('/assets/images/sakura-pattern.svg')",
        'hero-gradient': 'linear-gradient(135deg, #fde6ef 0%, #faf5ec 50%, #ede3ff 100%)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'petal-fall': 'petalFall 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        petalFall: {
          '0%':   { transform: 'translateY(-10px) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(720deg)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

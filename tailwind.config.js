/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        capi: {
          neon:    '#00E676',
          primary: '#00D26A',
          dark:    '#0B3B2E',
          deep:    '#051912',
          gold:    '#F5C518',
          cream:   '#F5F5F0'
        }
      },
      fontFamily: {
        display: ['Sora', 'Poppins', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'neon':    '0 0 30px rgba(0, 230, 118, 0.5)',
        'neon-lg': '0 0 60px rgba(0, 230, 118, 0.6)',
        'neon-sm': '0 0 15px rgba(0, 230, 118, 0.35)'
      },
      backgroundImage: {
        'radial-green': 'radial-gradient(circle at 50% 0%, rgba(0,230,118,0.25), transparent 60%)',
        'radial-dark':  'radial-gradient(ellipse at top, #0B3B2E 0%, #051912 60%)'
      },
      animation: {
        'float':       'float 6s ease-in-out infinite',
        'float-slow':  'float 9s ease-in-out infinite',
        'pulse-glow':  'pulseGlow 3s ease-in-out infinite',
        'spin-slow':   'spin 20s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' }
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,230,118,0.4)' },
          '50%':      { boxShadow: '0 0 45px rgba(0,230,118,0.8)' }
        }
      }
    }
  },
  plugins: []
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'class',

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },

    extend: {

      /* ── Colors ── */
      colors: {
        /* Core Dark Palette */
        darkBase:    '#0a0a0a',
        darkMid:     '#111111',
        darkCard:    '#161616',
        darkSurface: '#1c1c1c',

        /* Gold Accent */
        goldColor:   '#C9A84C',
        goldLight:   '#E8C97A',
        goldPale:    '#f5e6c0',

        /* Text */
        creamColor:  '#fdf6e9',
        silverColor: '#c0c0c0',
        mutedColor:  '#777777',

        /* Semantic Helpers */
        darkBase2:   '#050505',
        darkBorder:  'rgba(201,168,76,0.15)',
      },

      /* ── Font Families ── */
      fontFamily: {
        playfair:   ['"Playfair Display"', 'Georgia', 'serif'],
        cormorant:  ['"Cormorant Garamond"', 'Georgia', 'serif'],
        montserrat: ['"Montserrat"', 'system-ui', 'sans-serif'],
      },

      /* ── Font Sizes ── */
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
      },

      /* ── Spacing ── */
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
      },

      /* ── Border Radius ── */
      borderRadius: {
        'none': '0',
      },

      /* ── Keyframes ── */
      keyframes: {
        /* Floating Y */
        floatY: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-18px)' },
        },
        /* Pulse Glow */
        pulseGlow: {
          '0%, 100%': { transform: 'scale(1)',   opacity: '0.7' },
          '50%':      { transform: 'scale(1.1)', opacity: '1'   },
        },
        /* Shimmer */
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
        /* Fade In Up */
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        /* Scale In */
        scaleIn: {
          '0%':   { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },

      /* ── Animations ── */
      animation: {
        floatY:    'floatY 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
        shimmer:   'shimmer 2.5s linear infinite',
        fadeInUp:  'fadeInUp 0.7s ease forwards',
        scaleIn:   'scaleIn 0.5s ease forwards',
      },

      /* ── Box Shadow ── */
      boxShadow: {
        'gold-sm':  '0 4px  20px rgba(201, 168, 76, 0.12)',
        'gold-md':  '0 10px 40px rgba(201, 168, 76, 0.18)',
        'gold-lg':  '0 20px 70px rgba(201, 168, 76, 0.22)',
        'dark-lg':  '0 25px 60px rgba(0, 0, 0, 0.6)',
      },

      /* ── Background Image ── */
      backgroundImage: {
        'gold-shimmer': 'linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)',
        'dark-gradient': 'linear-gradient(180deg, #0a0a0a 0%, #111111 100%)',
      },

      /* ── Transition ── */
      transitionDuration: {
        '400': '400ms',
      },

      /* ── Drop Shadow (filter) ── */
      dropShadow: {
        'gold': '0 20px 40px rgba(201, 168, 76, 0.18)',
      },
    },

    /* ── Container ── */
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm:      '1.5rem',
        md:      '2rem',
        lg:      '3rem',
        xl:      '4rem',
      },
    },
  },

  plugins: [],
};
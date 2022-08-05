/* eslint-disable @typescript-eslint/no-var-requires */

const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const svgToDataUri = require('mini-svg-data-uri')

/** @type {import('tailwindcss').Config} */
module.exports = {
  // corePlugins: [],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: [...defaultTheme.fontFamily.serif],
        display: ['Bungee', 'Pica'],
        mono: ['Input Mono', 'Space Mono', 'Fira Code', ...defaultTheme.fontFamily.mono],
        mockup: ['Balsamiq Sans', 'cursive'],
        proto: [
          'Flow Circular',
          'Redacted Script',
          'Flow Block',
          'Blokk Neue',
          'Blokk',
          'Flow Rounded',
          'cursive',
        ],
      },
      fontSize: {
        '2xs': ['0.625rem', '0.875rem'],
      },
      colors: {
        'gray': colors.stone,
        'info': '#bfdbfe',
        'success': '#15803d',
        'warning': '#fcd34d',
        'danger': '#dc2626',
        'brand': {
          DEFAULT: '#002894',
          50: '#f2f4fa',
          100: '#e6eaf4',
          200: '#bfc9e4',
          300: '#99a9d4',
          400: '#4d69b4',
          500: '#002894',
          600: '#002485',
          700: '#001e6f',
          800: '#001859',
          900: '#001449',
        },
        // 'primary': {
        //   DEFAULT: '#002894',
        //   50: '#f2f4fa',
        //   100: '#e6eaf4',
        //   200: '#bfc9e4',
        //   300: '#99a9d4',
        //   400: '#4d69b4',
        //   500: '#002894',
        //   600: '#002485',
        //   700: '#001e6f',
        //   800: '#001859',
        //   900: '#001449',
        // },
        'primary': colors.stone,
        // 'primary': {
        //   DEFAULT: '#314B6F',
        //   dark: '#ffffff',
        //   50: '#f5f6f8',
        //   100: '#eaedf1',
        //   200: '#ccd2db',
        //   300: '#adb7c5',
        //   400: '#6f819a',
        //   500: '#314B6F',
        //   600: '#2c4464',
        //   700: '#253853',
        //   800: '#1d2d43',
        //   900: '#182536',
        // },
        // 'secondary': #eaedf1,
        // blue-ribbon
        'secondary': {
          50: '#f2f7ff',
          100: '#e6eeff',
          200: '#bfd5ff',
          300: '#99bcff',
          400: '#4d8aff',
          500: '#0058ff',
          600: '#004fe6',
          700: '#0042bf',
          800: '#003599',
          900: '#002b7d',
        },
        // Secondary, Neutral
        // secondary: {
        //   DEFAULT: '#64748B',
        //   50: '#F8FAFC',
        //   100: '#F1F5F9',
        //   200: '#E2E8F0',
        //   300: '#CBD5E1',
        //   400: '#94A3B8',
        //   500: '#64748B',
        //   600: '#475569',
        //   700: '#334155',
        //   800: '#1E293B',
        //   900: '#0F172A',
        // },
        'accent': {
          DEFAULT: '#ee7d1e',
          50: '#fef9f4',
          100: '#fdf2e9',
          200: '#fbdfc7',
          300: '#f8cba5',
          400: '#f3a462',
          500: '#ee7d1e',
          600: '#d6711b',
          700: '#b35e17',
          800: '#8f4b12',
          900: '#753d0f',
        },
        'main': {
          DEFAULT: colors.gray[700],
          dark: '#ffffff',
        },
        'highlight': {
          DEFAULT: colors.red[700],
          dark: colors.violet[800],
        },
        'highlight-background': {
          DEFAULT: colors.yellow[400],
          dark: '#1fb6ff',
        },
        'vue-one': '#64B687',
        'vue-two-three': '#3C8171',
        'vue-two': '#42B883',
        'vue-three': '#35495E',
        'code': {
          'punctuation': '#A1E8FF',
          'tag': '#D58FFF',
          'attr-name': '#4BD0FB',
          'attr-value': '#A2F679',
          'string': '#A2F679',
          'highlight': 'rgb(125 211 252 / 0.1)',
        },
      },
      gridTemplateColumns: {
        24: 'repeat(24, minmax(60px, 1fr))',
      },
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
        14: '14',
        15: '15',
        16: '16',
      },
      backgroundSize: ({ theme }) => ({
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        ...theme('spacing'),
      }),
      fill: ({ theme }) => ({
        gray: theme('colors.gray'),
      }),
      backgroundImage: theme => ({
        squiggle: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 3" enable-background="new 0 0 6 3" width="6" height="3" fill="${theme(
            'colors.blue.700',
          )}"><polygon points="5.5,0 2.5,3 1.1,3 4.1,0"/><polygon points="4,0 6,2 6,0.6 5.4,0"/><polygon points="0,2 1,3 2.4,3 0,0.6"/></svg>`,
        )}")`,
      }),
      boxShadow: {
        tag: '3px 3px 0 #004085',
        field: 'rgba(10, 10, 10, 0.1) 0px 1px 2px 0px inset',
        px: '0 0 0 1px rgba(0, 0, 0, 0.5)',
        link: 'inset 0 -0.125em 0 0 #fff, inset 0 -0.375em 0 0 rgba(165, 243, 252, 0.4)',
      },
      cursor: {
        grab: 'grab',
        grabbing: 'grabbing',
      },
      animation: {
        wiggle: 'wiggle 1s infinite',
      },
      keyframes: {
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        wiggle: {
          '0%, 100%': {
            transform: 'scale(1.2) rotate(7deg)',
          },
          '50%': {
            transform: 'scale(0.8) rotate(-7deg)',
          },
        },
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'in-quad': 'cubic-bezier(.55, .085, .68, .53)',
        'out-quad': 'cubic-bezier(.25, .46, .45, .94)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

import { defineConfig } from 'windicss/helpers';
import colors from 'windicss/colors';
import plugin from 'windicss/plugin';

const appColors = require('./design-tokens').colors;
const extendedColors = { ...colors, ...appColors };

export default defineConfig({
  darkMode: 'class',
  // https://windicss.org/posts/v30.html#attributify-mode
  attributify: true,
  theme: {
    backgroundColor: {
      black: 'black',
    },
    filter: {
      none: 'none',
      grayscale: 'grayscale(1)',
      invert: 'invert(1)',
      sepia: 'sepia(1)',
    },
    backdropFilter: {
      none: 'none',
      blur: 'blur(20px)',
    },
    extend: {
      colors: {
        primary: extendedColors.stone,
        secondary: extendedColors.athensGray,
        accent: extendedColors.tango,

        green: extendedColors.emerald,
        purple: extendedColors.violet,
        yellow: extendedColors.amber,
        pink: extendedColors.fuchsia,
        'san-juan': extendedColors.sanJuan,

        gray: extendedColors.slate,
        neutral: extendedColors.gray,

        brand: extendedColors.toreaBay,

        'vue-one': '#64B687',
        'vue-two-three': '#3C8171',
        'vue-two': '#42B883',
        'vue-three': '#35495E',
        code: {
          punctuation: '#A1E8FF',
          tag: '#D58FFF',
          'attr-name': '#4BD0FB',
          'attr-value': '#A2F679',
          string: '#A2F679',
          highlight: 'rgb(125 211 252 / 0.1)',
        },
      },
      fontFamily: {
        sans: ['Inter var'],
        display: ['Pica'],
        mono: ['Space Mono', 'Fira Code'],
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
      lineClamp: {
        sm: '3',
        lg: '10',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              color: 'inherit',
              opacity: 0.75,
              fontWeight: '500',
              textDecoration: 'underline',
              '&:hover': {
                opacity: 1,
                color: colors.teal[600],
              },
            },
            b: { color: 'inherit' },
            strong: { color: 'inherit' },
            em: { color: 'inherit' },
            h1: { color: 'inherit' },
            h2: { color: 'inherit' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            code: { color: 'inherit' },
          },
        },
      },
    },
  },
  variants: {
    filter: ['responsive'],
    backdropFilter: ['responsive'],
    backgroundColor: [
      'group-focus-within',
      'group-focus-visible',
      'group-active',
      'group-visited',
      'group-disabled',
      'hocus',
      'group-hocus',
      'can-hover',
      'no-hover',
    ],
  },
  plugins: [
    require('windicss/plugin/scroll-snap'),
    require('windicss/plugin/aspect-ratio'),
    require('@windicss/plugin-question-mark'),
    require('windicss/plugin/forms'),
    require('windicss/plugin/filters'),
    require('windicss/plugin/line-clamp'),
    require('@windicss/plugin-scrollbar'),
    require('@windicss/plugin-interaction-variants'),
    require('windicss/plugin/typography')({
      modifiers: ['DEFAULT', 'sm', 'lg', 'red'],
    }),
    require('@windicss/plugin-animations')({
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000,
      },
    }),
    require('@windicss/plugin-heropatterns')({
      // the list of patterns you want to generate a class for
      // the names must be in kebab-case
      // an empty array will generate all 87 patterns
      patterns: ['polka-dots', 'signal'],

      // The foreground colors of the pattern
      colors: {
        default: '#9C92AC',
        'blue-dark': '#000044', // also works with rgb(0,0,205)
      },

      // The foreground opacity
      opacity: {
        default: '0.4',
        100: '1.0',
      },
    }),
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.skew-10deg': {
          transform: 'skewY(-10deg)',
        },
        '.skew-15deg': {
          transform: 'skewY(-15deg)',
        },
      };
      addUtilities(newUtilities);
    }),
    plugin(({ addComponents }) => {
      const buttons = {
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
        },
        '.btn-blue': {
          backgroundColor: '#3490dc',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#2779bd',
          },
        },
        '.btn-red': {
          backgroundColor: '#e3342f',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a',
          },
        },
      };
      addComponents(buttons);
    }),
    plugin(({ addDynamic, variants }) => {
      addDynamic(
        'skew',
        ({ Utility, Style }) => {
          return Utility.handler
            .handleStatic(Style('skew'))
            .handleNumber(0, 360, 'int', (number) => `skewY(-${number}deg)`)
            .createProperty('transform');
        },
        variants('skew'),
      );
    }),
  ],
});

import { defineConfig } from 'windicss/helpers';
import plugin from 'windicss/plugin';
import { colors } from './design-tokens';


function range(size, startAt = 1) {
    return Array.from(Array(size).keys()).map(i => i + startAt)
  }

const typography = require('windicss/plugin/typography')({
    modifiers: ['DEFAULT', 'sm', 'lg', 'red'],
});
const filters = require('windicss/plugin/filters');
const forms = require('windicss/plugin/forms');
const aspectRatio = require('windicss/plugin/aspect-ratio');
const lineClamp = require('windicss/plugin/line-clamp');

export default defineConfig({
    preflight: true,
    extract: {
        include: [
            'Areas/**/*.{vue,ts,jsx,ts,tsx,svelte,cshtml}',
            'Views/**/*.{vue,ts,jsx,ts,tsx,svelte,cshtml}',
            'Scripts/**/*.{vue,ts,jsx,ts,tsx,svelte,cshtml}',
        ],
    },
    safelist: [
        'prose',
        'prose-sm',
        'm-auto',
        'w-80',
        'w-40',
        'w-10',
        'w-8',
        'h-80',
        'h-40',
        'h-10',
        'h-8',
        'border-green-900',
        'bg-primary-300',
        'bg-primary-100',
        // Padding
        range(3).map(i => `p-${i}`), // p-1 to p-3
        // Margin
        range(10).map(i => `mt-${i}`), // mt-1 to mt-10
    ],
    darkMode: 'class',
    plugins: [
        typography,
        filters,
        forms,
        aspectRatio,
        lineClamp,
        plugin(({ addUtilities }) => {
            const newUtilities = {
                '.skew-10deg': {
                    transform: 'skewY(-10deg)',
                },
                '.skew-15deg': {
                    transform: 'skewY(-15deg)',
                },
            }
            addUtilities(newUtilities)
        }),
        plugin(({ addComponents }) => {
            const buttons = {
                '.btn': {
                    padding: '.5rem 1rem',
                    borderRadius: '.25rem',
                    fontWeight: '600',
                },

                '.btn-blue': {
                    'backgroundColor': '#3490dc',
                    'color': '#fff',
                    '&:hover': {
                        backgroundColor: '#2779bd',
                    },
                },

                '.btn-red': {
                    'backgroundColor': '#e3342f',
                    'color': '#fff',
                    '&:hover': {
                        backgroundColor: '#cc1f1a',
                    },
                },
            }
            addComponents(buttons)
        }),
        plugin(({ addDynamic, variants }) => {
            addDynamic('skew', ({ Utility, Style }) => {
                return Utility.handler
                    .handleStatic(Style('skew'))
                    .handleNumber(0, 360, 'int', number => `skewY(-${number}deg)`)
                    .createProperty('transform')
            }, variants('skew'))
        }),
    ],
    theme: {
        extend: {
            colors: {
                brand: colors["torea-bay"],
                primary: colors["san-juan"],
                secondary: colors["blue-gray"],
                accent: colors.tango,
            },
            boxShadow: {
                tag: '3px 3px 0 #004085',
                field: 'rgba(10, 10, 10, 0.1) 0px 1px 2px 0px inset',
            },
            fontFamily: {
                sans: ['Inter var', 'Roboto', 'sans-serif'],
                display: ['Pica'],
                mono: [
                    'Roboto Mono',
                    'Cousine',
                    'Input Mono',
                ],
                cursive: ['Balsamiq Sans', 'cursive'],
                proto: [
                    'Redacted Script',
                    '"Flow Block"',
                    '"Blokk Neue"',
                    'Blokk',
                    '"Flow Circular"',
                    '"Flow Rounded"',
                ],
            },
            fontSize: {
                "2xs": ["0.625rem", "0.875rem"],
            },
            gridTemplateColumns: {
                22: "repeat(22, minmax(60px, 1fr))",
            },
            animation: {
                wiggle: 'wiggle 1s infinite',
            },
            keyframes: {
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
        }
    },
});

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined)
      return `rgb(var(${variable}))`

    return `rgb(var(${variable}) / ${opacityValue})`
  }
}

module.exports = {
  colors: {
    // Police Blue
    sanJuan: {
      // DEFAULT: withOpacityValue('--color-primary-500'),
      // 50: withOpacityValue('--color-primary-50'),
      // 100: withOpacityValue('--color-primary-100'),
      // 200: withOpacityValue('--color-primary-200'),
      // 300: withOpacityValue('--color-primary-300'),
      // 400: withOpacityValue('--color-primary-400'),
      // 500: withOpacityValue('--color-primary-500'),
      // 600: withOpacityValue('--color-primary-600'),
      // 700: withOpacityValue('--color-primary-700'),
      // 800: withOpacityValue('--color-primary-800'),
      // 900: withOpacityValue('--color-primary-900'),
      DEFAULT: '#314B6F',
      50: '#f5f6f8',
      100: '#eaedf1',
      200: '#ccd2db',
      300: '#adb7c5',
      400: '#6f819a',
      500: '#314B6F',
      600: '#2c4464',
      700: '#253853',
      800: '#1d2d43',
      900: '#182536',
    },
    // Princeton Orange
    tango: {
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
    // Imperial Blue
    toreaBay: {
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
    blueGray: {
      DEFAULT: '#64748B',
      50: '#F8FAFC',
      100: '#F1F5F9',
      200: '#E2E8F0',
      300: '#CBD5E1',
      400: '#94A3B8',
      500: '#64748B',
      600: '#475569',
      700: '#334155',
      800: '#1E293B',
      900: '#0F172A',
    },
    athensGray: {
      DEFAULT: '#ebedf1',
      50: '#fefefe',
      100: '#fdfdfe',
      200: '#fafbfc',
      300: '#f7f8f9',
      400: '#f1f2f5',
      500: '#ebedf1',
      600: '#d4d5d9',
      700: '#b0b2b5',
      800: '#8d8e91',
      900: '#737476'
    },
    shark: {
      DEFAULT: '#212529',
      50: '#f4f4f4',
      100: '#e9e9ea',
      200: '#c8c9ca',
      300: '#a6a8a9',
      400: '#646669',
      500: '#212529',
      600: '#1e2125',
      700: '#191c1f',
      800: '#141619',
      900: '#101214'
    },
    alabaster: {
      DEFAULT: '#f8f9fa',
      50: '#ffffff',
      100: '#fefeff',
      200: '#fdfefe',
      300: '#fcfdfd',
      400: '#fafbfc',
      500: '#f8f9fa',
      600: '#dfe0e1',
      700: '#babbbc',
      800: '#959596',
      900: '#7a7a7b'
    }
  },
}

/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

 module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    customPercentSpacing: {
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      '9/16': '56.25%',
      '1/24': '4.166667%',
      '2/24': '8.333333%',
      '3/24': '12.5%',
      '4/24': '16.666667%',
      '5/24': '20.833333%',
      '6/24': '25%',
      '7/24': '29.166667%',
      '8/24': '33.333333%',
      '9/24': '37.5%',
      '10/24': '41.666667%',
      '11/24': '45.833333%',
      '12/24': '50%',
      '13/24': '54.166667%',
      '14/24': '58.333333%',
      '15/24': '62.5%',
      '16/24': '66.666667%',
      '17/24': '70.833333%',
      '18/24': '75%',
      '19/24': '79.166667%',
      '20/24': '83.333333%',
      '21/24': '87.5%',
      '22/24': '91.666667%',
      '23/24': '95.833333%',
      full: '100%',
    },
    customScreenXSpacing: {
      '10vw': '10vw',
      '20vw': '20vw',
      '30vw': '30vw',
      '40vw': '40vw',
      '50vw': '50vw',
      '60vw': '60vw',
      '70vw': '70vw',
      '80vw': '80vw',
      '90vw': '90vw',
      screen: '100vw',
    },
    customScreenYSpacing: {
      '10vh': '10vh',
      '20vh': '20vh',
      '30vh': '30vh',
      '40vh': '40vh',
      '50vh': '50vh',
      '60vh': '60vh',
      '70vh': '70vh',
      '80vh': '80vh',
      '90vh': '90vh',
      screen: '100vh',
    },
    extend: {
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90'
      },
      screens: {
        'sms': {
          'max': '320px'
        },
        'smd': {
          'min': '360px'
        }
      },
      colors: {
        'app-brown': '#4a4541',
        'app-pink': '#f4a8b2',
        'app-main-gray': '#3c3c3b',
        'app-main-gray-light': '#4a4541'
      },
      fontFamily: {
        OpenSans: ['Open Sans'],
      },
      spacing: {
        50: '12.5rem',
        4.5: '1.125rem',
        192: '48rem',
        18: '4.5rem'
      },
      fontSize: {
        '28': '1.75rem',
        '9': '0.5625rem',
        '10': '0.625rem',
        '0': '0',
        'full': '100%'
      },
      width: (theme) => ({
        ...theme('customPercentSpacing'),
        ...theme('customScreenXSpacing'),
      }),
      height: (theme) => ({
        ...theme('customPercentSpacing'),
        ...theme('customScreenYSpacing'),
      }),
      minWidth: (theme) => ({
        ...theme('customPercentSpacing'),
        ...theme('customScreenXSpacing'),
        ...theme('spacing'),
      }),
      minHeight: (theme) => ({
        ...theme('customPercentSpacing'),
        ...theme('customScreenYSpacing'),
        ...theme('spacing'),
      }),
      maxWidth: (theme) => ({
        ...theme('customPercentSpacing'),
        ...theme('customScreenXSpacing'),
        ...theme('spacing'),
        'bp-md': '960px',
        'bp-xl': '1140px',
      }),
      maxHeight: (theme) => ({
        ...theme('customPercentSpacing'),
        ...theme('customScreenYSpacing'),
        ...theme('customPXSpacing'),
        ...theme('spacing'),
      }),
      padding: (theme) => ({
        ...theme('customPercentSpacing'),
      }),
      margin: (theme) => ({
        ...theme('customPercentSpacing'),
      }),
      inset: (theme) => ({
        ...theme('customPercentSpacing'),
      }),
      translate: (theme, { negative }) => ({
        ...theme('customScreenXSpacing'),
        ...theme('customScreenYSpacing'),
        ...negative(theme('customScreenXSpacing')),
        ...negative(theme('customScreenYSpacing')),
      }),
      animation: {
        'spin-reverse': 'spin 5s linear infinite',
        'spin-reverse-slow': 'spin 10s linear infinite'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    container: false,
  },
}
